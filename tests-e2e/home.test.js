import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
	test('should display the main heading', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('h1')).toContainText(/fearless/i);
	});
});
