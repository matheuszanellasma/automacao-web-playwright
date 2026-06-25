import { test, expect } from '../base_test';
import { faker } from '@faker-js/faker/locale/pt_BR';


test.describe('Testes da pagina de login', () => {


  test.beforeEach(async ({ login_Page }) => {
    await login_Page.acessar_login()
  })


  test('Login com credenciais válidas @smoke', async ({ login_Page }) => {
    await login_Page.logar_usuario()
    await expect(login_Page.msgSucessoLogin).toBeVisible()

    await login_Page.botaoOkSucesso.click()
  });

  test.describe('Validação dos campos de login', () => {

    const cenarios_login = [
      { email: 'testegmail.com', senha: faker.internet.password(), teste: 'email sem @', msg_erro: 'E-mail inválido.' },
      { email: 'teste@', senha: faker.internet.password(), teste: 'email sem domínio', msg_erro: 'E-mail inválido.' },
      { email: '', senha: faker.internet.password(), teste: 'email em branco', msg_erro: 'E-mail inválido.' },
      { email: faker.internet.email(), senha: '', teste: 'senha em branco', msg_erro: 'Senha inválida.' },
      { email: faker.internet.email(), senha: faker.internet.password({ length: 3 }), teste: 'senha curta', msg_erro: 'Senha inválida.' }
    ]

    cenarios_login.forEach((cenario) => {

      test(`Login mal sucedido com ${cenario.teste}`, async ({ login_Page }) => {
        await login_Page.logar_usuario({ email: cenario.email, senha: cenario.senha })

        await expect(login_Page.msgErroValidacao)
          .toHaveText(cenario.msg_erro)
      })
    })
  })

  test('Teste de mascaramento da senha', async ({ login_Page }) => {
    await expect(login_Page.inputSenha)
      .toHaveAttribute('type', 'password')
  })

  test('Teste de redirecionamento link "ainda não tem conta?" ', async ({ login_Page, cadastro_Page, page }) => {
    await login_Page.linkCriarConta.click()

    await expect(page)
      .toHaveURL('https://www.automationpratice.com.br/register')

    //mudar para o page da página da cadastro
    await expect(cadastro_Page.tituloCadastro)
      .toHaveText('Cadastro de usuário')
  })
})