import { test as base, expect } from '@playwright/test';
import { Login_Page } from './pages/login_page';

const test = base.extend({
  login_Page: async ({ page }, use) => {
    const loginPage = new Login_Page(page);
        await use(loginPage);
  },
});

// Exportamos o novo 'test' modificado e o 'expect' padrão
export { test, expect };

