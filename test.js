const { chromium } = require('playwright');

(async () => {

const browser = await chromium.launch({ headless:false });
const page = await browser.newPage();

await page.goto("https://with-bugs.practicesoftwaretesting.com/#/auth/login");

await page.waitForTimeout(2000);

await page.fill('input[placeholder="Your E-mail *"]',"customer@practicesoftwaretesting.com");

await page.fill('input[placeholder="Your password *"]',"welcome01");

await page.keyboard.press("Enter");

await page.waitForTimeout(5000);

await browser.close();

})();