import { test } from "@playwright/test";

test("TC03.1 - Add 100 To Do Item", async ({ page }) => {
    await test.step("Navigate to Bai Hoc 3: ToDo Page", async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
    });

    await test.step("Click on enter a new task textbox", async() => {
          await page.locator("//input[@placeholder='Enter a new task']").click();
    });
    await test.step("Add 100 Todo Item", async() => {
        for (let i = 1 ; i <= 100 ; i++){
            await page.locator("//input[@placeholder='Enter a new task']").fill(`ToDo ${i}`);
            await page.locator("//button[@id='add-task']").click();
            }
        });
        for (let i = 1; i <= 100 ; i++){
            if (i%2 === 1){
                page.on('dialog', async dialog => dialog.accept());
                await page.locator(`//button[@id='todo-${i}-delete']`).click();

            }
        };
    })