import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const outputDir = './output';
  if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir);
  }

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  console.log('Navigating to website...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // Scroll slowly to trigger all intersection observers (Framer motion)
  console.log('Scrolling to trigger animations...');
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          // scroll back to top
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  // wait a bit for animations to settle
  await new Promise(r => setTimeout(r, 2000));

  console.log('Taking full page screenshot...');
  await page.screenshot({ path: `${outputDir}/full-website.png`, fullPage: true });

  console.log('Screenshots saved to output/ folder!');
  await browser.close();
})();
