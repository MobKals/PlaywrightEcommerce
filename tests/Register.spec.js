const {test,expect} = require('@playwright/test');


test('Your Logo login Test', async({browser})=>

{
    //chrome - plugin/cookies
        const context = await browser.newContext(); //browser instance is open without cookies
        const page = await context.newPage(); // creates actual page to start your automation
        await page.goto("http://automationpractice.com/index.php");
        await page.locator(".login").click();
        await page.waitForLoadState('networkidle');
        await page.locator("#email_create").type("kalyanin@mobiquityinc.com");
        await page.locator("button[id='SubmitCreate'] span").click();
        await page.waitForLoadState('networkidle');
        //RadioButton
        await page.locator(".radio").last().click();
        await page.locator("#customer_firstname").type("Kalyani");
        await page.locator("#customer_lastname").type("Nam");
        await page.locator("#email").type("kalyanin@mobiquityinc.com");
        await page.locator("##passwd").type("Kal$$22");



        
});