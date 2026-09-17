import { test, expect } from '@playwright/test';
import  testdata  from '../data.json' with {"type":"json"};
import { LoginPage } from '../pages/login_page.js';


// for(let i=1; i<10; i++){
// test(`Login Test ${i}`, async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
// });
// }

// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="username"]').press('Tab');
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page).toHaveURL(/inventory/);

//   await page.locator("[data-test='product-sort-container']").selectOption({label:'Price (low to high)'});
//  });

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

// Create function for all common steps
// async function login (page,username,password){
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill(username);
//   await page.locator('[data-test="username"]').press('Tab');
//   await page.locator('[data-test="password"]').fill(password);
//   await page.locator('[data-test="login-button"]').click();
// }

// Validate message 
async function validateErrorMsg(page,expectedErrorMsg){
  let errorMsg = await page.locator('[data-test="error"]').textContent();
  expect(errorMsg).toBe(expectedErrorMsg)
}

// for (let data of testdata){
//   test(data.testname, async({page})=>{
//     await login(page, data.username, data.password);
//     await validateErrorMsg(page, data.errorMsg);
//   });

for (let data of testdata){
  test(data.testname, async({page})=>{
    let lgObgect = new LoginPage (page);
    await lgObgect.login(data.username, data.password);
    await lgObgect.validateErrorMsg(data.errorMsg);
  });
}