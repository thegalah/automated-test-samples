import * as fs from "fs";
import { chromium } from "playwright";

const testOutputDirectory = "./test-results";

if (!fs.existsSync(testOutputDirectory)) {
    fs.mkdirSync(testOutputDirectory);
}

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `${testOutputDirectory}/example.png` });
    await browser.close();
})();
