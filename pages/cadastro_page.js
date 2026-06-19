import { faker } from "@faker-js/faker/locale/pt_BR";

export class Cadastro_Page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.rota = '/register';

    this.tituloCadastro = page.locator('.account_form > h3');
    this.campoNome = page.locator('#user');
    this.campoEmail = page.locator('#email');
    this.campoSenha = page.locator('#password');
    this.botaoRegistrar = page.locator('#btnRegister');
    
    this.alerta_sucesso = page.locator('#swal2-title');
    this.botaoConfirmarSucesso = page.locator('.swal2-confirm.swal2-styled');
  }

  async acessar_cadastro() {
    await this.page.goto(this.rota);
  }


  async obter_erro_do_campo(nomeCampo) {
    const mapeamentoCampos = {
      nome: this.campoNome,
      email: this.campoEmail,
      senha: this.campoSenha
    };
    
    // Retorna o elemento de erro que fica logo após (abaixo) o input selecionado
    return mapeamentoCampos[nomeCampo].locator('xpath=./following-sibling::*[1]');
  }

  
  async cadastrar_usuario({
    nome = faker.person.fullName(),
    email = faker.internet.email(),
    senha = faker.internet.password()
  } = {}) {
    await this.page.goto(this.rota);
    await this.campoNome.fill(nome);
    await this.campoEmail.fill(email);
    await this.campoSenha.fill(senha);
    await this.botaoRegistrar.click();
  }
}