# PROJETO INCRÍVEL

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3450a6e0a02f4b7b99afb4d02fff38f6)](https://app.codacy.com/gh/giufiorenzano/empol?utm_source=github.com&utm_medium=referral&utm_content=giufiorenzano/empol&utm_campaign=Badge_Grade_Settings)

Projeto de filmes da Alibin.
Aqui nesse Readme você encontra alguns **padrões** a serem seguidos no código.

### TECNOLOGIAS UTILIZADAS

 - [React](https://reactjs.org/)
 - [Typescript](https://www.typescriptlang.org/)
 - [SASS](https://sass-lang.com/documentation)

## ESTRUTURA DE ARQUIVOS
 1. **/components** *Pasta com todos os componentes disponíveis.*
 2. **/forms** *Pasta com os formulários.*
 3. **/pages** *Pasta com todas as páginas.*
 4. **/helpers** *Pasta com funções de ajuda (utilizadas em mais de um lugar)*
 5. **/themes** *Pasta com os temas*


## NOMENCLATURA
 - Tudo deve ser nomeado em **inglês**.
 - Os componentes, funções, constantes, devem ter **nome claro e seguindo sua funcionalidade**.
 - As *pastas gerais* ficam com os nomes acima.
 - *Pasta* de cada *componente*: em **Upper Camel Case** (ex: DropdownMenu)
 - Arquivos dos *componentes*: em **Upper Camel Case** (ex: DropdownMenu.scss)
 - Classes: em **Upper Camel Case** (ex: DropdownMenu)
 - *Funções, atributos, constantes*: em **Lower Camel Case** (ex: getList)
 - *Classes do CSS*: em **minúscula** e separando as palavras por **hífen** (ex: form-button)


## CRIANDO COMPONENTES
Todo componente deve ter o ```scss``` relativo e o teste.
Os componentes devem ser genéricos, sem muita lógica, e reutilizáveis.

### Estrutura básica de cada componente
- ```arquivo.tsx```  **Obrigatório**
- ```arquivo.scss```
- ```arquivo.test.tsx``` **Obrigatório**
- ```arquivo.hook.tsx``` *Implementação de Hooks*
- ```arquivo.schema.tsx``` *Definição dos* **tipos** *de dados de entrada*
-  ```arquivo.slice.tsx``` *Implementação do Redux*


## OUTROS PADRÕES
 - Variáveis declaradas sempre no começo.
 - Uso de aspas simples.
 - Espaçamento em TAB SIZE 4.
 - Comentários em cada função, sempre com /**

### Padrão de Commit
- Seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Os commits devem ser do tipo: Docs, Fix, Feat ou Refactor.
- Entre () colocar o que foi alterado, exemplo: comment, library, pipeline, component, page, form...
- Mensagem clara sobre o que foi alterado no código.
- Colocar componente específico ou página específica que foram alterados.
- Finalizar com Issue: #*nome-da-tarefa*
- Exemplo de commit: **'feat(component): Criação do componente Dropdown. Component: Dropdown. Issue: #FELL-20'**

### Bibliotecas utilizadas
 - [Reactstrap](https://reactstrap.github.io/)
 - [Axios](https://axios-http.com/)
 - [React Hook Form](https://react-hook-form.com/ts)
 - [React Router](https://reactrouter.com/web/guides/quick-start)
 - [ClassNames](https://www.npmjs.com/package/classnames)
 - [FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
 - [Playwright](https://playwright.dev/docs/intro)
 - [Redux](https://redux.js.org/introduction/getting-started)
