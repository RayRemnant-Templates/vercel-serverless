const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

module.exports = async (req, res) => {
    const browser = await puppeteer.launch({
        args: chromium.args,
        executablePath:
            process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath()),
        headless: true,
        // ...more config options
    });

    const page = await browser.newPage();
    //await page.goto(`<your-target-url>`, { waitUntil: "networkidle2" });

    // ...do something here

    await browser.close();

    res.send("hello");
};