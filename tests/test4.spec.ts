import { test } from "@playwright/test";

test("TC04 - Add 10 To Do Item", async ({ page }) => {
    await test.step("Navigate to Bai Hoc 4: Personal Notes", async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();
    })

    await test.step("Add 10 notes", async() => {
        for (let i = 1 ; i <=10 ; i++){
        await page.locator("//input[@id='note-title']").click();
        await page.locator("//input[@id='note-title']").fill(`Note ${i}`);
        await page.locator("//textarea[@id='note-content']").fill(`Note ${i} - Tôi thấy nhiều điểm đường giao nhau có các camera treo trên cùng một cột, thậm chí hướng ra cùng một phía, không rõ để làm gì`);
        await page.locator("//button[@id='add-note']").click();
        }
    })
    await test.step("Search with title", async() => {
        await page.locator("//input[@id='search']").click();
        await page.locator("//input[@id='search']").fill('Note 10');
    })
})