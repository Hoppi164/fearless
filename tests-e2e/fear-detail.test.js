import { test, expect } from '@playwright/test';

test.describe('Fear detail page', () => {
	test('should navigate to a fear detail page and show its title', async ({ page }) => {
		await page.goto('/fears');
		const firstFear = page.locator('a[href^="/fears/"]').first();
		const href = await firstFear.getAttribute('href');
		await firstFear.click();
		await expect(page).toHaveURL(href);
		await expect(page.locator('h1')).not.toBeEmpty();
	});
});
