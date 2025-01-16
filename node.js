const puppeteer = require('puppeteer');

(async () => {
    // Launch the browser
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // URL for the AliExpress Best Deals page
    const url = 'https://best.aliexpress.com/';
    await page.goto(url, { waitUntil: 'networkidle2' });

    console.log('Page loaded...');

    // Scraping logic
    const products = await page.evaluate(() => {
        const items = [];

        // Selecting all product containers based on the class from the screenshot
        const productElements = document.querySelectorAll('.recommend-card');

        productElements.forEach((product) => {
            const title = product.querySelector('.rc-modules-image-wrap span')?.innerText || 'No title';
            const link = product.querySelector('a')?.href || 'No link';
            const image = product.querySelector('img')?.src || 'No image';

            items.push({ title, link, image });
        });

        return items;
    });

    // Output the scraped products
    console.log('Scraped Products:', JSON.stringify(products, null, 2));

    // Close the browser
    await browser.close();
})();
