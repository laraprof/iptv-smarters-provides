export interface EmailValidationResult {
  valid: boolean;
  reason?: string;
  warning?: string;
  risk_score: number;
}

export function validateContactEmail(email: string): EmailValidationResult {
  const result: EmailValidationResult = {
    valid: true,
    risk_score: 0,
  };

  // 1. Format check
  // Must match pattern: local@domain.tld
  // No spaces, no special chars except: . _ % + - in local part
  // Domain must have at least one dot
  const formatRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!formatRegex.test(email)) {
    return {
      valid: false,
      reason: "Invalid email format",
      risk_score: 100,
    };
  }

  const [localPart, domainPart] = email.toLowerCase().split('@');

  // 2. Disposable / temporary email block
  const disposableDomains = [
    "mailinator.com", "guerrillamail.com", "tempmail.com",
    "10minutemail.com", "yopmail.com", "trashmail.com",
    "throwam.com", "sharklasers.com", "dispostable.com"
  ];
  if (disposableDomains.includes(domainPart)) {
    return {
      valid: false,
      reason: "Disposable email not allowed",
      risk_score: 100,
    };
  }

  // Flag suspicious random string domains
  const domainName = domainPart.split('.')[0];
  if (/^[a-z0-9]{15,}$/.test(domainName) || (domainName.length > 5 && !/[aeiouy]/.test(domainName))) {
    result.risk_score += 50;
    result.warning = "Domain appears suspicious";
  }

  // 3. Spam pattern detection
  if (/^\d+$/.test(localPart)) {
    return {
      valid: false,
      reason: "Local part cannot be only digits",
      risk_score: 100,
    };
  }

  if (/(.)\1{2,}/.test(localPart)) {
    return {
      valid: false,
      reason: "Consecutive identical characters detected",
      risk_score: 100,
    };
  }

  const keyboardWalks = ["qwerty", "asdf", "1234", "zxcv", "qwert", "asdfg"];
  if (keyboardWalks.some(walk => localPart.includes(walk))) {
    return {
      valid: false,
      reason: "Keyboard pattern detected",
      risk_score: 100,
    };
  }

  if (localPart.length < 3) {
    return {
      valid: false,
      reason: "Local part must be at least 3 characters",
      risk_score: 100,
    };
  }

  // 4. Role / generic address flag
  const roleAddresses = ["info", "admin", "noreply", "support", "contact"];
  if (roleAddresses.includes(localPart)) {
    result.warning = "Generic inbox — replies may be missed";
    result.risk_score += 20; 
  }

  if (result.valid && result.risk_score === 0) {
    result.risk_score = 5;
  }

  return result;
}
