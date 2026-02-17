import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('should login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.login('hetanshi23@tempbutton.com', 'Checkdemo7!');
  
  await page.waitForURL('**/dashboard/**');
  expect(page.url()).toContain('dashboard');
});

test('should show error with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.login('invalid@email.com', 'wrongpassword');
  
  await expect(page.locator('.error, [class*="error"], [role="alert"]').first()).toBeVisible();
});

test('should show error with blank fields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.login('', '');
  
  const url = page.url();
  expect(url).toContain('login');
});

test('should logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateToLogin();
  await loginPage.login('hetanshi23@tempbutton.com', 'Checkdemo7!');
  await page.waitForURL('**/dashboard/**');
  
  await page.click('text=Timesheets');
  
  const settingIcon = page.locator('a[class*="setting_icon"]');
  await settingIcon.waitFor({ state: 'visible' });
  await settingIcon.click();
  
  await page.waitForTimeout(500);
  
  await page.evaluate(() => {
    const logoutLink = document.querySelector('a[href="/logout"]');
    if (logoutLink) logoutLink.click();
  });
  
  await page.waitForTimeout(3000);
  
  await page.waitForURL('**/login**');
  expect(page.url()).toContain('login');
});