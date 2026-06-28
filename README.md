# 🎭 Automação Web com Playwright

## 💻 Sobre o projeto

Este repositório contém um projeto de automação de testes web. O objetivo principal desta suíte de testes é validar de forma automatizada os fluxos essenciais de entrada de usuários na aplicação, garantindo a qualidade das páginas de Login e Cadastro.

## 🛠️ Tecnologias Utilizadas

Neste projeto, utilizamos as seguintes ferramentas:

- **[Node.js](https://nodejs.org/en/)**
- **[Playwright](https://playwright.dev/)**
- **Padrão de Projeto: Page Objects Pattern (PoP)**

## 🌐 Ambiente de Testes

- **URL da Aplicação:** [QaZando Shop](https://qazando.com.br/)

## 📝 Planejamento e Casos de Teste Mapeados

### 🔹 Página de Login

- **CT1:** Login com credenciais válidas (smoke)
- Validação de campos obrigatórios de login usando Matriz de Dados
  - **CT2:** Login mal sucedido com e-mail sem @
  - **CT3:** Login mal sucedido com e-mail sem domínio
  - **CT4:** Login mal sucedido com e-mail em branco
  - **CT5:** Login mal sucedido com senha em branco
  - **CT6:** Login mal sucedido com senha curta (menos de 6 caracteres)
  - **CT7:** Teste de mascaramento e segurança do campo senha
- **CT8:** Teste de redirecionamento - link "Ainda não tem conta?"

### 🔹 Página de Cadastro

- **CT1:** Cadastro com credenciais válidas (smoke)
- Validação de campos obrigatórios de login usando Matriz de Dados
  - **CT2:** Cadastro mal sucedido com nome em branco
  - **CT3:** Cadastro mal sucedido com e-mail em branco
  - **CT4:** Cadastro mal sucedido com senha em branco
  - **CT5:** Cadastro mal sucedido com senha curta (menos de 6 caracteres)
  - **CT6:** Cadastro mal sucedido com e-mail sem @
  - **CT7:** Cadastro mal sucedido com e-mail sem domínio
- **CT8:** Teste de mascaramento da senha no cadastro
  
  ---

## ⚙️ Integração Contínua (CI/CD)

O projeto possui uma esteira automatizada de integração contínua implementada com **GitHub Actions**:

- **Gatilho:** A esteira é disparada automaticamente a cada evento de `push` realizado na branch `master`.
- **Ação:** O pipeline executa os testes **Smoke** 
- **Armazenamento:** O relatório é armazenado como artifact no GitHub por **30 dias**, permitindo análise dos resultados mesmo após a conclusão do pipeline.

## 🛠️ Como Executar os Testes Localmente

### Pré-requisitos: Node.js (versão 18 ou superior recomendada)

### Passo a Passo (Configuração e Execução)
```bash
git clone https://github.com/matheuszanellasma/automacao-web-playwright.git
cd automacao-web-playwright
npm install
npx playwright install
npx playwright test --ui
```

## 👤 Autor

* **Matheus Koehler Zanella** - Quality Assurance Engineer
