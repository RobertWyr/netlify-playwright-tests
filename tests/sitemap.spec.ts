/* import { test, expect } from '@playwright/test';
import { parseStringPromise } from 'xml2js';

test('Sitemap URLs should not return 404', async ({ request, page }) => {
  const sitemapUrl = 'https://www.netlify.com/sitemap.xml';

  // 1. Pobierz XML z sitemap
  const response = await request.get(sitemapUrl);
  expect(response.status()).toBe(200);

  const xmlText = await response.text();

  // 2. Parsuj XML do JS
  const parsed = await parseStringPromise(xmlText);
  const urls = parsed.urlset.url.map((u: any) => u.loc[0]);

  console.log(`🔍 Found ${urls.length} URLs in sitemap.`);

  // 3. Przetestuj każdy URL
  for (const url of urls) {
    const res = await request.get(url);
    expect(res.status(), `URL failed: ${url}`).toBeLessThan(400);
  }
});
*/