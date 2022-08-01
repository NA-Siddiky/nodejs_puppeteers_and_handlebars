const puppeteer = require('puppeteer');
const fs = require("fs");

(
    async function () {
        try {

            const browser = await puppeteer.launch();

            const page = await browser.newPage();

            await page.setContent('<h1>Hello world</h1>')

            // create a pdf document.

            await page.pdf({
                path: './output.pdf',
                format: 'A4',
                printBackground: true
            });

            console.log('done creating pdf');

            await browser.close();
            process.exit();
        }
        catch (error) {
            console.log(error);
        }
    }
)();