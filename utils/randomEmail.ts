// utils/randomEmail.ts
export function generateRandomEmail(prefix = 'test'): string {
  const timestamp = Date.now();
  return `${prefix}+${timestamp}@example.com`;
}
