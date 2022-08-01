const puppeteer = require('puppeteer');

(
    async function () {
        try {

            const browser = await puppeteer.launch();

            const page = await browser.newPage();

            // create a pdf document.

            await puppeteer.pdf({
                path: 'output.pdf',
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
)