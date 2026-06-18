import { test, expect } from '../base_test';
import { faker } from '@faker-js/faker/locale/pt_BR';

test.describe('Testes da página de cadastro', () => {

  test.beforeEach(async ({ cadastro_Page }) => {

    await cadastro_Page.acessar_cadastro()
  });

  test('Cadastro com credenciais válidas', async ({ cadastro_Page, page }) => {
    await cadastro_Page.cadastrar_usuario();

    await expect(cadastro_Page.alerta_sucesso).toContainText('Cadastro realizado');

    await expect(page).toHaveURL('https://www.automationpratice.com.br/my-account');
  });

  test.describe('Validação de campos', () => {

    const cenarios_cadastro = [
      { nome: '', email: faker.internet.email(), senha: faker.internet.password(), teste: 'nome em branco', msg_erro: 'O campo nome deve ser prenchido', campo_testado: 'nome' },
      { nome: faker.person.fullName(), email: '', senha: faker.internet.password(), teste: 'email em branco', msg_erro: 'O campo e-mail deve ser prenchido corretamente', campo_testado: 'email' },
      { nome: faker.person.fullName(), email: faker.internet.email(), senha: '', teste: 'senha em branco', msg_erro: 'O campo senha deve ter pelo menos 6 dígitos', campo_testado: 'senha' },
      { nome: faker.person.fullName(), email: faker.internet.email(), senha: faker.internet.password({ length: 3 }), teste: 'senha curta', msg_erro: 'O campo senha deve ter pelo menos 6 dígitos', campo_testado: 'senha' },
      { nome: faker.person.fullName(), email: 'testedominio.com', senha: faker.internet.password(), teste: 'email sem domínio', msg_erro: 'O campo e-mail deve ser prenchido corretamente', campo_testado: 'email' },
      { nome: faker.person.fullName(), email: 'teste@', senha: faker.internet.password(), teste: 'email sem @', msg_erro: 'O campo e-mail deve ser prenchido corretamente', campo_testado: 'email' }
    ];

    cenarios_cadastro.forEach((cenario) => {

      test(`Cadastro mal sucedido com ${cenario.teste}`, async ({ cadastro_Page }) => {

        await cadastro_Page.cadastrar_usuario({
          nome: cenario.nome,
          email: cenario.email,
          senha: cenario.senha
        });

        const elementoErro = await cadastro_Page.obter_erro_do_campo(cenario.campo_testado);
        await expect(elementoErro).toContainText(cenario.msg_erro);

      });
    });
  });

  test.describe('Testes de segurança da senha', () => {
    test('Teste de mascaramento da senha', async ({ cadastro_Page }) => {
      await expect(cadastro_Page.campoSenha).toHaveAttribute('type', 'password');
    });
  });
});