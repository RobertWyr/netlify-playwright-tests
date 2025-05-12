# Netlify Playwright Tests

Automated tests for the [Netlify](https://www.netlify.com/) homepage using [Playwright](https://playwright.dev/).

## 🚀 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone git@github.com:RobertWyr/netlify-playwright-tests.git
   cd netlify-playwright-tests
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

---

## 🧪 Test Execution Instructions

### Run all tests (headless by default)
```bash
npm run test
```

### Run tests in headed (visible browser) mode
```bash
npm run test-headed
```

### Open Playwright Test UI
```bash
npm run test-ui
```

### Debug mode
```bash
npm run test-debug
```

### View last trace (after failure)
```bash
npm run test-trace
```

### View last HTML report
```bash
npm run report
```

---

## 💡 Approach & Design

- **Page Object Model (POM)** used for homepage (`NetlifyHomePage`) to encapsulate selectors and actions
- Separate **`tests/`** and **`pages/`** folders for maintainability
- Test cases focus on:
  - Newsletter form submission (valid + invalid)
  - Redirect behavior after submission
  - Input validation via click and Enter
- Email addresses are generated dynamically using a utility (`generateRandomEmail`) to avoid duplicates and caching issues
- Configured Playwright to run tests with trace, screenshots, and HTML reports on failure

---

## 📝 Assumptions & Limitations

- Newsletter form is assumed to be testable publicly without authentication
- HubSpot redirect is expected within 10 seconds (timeout may need adjustment on slow networks)
- Some elements (e.g. confirmation pages) are not easily assertable due to iframe usage or external redirects
- Email validation is assumed to trigger client-side, and no CAPTCHA or rate-limiting is enforced

---

## 📁 Project Structure

```
.
├── pages/                  # Page Object Models
│   └── NetlifyHomePage.ts
├── tests/                  # Playwright test specs
│   └── newsletter.spec.ts
├── utils/                  # Helper utilities
│   └── randomEmail.ts
├── playwright.config.ts   # Main Playwright config
└── README.md
```
