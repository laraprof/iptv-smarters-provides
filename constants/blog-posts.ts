import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  author?: string;
  authorUrl?: string;
  content: string;
}

interface BlogMeta {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  author?: string;
  authorUrl?: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { meta: BlogMeta; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return {
      meta: { title: "", excerpt: "", category: "", date: "", readTime: "" },
      content: raw,
    };
  }

  const frontmatter = match[1];
  const content = match[2].trim();

  const meta: Record<string, string | boolean> = {};
  for (const line of frontmatter.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value: string | boolean = line.slice(colonIdx + 1).trim();
    // Strip surrounding quotes
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (value === "true") value = true;
    if (value === "false") value = false;
    meta[key] = value;
  }

  return {
    meta: meta as unknown as BlogMeta,
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { meta, content } = parseFrontmatter(raw);

    return {
      slug,
      title: meta.title,
      excerpt: meta.excerpt,
      category: meta.category,
      date: meta.date,
      readTime: meta.readTime,
      featured: meta.featured || false,
      author: meta.author,
      authorUrl: meta.authorUrl,
      content,
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { meta, content } = parseFrontmatter(raw);

  return {
    slug,
    title: meta.title,
    excerpt: meta.excerpt,
    category: meta.category,
    date: meta.date,
    readTime: meta.readTime,
    featured: meta.featured || false,
    author: meta.author,
    authorUrl: meta.authorUrl,
    content,
  };
}

export function getFeaturedPost(): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.featured);
}
