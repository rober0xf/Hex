import { test, expect } from '@playwright/test';

test('sign up for the mailing list', async ({ page }) => {
	await page.goto('http://localhost:5173');

	// wait for hydration
	await expect(page.getByTestId('hydrated')).toBeVisible();

	await expect(page.getByRole('heading', { level: 2, name: 'Sign up for updates' })).toBeVisible();

	await expect(page.getByLabel('email')).toBeVisible();
	await page.getByRole('button', { name: 'Sign up' }).click();

	const toast_element = page.getByRole('status');
	await expect(toast_element.getByText('thank you for signing up')).toBeVisible();
});
