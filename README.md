# Teste e validação de API de consulta de dados da matrícula dos alunos

Projeto de testes automatizados utilizando Cypress, disciplina de Gerenciamento e Qualidade de Software 5º Semestre 2024.01, ministrada pelo Professor Paulo Reis no curso de Bacharelado em Sistemas de Informação (BSI) da UNIME.
 
## API Java com Springboot usada para testes

- [Link do repositorio](https://github.com/PHPauloReis/oficial2-matriculas-api/).

## Softwares usados para o desenvolvimento
- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/)
- [Intelij Idea Community](https://www.jetbrains.com/idea/download/)
- [Postman](https://www.postman.com/downloads/)
- [VScode](https://code.visualstudio.com/download)

## Softwares necessarios para executar os testes

- Ter instalado o [Node.js](https://nodejs.org/)
para que consiga baixar as dependências do projeto.
- Ter instalado o [Intelij Idea Community](https://www.jetbrains.com/idea/download/) para rodar a api java com spring boot localmente
- Ter instalado o [GIT](https://www.jetbrains.com/idea/download/) para clonagem dos repositorios.


### Quais comandos precisam ser executados e como devem ser executados para executar os testes

Clonar repositorio da API
```bash 
git clone https://github.com/PHPauloReis/oficial2-matriculas-api.git
```
Abrir dentro do Intelij o repositorio e executar.

Clonar repositorio da API
e execute:
```bash 
git clone https://github.com/PHPauloReis/oficial2-matriculas-api.git
```

Clonar repositorio de testes
e execute:
```bash 
git clone https://github.com/txiami/testes-api-matricula.git
```

Use comando no terminal para baixar as dependências:
```bash 
npm install
```

Use comando no terminal para abrir a interface do Cypress e executar os testes:
```bash
npx cypress open
```

Na aplicação Cypress que abriu escolha:
* A opção E2E Testing
* Escolha o navegador de preferencia e click em "Start E2E Testing in 'SeuNavegador'"
* Na área de Specs escolha o Story que deseja executar.




