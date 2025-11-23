const { test, expect } = require('@playwright/test');

test('Transactions list shows recent transactions', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'Password123!');
  await page.click('button[type="submit"]');
  await page.waitForURL('/dashboard');
  await page.click('text=Transactions');
  await expect(page.locator('.transaction-item').first()).toBeVisible();
});
