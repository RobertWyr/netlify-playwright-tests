# Test info

- Name: Newsletter form >> submits and redirects via Enter
- Location: C:\Users\rober\netlify-playwright-tests\tests\newsletter.spec.ts:27:7

# Error details

```
TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
    at NetlifyHomePage.expectRedirect (C:\Users\rober\netlify-playwright-tests\pages\NetlifyHomePage.ts:51:21)
    at C:\Users\rober\netlify-playwright-tests\tests\newsletter.spec.ts:40:16
```

# Page snapshot

```yaml
- banner:
  - navigation "Site navigation":
    - heading "Site navigation" [level=2]
    - link "Go to homepage":
      - /url: /
    - link "Skip to content":
      - /url: "#main"
    - list:
      - listitem:
        - text: Platform
        - button "Toggle platform submenu"
      - listitem:
        - text: Solutions
        - button "Toggle solutions submenu"
      - listitem:
        - link "Integrations":
          - /url: /integrations/
      - listitem:
        - text: Start Building
        - button "Toggle start building submenu"
      - listitem:
        - link "Docs":
          - /url: https://docs.netlify.com/
      - listitem:
        - link "Pricing":
          - /url: /pricing/
      - listitem:
        - button "Search"
      - listitem:
        - link "Contact":
          - /url: https://www.netlify.com/contact/?attr=homepage&ref=contact&id=main-nav-contact?attr=homepage&ref=contact&id=main-nav-contact
      - listitem:
        - link "Log in":
          - /url: https://app.netlify.com/login
    - link "Sign up":
      - /url: https://app.netlify.com/signup
- main:
  - heading "Push your ideas to the web" [level=1]
  - paragraph: Deploy any modern frontend stack, from marketing sites to AI apps. Join millions of developers and teams shipping faster on Netlify.
  - link "Get started":
    - /url: https://app.netlify.com/signup
  - link "Request a demo":
    - /url: /contact/?attr=homepage&ref=request-demo&id=cta-hero-request-demo?attr=homepage&ref=request-demo&id=cta-hero-request-demo
  - figure:
    - img
  - list:
    - listitem:
      - img "Navan"
    - listitem:
      - img "Contentful"
    - listitem:
      - img "Unilever"
    - listitem:
      - img "Stack Overflow"
    - listitem:
      - img "Riot Games"
    - listitem:
      - img "Nike"
    - listitem:
      - img "Kubernetes"
  - heading "One platform. All your sites, stores, & apps." [level=2]
  - paragraph: A developer experience that just works–optimized builds, collaborative previews, and instant rollbacks on a global edge network. Focus on your users and code while we handle the rest.
  - heading "Build & integrate Experiment faster" [level=2]
  - paragraph: Build any frontend app with your favorite stack and more flexible serverless infrastructure than anywhere else - from edge functions to background jobs.
  - heading "Deploy & collaborate Iterate together" [level=2]
  - paragraph: Turn every Git push into a production-ready release. Get instant deploy previews and keep your team in sync without managing configs, variables, or staging servers.
  - heading "Run & scale Scale automatically" [level=2]
  - paragraph: Deliver sub-second experiences globally with granular cache and routing controls. Go from zero to enterprise-level traffic with built-in security.
  - link "Explore the platform":
    - /url: /platform/
  - img
  - img
  - article:
    - heading "Ship your edge function_ in just a few clicks" [level=2]
    - paragraph: Create a new project or connect an existing one to explore features like rollbacks, CI/CD, edge functions, collaborative deploy previews, and more.
    - link "Read the docs":
      - /url: https://docs.netlify.com/
    - link "Developer Hub":
      - /url: https://developers.netlify.com/
    - tablist:
      - tab "e-commerce site" [selected]:
        - img
        - heading "e-commerce site" [level=3]
      - tab:
        - img
      - tab:
        - img
      - tab:
        - img
    - tabpanel "e-commerce site":
      - code: "export function CartMain({layout, cart}: CartMainProps) { const linesCount = Boolean(cart?.lines?.nodes?.length || 0); const withDiscount = cart && Boolean(cart.discountCodes.filter((code) => code.applicable).length); const className = `cart-main ${withDiscount ? 'with-discount' : ''}`; return ( <div className={className}> <CartEmpty hidden={linesCount} layout={layout} /> <CartDetails cart={cart} layout={layout} /> </div> ); }"
    - link "Deploy to Netlify":
      - /url: https://app.netlify.com/start/deploy?repository=https://github.com/netlify/hydrogen-template#SESSION_SECRET=mock%20token&PUBLIC_STORE_DOMAIN=mock.shop
  - article:
    - list:
      - listitem:
        - heading "35M+" [level=3]
        - paragraph: Websites deployed on Netlify
      - listitem:
        - heading "5M+" [level=3]
        - paragraph: Developers
      - listitem:
        - heading "99.99%" [level=3]
        - paragraph: Uptime SLA
  - paragraph: Get started
  - heading "Here’s freedom to framework how you want to" [level=3]
  - heading "Deploy with Astro" [level=3]:
    - link "Deploy with Astro":
      - /url: https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/astro-platform-starter?utm_campaign=template-team&utm_source=dtn-button&utm_medium=dtn-button&utm_term=astro-tt-dtn-button&utm_content=astro-tt-dtn-button
  - heading "Deploy with TanStack" [level=3]:
    - link "Deploy with TanStack":
      - /url: https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/tanstack-template
  - heading "Deploy with Next.JS" [level=3]:
    - link "Deploy with Next.JS":
      - /url: https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter
  - heading "Deploy with Remix" [level=3]:
    - link "Deploy with Remix":
      - /url: https://app.netlify.com/start/deploy?repository=https://github.com/netlify/hydrogen-template#SESSION_SECRET=mock%20token&PUBLIC_STORE_DOMAIN=mock.shop
  - list:
    - listitem:
      - img
    - listitem:
      - img
    - listitem:
      - img
    - listitem:
      - img
    - listitem:
      - img
    - listitem:
      - img
    - listitem:
      - img
    - listitem:
      - img
    - listitem:
      - text: Head over to our docs for a full list of framework configurations.
      - link "Go to Netlify docs":
        - /url: https://docs.netlify.com/frameworks/
  - article:
    - figure:
      - img "Netlify"
      - img "Mammut logo"
    - list:
      - listitem:
        - paragraph: Increase in developer productivity
      - listitem:
        - paragraph: Increase in site reliability
      - listitem:
        - paragraph: Quality on par with extremely high standards
    - text: Customer Story
    - heading "Mammut means quality - in brand and in technology" [level=2]
    - paragraph: Mammut came to Netlify because they needed a performant, interoperable Composable Web Platform that could deliver a best-in-class digital brand experience for their customers. They needed a partner that could keep their site reliable and performant during peak retail season and unexpected traffic spikes.
    - link "View the story":
      - /url: /mammut/
  - heading "Ready to try Netlify?" [level=2]
  - link "Request demo":
    - /url: https://www.netlify.com/contact/?attr=homepage&ref=request-demo&id=cta-readytotrynetlify-requestdemo?attr=homepage&ref=request-demo&id=cta-readytotrynetlify-requestdemo
- contentinfo:
  - link "Go to Netlify homepage":
    - /url: /
    - text: Go to Netlify homepage
    - img
  - list:
    - listitem:
      - link "GitHub":
        - /url: https://github.com/netlify
        - img
        - text: GitHub
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/netlify
        - img
        - text: LinkedIn
    - listitem:
      - link "Bluesky":
        - /url: https://bsky.app/profile/netlify.com
        - img
        - text: Bluesky
    - listitem:
      - link "X (formerly known as Twitter)":
        - /url: https://twitter.com/netlify
        - img
        - text: X (formerly known as Twitter)
    - listitem:
      - link "YouTube":
        - /url: https://www.youtube.com/@NetlifyApp
        - img
        - text: YouTube
    - listitem:
      - link "Discourse":
        - /url: https://answers.netlify.com/
        - img
        - text: Discourse
  - navigation:
    - heading "Why Netlify?" [level=2]
    - list:
      - listitem:
        - link "Customers":
          - /url: /customers/
      - listitem:
        - link "Agent Experience":
          - /url: /agent-experience/
      - listitem:
        - link "Composable Web Platform":
          - /url: /platform/
      - listitem:
        - link "Security":
          - /url: /security/
      - listitem:
        - link "Agency Partner Program":
          - /url: /partners/agency/
      - listitem:
        - link "Technology Partner Program":
          - /url: /partners/technology/
    - heading "Products" [level=2]
    - list:
      - listitem:
        - link "Composable Web Platform":
          - /url: /platform/
      - listitem:
        - link "Netlify Connect":
          - /url: /platform/connect/
      - listitem:
        - link "Netlify Core":
          - /url: /platform/core/
      - listitem:
        - link "Netlify Create":
          - /url: /platform/create/
      - listitem:
        - link "Netlify SDK":
          - /url: /platform/software-development-kit/
      - listitem:
        - link "Pricing":
          - /url: /pricing/
      - listitem:
        - link "Changelog":
          - /url: /changelog/
      - listitem:
        - group: Add-ons
    - heading "Explore" [level=2]
    - list:
      - listitem:
        - link "Docs":
          - /url: https://docs.netlify.com/
      - listitem:
        - link "Integrations":
          - /url: /integrations/
      - listitem:
        - link "Jamstack Book":
          - /url: /oreilly-jamstack/
      - listitem:
        - link "Community":
          - /url: https://answers.netlify.com/
      - listitem:
        - link "Resources & Guides":
          - /url: /resources/
      - listitem:
        - link "Remotely Interesting":
          - /url: https://remotelyinteresting.netlify.com/
      - listitem:
        - group: Technologies
    - heading "Company" [level=2]
    - list:
      - listitem:
        - link "Blog":
          - /url: /blog/
      - listitem:
        - link "About":
          - /url: /about/
      - listitem:
        - link "Careers":
          - /url: /careers/
      - listitem:
        - link "Compose Conference":
          - /url: /conference/
      - listitem:
        - link "Code of Conduct":
          - /url: /code-of-conduct/
      - listitem:
        - link "Press":
          - /url: /press/
      - listitem:
        - link "Jamstack Fund":
          - /url: /jamstack-fund/
      - listitem:
        - link "Netlify Store":
          - /url: https://swag.netlify.com/
      - listitem:
        - link "Sustainability":
          - /url: /sustainability/
    - heading "Contact Us" [level=2]
    - list:
      - listitem:
        - link "Sales":
          - /url: /contact/?attr=homepage&ref=sales&id=cta-footer-sales
      - listitem:
        - link "Support":
          - /url: /support/
      - listitem:
        - link "Status":
          - /url: https://netlifystatus.com/
      - listitem:
        - link "Forums":
          - /url: https://answers.netlify.com/
      - listitem:
        - link "Hire an Agency":
          - /url: /agency-directory/
  - heading "Stay up to date with Netlify news" [level=2]
  - article:
    - text: Email*
    - textbox "Email*": enter+1747058171762@example.com
    - alert:
      - listitem: Please enter a valid email address.
    - button "Subscribe"
  - list:
    - listitem:
      - link "Trust Center":
        - /url: /trust-center/
    - listitem:
      - link "Privacy":
        - /url: /privacy/
    - listitem:
      - link "GDPR/CCPA":
        - /url: /gdpr-ccpa/
    - listitem:
      - link "Abuse":
        - /url: mailto:fraud@netlify.com?subject=Abuse%20report&body=Please%20include%20the%20site%20URL%20and%20reason%20for%20your%20report%2C%20and%20we%20will%20reply%20promptly.
    - listitem:
      - button "Cookie Settings"
  - paragraph: © 2025 Netlify
- region "Cookie banner":
  - alertdialog "We use Cookies":
    - text: We use cookies to improve your browsing experience and for marketing purposes.
    - link "More information about your privacy":
      - /url: https://www.netlify.com/privacy/
      - text: Read our Privacy Policy
    - button "Reject All"
    - button "Accept All"
    - button "Cookies Settings"
```

# Test source

```ts
   1 | import { Locator, Page, expect } from '@playwright/test';
   2 |
   3 | export class NetlifyHomePage {
   4 |   readonly page: Page;
   5 |   readonly emailInput: Locator;
   6 |   readonly submitButton: Locator;
   7 |
   8 |   constructor(page: Page) {
   9 |     this.page = page;
  10 |
  11 |     // Email input field in the newsletter form
  12 |     this.emailInput = page.locator('input[name="email"]');
  13 |
  14 |     // Subscribe button in the newsletter form
  15 |     this.submitButton = page.locator('input[value="Subscribe"]');
  16 |   }
  17 |
  18 |   // Navigate to Netlify homepage and wait for scripts to load
  19 |   async goto() {
  20 |     await this.page.goto('https://www.netlify.com/');
  21 |     await this.page.waitForTimeout(2000); // wait for HubSpot embed to initialize
  22 |   }
  23 |
  24 |   // Fill email field using .fill() — fast, but less "real"
  25 |   async fillEmail(email: string) {
  26 |     await this.emailInput.click();
  27 |     await this.emailInput.fill(email);
  28 |     await this.emailInput.evaluate(el => el.blur()); // blur to trigger validation
  29 |   }
  30 |
  31 |   // Type email char by char with delay — more like a real user
  32 |   async typeEmail(email: string) {
  33 |     await this.emailInput.click();
  34 |     await this.emailInput.type(email, { delay: 50 });
  35 |     await this.emailInput.evaluate(el => el.blur()); // helps bypass bot detection
  36 |   }
  37 |
  38 |   // Click submit button (force in case it's covered/animated)
  39 |   async submitWithClick() {
  40 |     await expect(this.submitButton).toBeVisible();
  41 |     await this.submitButton.click({ force: true });
  42 |   }
  43 |
  44 |   // Submit form using Enter key
  45 |   async submitWithEnter() {
  46 |     await this.emailInput.press('Enter');
  47 |   }
  48 |
  49 |   // Expect user to be redirected to "thank you" page after successful submit
  50 |   async expectRedirect() {
> 51 |     await this.page.waitForURL(/thanks-for-signing-up/, { timeout: 10000 });
     |                     ^ TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
  52 |     expect(this.page.url()).toContain('/thanks-for-signing-up');
  53 |   }
  54 |
  55 |   // Expect no redirect (e.g., on invalid email submission)
  56 |   async expectNoRedirect() {
  57 |     await this.page.waitForTimeout(3000); // wait to catch late redirect
  58 |     const url = await this.page.url();
  59 |     expect(url).toContain('netlify.com');
  60 |     expect(url).not.toContain('thanks-for-signing-up');
  61 |   }
  62 | }
  63 |
```