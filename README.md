# EMPOL PROJECT

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3450a6e0a02f4b7b99afb4d02fff38f6)](https://app.codacy.com/gh/giufiorenzano/empol?utm_source=github.com&utm_medium=referral&utm_content=giufiorenzano/empol&utm_campaign=Badge_Grade_Settings)

Movies project.
In this Readme you can find some **patterns** to be followed

### TECH

-   [React](https://reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [SASS](https://sass-lang.com/documentation)

## FILES STRUCTURE

1.  **/components** _Folder with all available components._
2.  **/forms** _Folder with all forms._
3.  **/pages** _Folder with all pages._
4.  **/helpers** _Folder with helper functions._
5.  **/themes** _Folder with themes._

## NOMENCLATURE

-   Everything must be named in **english**.
-   Components, functions and constants must have **clear name that express its functionality**.
-   _General folders_ have the names above.
-   _Folder_ of each _component_: is in **Upper Camel Case** (ex: DropdownMenu)
-   _Components files_: in **Upper Camel Case** (ex: DropdownMenu.scss)
-   Classes: in **Upper Camel Case** (ex: DropdownMenu)
-   _Functions, attributes, constants_: in **Lower Camel Case** (ex: getList)
-   _CSS classes_: in **lower kebab case** (ex: form-button)

## CREATING COMPONENTS

Every component must have its `scss` file and its test.
Components must be generics, without much logic, and reusable. 

### Basic structure of components

-   `file.tsx`  **Mandatory**
-   `file.scss`
-   `file.test.tsx` **Mandatory**
-   `file.hook.tsx` _Hooks implementation_
-   `file.schema.tsx` _Definition of_ **types**
-   `file.slice.tsx` _Redux implementation_

## OTHER PATTERNS

- Variables always declared at the beginning.
- Use of single quotes.
- Spacing in SPACE SIZE 4.
- Comments in each function, always with /\*\*

### Commit pattern

-   Follow this pattern [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
-   Commits types must be: Docs, Fix, Feat or Refactor.
-   Between () you put what changed, example: comment, library, pipeline, component, page, form...
-   Clear message about what changed.
-   Specify what component or page changed.
-   End the message with Issue: #_task-name_
-   Example: **'feat(component): Created Dropdown component. Component: Dropdown. Issue: #FELL-20'**

### Libs on this project

-   [Reactstrap](https://reactstrap.github.io/)
-   [Axios](https://axios-http.com/)
-   [React Hook Form](https://react-hook-form.com/ts)
-   [React Router](https://reactrouter.com/web/guides/quick-start)
-   [ClassNames](https://www.npmjs.com/package/classnames)
-   [FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
-   [Playwright](https://playwright.dev/docs/intro)
-   [Redux Tookit](https://redux-toolkit.js.org/)
