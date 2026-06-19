import { faker } from '@faker-js/faker/locale/pt_BR'; 
 
export class Login_Page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    this.rota = '/login'

    this.inputEmail = page.locator('#user');
    this.inputSenha = page.locator('#password');
    this.botaoLogin = page.getByRole('button', { name: 'login' });
    this.linkCriarConta = page.locator('#createAccount');
    
    this.msgSucessoLogin = page.getByRole('heading', { name: 'Login realizado' });
    this.botaoOkSucesso = page.getByRole('button', { name: 'OK' });
    this.msgErroValidacao = page.locator('.invalid_input');
  }

  async acessar_login() {
    await this.page.goto(this.rota);
  }

  async logar_usuario({ email = faker.internet.email(), senha = faker.internet.password() } = {}) {
    await this.page.goto(this.rota);
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.botaoLogin.click();
  }

}