const { test, expect } = require('@playwright/test');

test.describe('Fund transfer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'Password123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test('transfer between accounts successful', async ({ page }) => {
    await page.click('text=Transfer');
    await page.fill('input[name="toAccount"]', '9876543210');
    await page.fill('input[name="amount"]', '100');
    await page.click('button[type="submit"]');
    await expect(page.locator('.toast-success')).toContainText('Transfer completed');
  });

  test('transfer with insufficient funds shows error', async ({ page }) => {
    await page.click('text=Transfer');
    await page.fill('input[name="toAccount"]', '9876543210');
    await page.fill('input[name="amount"]', '1000000');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toContainText('Insufficient funds');
  });
});
