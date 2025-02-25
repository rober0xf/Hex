import { test, expect } from '@playwright/test';

test('navigation smoke test', async ({ page }) => {
	await page.goto('http://localhost:5173');

	await expect(page).toHaveTitle(/Hex/);
	await expect(page.getByRole('heading', { level: 1, name: 'Hex' })).toBeVisible();

	// use the header for navigation
	const headerElemenent = page.getByRole('banner');

	// navigate to the contact page
	await headerElemenent.getByRole('link', { name: 'Contact' }).click();
	await expect(page.getByRole('heading', { level: 1, name: 'Contact' })).toBeVisible();
	await expect(page).toHaveTitle(/Contact/);
});
