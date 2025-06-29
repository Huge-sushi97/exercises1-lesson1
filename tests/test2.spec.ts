import { test } from "@playwright/test";

test("TC02 - Add product to cart successfully", async ({ page }) => {
    await test.step("Navigate to Bai Hoc 2: Product Page", async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
    });
    await test.step("Add 2 product 1 to cart" , async() => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='1' ]").dblclick();
    });
    await test.step("Add 3 product 2 to cart" , async() => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='2' ]").dblclick();
    });
    await test.step("Add 3 product 2 to cart" , async() => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='2' ]").click();
    });
    await test.step("Add 1 product 3 to cart" , async() => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='3' ]").click();
    });
})