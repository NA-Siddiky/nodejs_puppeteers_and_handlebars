const puppeteer = require('puppeteer');
const fs = require("fs");

// const source = fs.readFile('./views/index.html')
// console.log(source);

async function createPdf() {
    try {

        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        await page.setContent("<h1>hello node js</h1>")

        // create a pdf document.

        await page.pdf({
            path: './views/pdf/output.pdf',
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
};

createPdf();