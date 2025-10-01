import { test, expect } from '@playwright/test';


/**
 2. Задача Playwright:
Условие: Написать тест, который открывает веб-страницу https://playwright.dev/ и проверяет 
что заголовок страницы соответствует ожидаемому значению. Тест необходимо запустить минимум на 2 разных браузерах.
Ожидаемый результат: Тест успешно проходящий проверку заголовка.
 */


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

