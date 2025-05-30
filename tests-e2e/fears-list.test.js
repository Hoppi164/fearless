import { test, expect } from '@playwright/test';

test.describe('/fears', () => {
	test('should display the Select a fear heading', async ({ page }) => {
		await page.goto('/fears');
		await expect(page.locator('h1')).toHaveText(/select a fear/i);
	});

	test('should list fears as links', async ({ page }) => {
		await page.goto('/fears');
		const links = page.locator('a[href^="/fears/"]');
		const numLinks = await links.count();
		await expect(numLinks).toBeGreaterThan(0);
	});
});
