import { Locator, Page, expect } from '@playwright/test';

export class NetlifyHomePage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Email input field in the newsletter form
    this.emailInput = page.locator('input[name="email"]');

    // Subscribe button in the newsletter form
    this.submitButton = page.locator('input[value="Subscribe"]');
  }

  // Navigate to Netlify homepage and wait for scripts to load
  async goto() {
    await this.page.goto('https://www.netlify.com/');
    await this.page.waitForTimeout(2000); // wait for HubSpot embed to initialize
  }

  // Fill email field using .fill() — fast, but less "real"
  async fillEmail(email: string) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.emailInput.evaluate(el => el.blur()); // blur to trigger validation
  }

  // Type email char by char with delay — more like a real user
  async typeEmail(email: string) {
    await this.emailInput.click();
    await this.emailInput.type(email, { delay: 50 });
    await this.emailInput.evaluate(el => el.blur()); // helps bypass bot detection
  }

  // Click submit button (force in case it's covered/animated)
  async submitWithClick() {
    await expect(this.submitButton).toBeVisible();
    await this.submitButton.click({ force: true });
  }

  // Submit form using Enter key
  async submitWithEnter() {
    await this.emailInput.press('Enter');
  }

  // Expect user to be redirected to "thank you" page after successful submit
  async expectRedirect() {
    await this.page.waitForURL(/thanks-for-signing-up/, { timeout: 10000 });
    expect(this.page.url()).toContain('/thanks-for-signing-up');
  }

  // Expect no redirect (e.g., on invalid email submission)
  async expectNoRedirect() {
    await this.page.waitForTimeout(3000); // wait to catch late redirect
    const url = await this.page.url();
    expect(url).toContain('netlify.com');
    expect(url).not.toContain('thanks-for-signing-up');
  }
}
