import { test } from '@playwright/test';
import { NetlifyHomePage } from '../pages/NetlifyHomePage';
import { generateRandomEmail } from '../utils/randomEmail';

console.log('🧪 DEBUG:', generateRandomEmail); // <--- to ci powie prawdę


test.describe('Newsletter form', () => {
  // Verifies that submitting a valid email by clicking the submit button redirects to the thank-you page
  test('submits and redirects via click', async ({ page }) => {
    const home = new NetlifyHomePage(page);
    await home.goto();

    // Generate unique email for this run
    const email = generateRandomEmail('click');
    console.log('🧪 Using email (click):', email);
    await home.typeEmail(email);

    // Submit the form using the button
    await home.submitWithClick();

    // Expect redirect to confirmation page
    await home.expectRedirect();
  });

  // Verifies that pressing Enter after typing a valid email also submits the form and redirects
  test('submits and redirects via Enter', async ({ page }) => {
    const home = new NetlifyHomePage(page);
    await home.goto();

    // Generate unique email for this run
    const email = generateRandomEmail('enter');
    console.log('🧪 Using email (enter):', email);
    await home.typeEmail(email);

    // Submit the form using Enter key
    await home.submitWithEnter();

    // Expect redirect to confirmation page
    await home.expectRedirect();
  });

  // Ensures that submitting an invalid email does NOT redirect and user stays on the homepage
  test('does not redirect on invalid email', async ({ page }) => {
    const home = new NetlifyHomePage(page);
    await home.goto();

    const email = 'bademail';
    console.log('🧪 Using invalid email:', email);
    await home.typeEmail(email);

    // Attempt to submit with invalid input
    await home.submitWithClick();

    // Expect to stay on the homepage (no redirect)
    await home.expectNoRedirect();
  });
});
