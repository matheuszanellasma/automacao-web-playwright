import { test as base, expect } from '@playwright/test';
import { Login_Page } from './pages/login_page';
import { Cadastro_Page } from './pages/cadastro_page';

const test = base.extend({
  login_Page: async ({ page }, use) => {
    const loginPage = new Login_Page(page);
    await use(loginPage);
  },

  cadastro_Page: async ({ page }, use) => {
    const cadastroPage = new Cadastro_Page(page);
    await use(cadastroPage);
  },

});

export { test, expect };

