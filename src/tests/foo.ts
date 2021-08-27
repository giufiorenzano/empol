import { test, expect } from '@playwright/test'

// teste com Playwright
test('basic test', async ( { page }) => {
	await page.goto('http://localhost:3000/');

	await expect(page).toHaveTitle('Movie App')

	const menu = page.locator('text=Página Inicial')
	await expect(menu.first()).toHaveAttribute('href', '/')
	await expect(page.locator('text=Séries').first()).toHaveAttribute('href', '/series')
})

