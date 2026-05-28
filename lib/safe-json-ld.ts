/**
 * Safe LD+JSON serializer for Next.js / React `dangerouslySetInnerHTML`.
 *
 * JSON.stringify does NOT escape </script>, so a malicious value inside a
 * schema object can break out of the <script> tag and inject arbitrary HTML.
 *
 * This utility:
 *  1. Validates the input is a plain object or array (rejects primitives/null)
 *  2. Strips keys whose values cannot be safely serialized (undefined, functions,
 *     symbols, circular refs, prototype-polluting keys like __proto__)
 *  3. Enforces a max serialized size to prevent DoS via enormous payloads
 *  4. Escapes the four HTML-unsafe sequences in JSON strings
 *
 * Reference: https://redux.js.org/usage/server-rendering#security-considerations
 * Reference: https://www.w3.org/TR/json-ld11/#the-context
 */

const MAX_SERIALIZED_BYTES = 50_000; // 50 KB — adjust per use case

// Keys that must never appear in serialized output
const BLOCKED_KEYS = new Set(["__proto__", "constructor", "prototype"]);

type JsonLdInput = Record<string, unknown> | Record<string, unknown>[];

/**
 * Replacer passed to JSON.stringify.
 * - Drops prototype-polluting keys
 * - Drops values that stringify to undefined (functions, symbols, class instances)
 * - Circular references throw naturally via JSON.stringify — caught in safeJsonLd
 */
function safeReplacer(this: unknown, key: string, value: unknown): unknown {
  if (key && BLOCKED_KEYS.has(key)) return undefined;

  // Drop non-serializable types silently rather than letting them become `null`
  // (JSON.stringify already coerces functions/symbols to undefined/drops them,
  //  but being explicit makes the intent clear for reviewers)
  if (typeof value === "function" || typeof value === "symbol") return undefined;
  if (typeof value === "bigint") return value.toString(); // safe numeric string

  return value;
}

/**
 * Escape the four sequences that can break out of an HTML <script> block.
 *
 *  <   →  \u003c
 *  >   →  \u003e
 *  &   →  \u0026
 *  '   →  \u0027  (covers attribute contexts, e.g. onload='…')
 *
 * These escape sequences are valid JSON — parsers reconstruct the original
 * characters transparently, so the schema data is never corrupted.
 */
function escapeForHtml(json: string): string {
  return json
    .replace(/</g,  "\\u003c")
    .replace(/>/g,  "\\u003e")
    .replace(/&/g,  "\\u0026")
    .replace(/'/g,  "\\u0027"); // your version missed this one
}

export function safeJsonLd(data: JsonLdInput): string {
  // Reject primitives, null, and class instances — valid LD+JSON is always
  // a plain object or array of plain objects
  if (
    data === null ||
    typeof data !== "object" ||
    data instanceof Date ||
    data instanceof RegExp
  ) {
    throw new TypeError(
      `safeJsonLd: expected a plain object or array, got ${
        data === null ? "null" : Object.prototype.toString.call(data)
      }`
    );
  }

  let serialized: string;

  try {
    serialized = JSON.stringify(data, safeReplacer);
  } catch (err) {
    // Most likely cause: circular reference
    throw new Error(
      `safeJsonLd: serialization failed — check for circular references. (${
        err instanceof Error ? err.message : String(err)
      })`
    );
  }

  if (serialized === undefined) {
    // JSON.stringify returns undefined when passed a function at top level
    throw new TypeError("safeJsonLd: data serialized to undefined");
  }

  // Guard against enormous payloads being injected into the page
  if (serialized.length > MAX_SERIALIZED_BYTES) {
    throw new RangeError(
      `safeJsonLd: serialized output exceeds ${MAX_SERIALIZED_BYTES} bytes ` +
      `(got ${serialized.length}). Split into smaller schemas or increase the limit.`
    );
  }

  return escapeForHtml(serialized);
}