import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // max czas na test
  expect: {
    timeout: 5000, // max czas na pojedynczy expect
  },
  fullyParallel: true,
  retries: 0,
  workers: 1,

  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    baseURL: 'https://www.netlify.com',
    headless: true,
    trace: 'on-first-retry', // lub 'always'
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
  },

  /*
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  */

  outputDir: 'test-results/', // folder na logi/trace'y
});
