const puppeteer = require('puppeteer');
const fs = require("fs-extra");
const hbs = require('handlebars');
const path = require('path');

const data = require('./data.json');

//compile the hbs template to pdf document
const compile = async function (templateName, data) {
    const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`)
    // console.log(filePath);

    //get the html
    const html = await fs.readFile(filePath, 'utf8');
    // console.log(html);

    return hbs.compile(html)(data);
};


async function createPdf() {
    try {
        // console.log(data)

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const content = await compile('index', data);
        // console.log(content)
        await page.setContent(content);

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