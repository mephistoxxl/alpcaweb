import { createHmac, randomBytes, randomInt, timingSafeEqual } from "crypto";

const CAPTCHA_TTL_MS = 10 * 60 * 1000;
const DEFAULT_DEV_CAPTCHA_SECRET = "alpca-contact-form-dev-secret";

type CaptchaPayload = {
  answer: number;
  expiresAt: number;
  nonce: string;
};

function getCaptchaSecret(): string {
  return process.env.CONTACT_CAPTCHA_SECRET || process.env.NEXTAUTH_SECRET || DEFAULT_DEV_CAPTCHA_SECRET;
}

function signPayload(payload: string): string {
  return createHmac("sha256", getCaptchaSecret()).update(payload).digest("hex");
}

function safeCompare(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);

  if (bufferA.length !== bufferB.length) {
    return false;
  }

  return timingSafeEqual(bufferA, bufferB);
}

export function createCaptchaChallenge(): { question: string; token: string } {
  const left = randomInt(2, 10);
  const right = randomInt(1, 10);
  const answer = left + right;

  const payload: CaptchaPayload = {
    answer,
    expiresAt: Date.now() + CAPTCHA_TTL_MS,
    nonce: randomBytes(12).toString("hex"),
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = signPayload(encodedPayload);

  return {
    question: `Cuanto es ${left} + ${right}?`,
    token: `${encodedPayload}.${signature}`,
  };
}

export function verifyCaptchaToken(token: string, userAnswer: string): boolean {
  if (!token || !userAnswer) {
    return false;
  }

  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return false;
  }

  const expectedSignature = signPayload(encodedPayload);

  if (!safeCompare(signature, expectedSignature)) {
    return false;
  }

  let payload: CaptchaPayload;

  try {
    payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as CaptchaPayload;
  } catch {
    return false;
  }

  if (typeof payload.answer !== "number" || typeof payload.expiresAt !== "number") {
    return false;
  }

  if (Date.now() > payload.expiresAt) {
    return false;
  }

  const normalizedAnswer = Number.parseInt(userAnswer.trim(), 10);

  if (Number.isNaN(normalizedAnswer)) {
    return false;
  }

  return normalizedAnswer === payload.answer;
}
