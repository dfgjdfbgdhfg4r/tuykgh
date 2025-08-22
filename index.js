const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://youtube.com');

  // Remove overlay by targeting its selector
  await page.evaluate(() => {
    const overlay = document.querySelector('.overlay');
    if (overlay) overlay.remove();
  });

  await page.screenshot({ path: 'cleaned.png' });
  await browser.close();
})()
