const { test, expect } = require('@playwright/test');

test.describe('Login flow', () => {
  test('successful login redirects to dashboard', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'Password123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
    await expect(page.locator('text=Account Summary')).toBeVisible();
  });

  test('invalid credentials show error', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'wrong');
    await page.fill('input[name="password"]', 'badpass');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toContainText('Invalid credentials');
  });
});
