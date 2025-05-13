import { test, expect } from '@playwright/test';
import { NetlifyHomePage } from '../pages/NetlifyHomePage';

test.describe('Newsletter form – invalid submission', () => {
  test('shows validation error on invalid email and stays on page', async ({ page }) => {
    const home = new NetlifyHomePage(page);
    await home.goto();

    const badEmail = 'notanemail';
    console.log('🧪 Using bad email:', badEmail);

    await home.typeEmail(badEmail);
    await home.submitWithClick();

    // Make sure user is not redirected
    await home.expectNoRedirect();

    // Make sure some kind of error appears (based on common error classes)
    const errorLocator = page.locator(
      '[data-testid="email-error"], .form-error, .error, .hs-error-msg'
    );

    await expect(errorLocator).toBeVisible({ timeout: 5000 });
    const errorText = await errorLocator.innerText();
    console.log('⚠️ Validation error text:', errorText);
    expect(errorText.length).toBeGreaterThan(2); // basic sanity check
  });
});
