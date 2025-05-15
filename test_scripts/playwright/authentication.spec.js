// Playwright Login Tests
const { test, expect } = require('@playwright/test');

test.describe('Form Authentication Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to login page before each test
    await page.goto('http://the-internet.herokuapp.com/login');
  });

  test('TC-AUTH-001: Valid Login', async ({ page }) => {
    // Enter valid credentials
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    // Verify redirect to secure area
    await expect(page).toHaveURL(/\/secure$/);
    
    // Verify success message
    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toContainText('You logged into a secure area!');
    
    // Verify logout button is available
    await expect(page.locator('.button')).toContainText('Logout');
  });

  test('TC-AUTH-002: Invalid Username', async ({ page }) => {
    // Enter invalid username
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    // Verify user remains on login page
    await expect(page).toHaveURL(/\/login$/);
    
    // Verify error message
    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toContainText('Your username is invalid!');
  });

  test('TC-AUTH-003: Invalid Password', async ({ page }) => {
    // Enter invalid password
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Verify user remains on login page
    await expect(page).toHaveURL(/\/login$/);
    
    // Verify error message
    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toContainText('Your password is invalid!');
  });

  test('TC-AUTH-004: Logout Functionality', async ({ page }) => {
    // Login first
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    
    // Verify login was successful
    await expect(page).toHaveURL(/\/secure$/);
    
    // Click logout
    await page.click('a.button');
    
    // Verify redirect to login page
    await expect(page).toHaveURL(/\/login$/);
    
    // Verify success message
    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toContainText('You logged out of the secure area!');
  });

  test('TC-AUTH-005: Secure Area Access Without Login', async ({ page }) => {
    // Attempt to access secure area directly
    await page.goto('http://the-internet.herokuapp.com/secure');
    
    // Verify redirect to login page
    await expect(page).toHaveURL(/\/login$/);
    
    // Verify error message
    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toContainText('You must login to view the secure area!');
  });
});
