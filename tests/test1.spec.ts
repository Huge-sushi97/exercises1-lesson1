import { test } from "@playwright/test";

test("TC01 - Validate register functionality successfully", async ({ page }) => {
    await test.step("Navigate to Bai Hoc 1: register page", async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('td:has-text("Bài học 1: Register Page (có đủ các element)")').click();
    });
    await test.step("Fill data for all required field", async() => {
        await page.locator("//input[@id='username']").fill('Le Vinh Phu');
        await page.locator("//input[@id='email']").fill('phu.levinh@gmail.com');
        await page.locator("//input[@id='male']").check(); 
        await page.locator("//input[@id='reading']").setChecked(true);
        await page.locator("//select[@id='interests']").selectOption({value : "technology"});
        await page.locator("//select[@id='country']").selectOption({value : "usa"});
        await page.locator("//input[@id='profile']").setInputFiles("pw-course/data/IMG_2945.JPG");
    });
    await test.step("Click register button", async() => {
        await page.locator("//button[@type='submit']").click();
    });
})