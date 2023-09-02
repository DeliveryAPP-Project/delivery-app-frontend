# Delivery App

> Explicação breve do projeto com no máximo 2 a 3 linhas

## Tecnologias

#### **Website** ( [ReactJS](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) )

- [React Router Dom](https://reactrouter.com/en/main)
- [Styled Components](https://styled-components.com/)
- [React Query - Tanstack](https://tanstack.com/query/v4)
- [Axios](https://axios-http.com/ptbr/docs/intro)

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** → **[Protótipo (Projeto)](link-para-o-figma-do-teu-projeto)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[Prettier](https://prettier.io/)** + **[EditorConfig](https://editorconfig.org/)**
- Versionamento: **[Git](https://git-scm.com)**
- Padronização de código: **[ESLint](https://eslint.org/)**

## Layout

O layout da aplicação está disponível no Figma:

<a href="link-para-o-figma-do-projeto">
  <img alt="Made by delivery app" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

> Adicionar 2 a 3 imagens do Figma quando tiver disponível

## Funcionalidades

Features que estão sendo adicionadas na aplicação

**Front-end Web**

- [x] Features do Front-end concluídas
- [ ] Features do Front-end em andamento

## Estrutura de pastas e componentes

Afim de facilitar a organização e manutenção do código, foi definido um padrão para organização das pastas neste projeto.

### Estrutura de pastas

→ components: Pasta onde ficam os componentes da aplicação. <br />
→ contexts: Pasta onde ficam os componentes da aplicação. Cada contexto criado vai ter uma pasta própria dentro da estrutura de contexts. <br />
→ errors: Pasta onde ficam os errorsHandlers customizados da aplicação. <br />
→ hooks: Pasta onde ficam os custom hooks da aplicação. Cada custom hook vai seguir o mesmo padrão do context. <br />
→ lib: Pasta onde ficam algumas configurações internas de lib externas que precisamos utilizar da aplicação. <br />
→ pages: Pasta onde ficam os componentes de cada página da aplicação. As páginas vão seguir a mesma padronização dos outros componentes. <br />
→ routes: Pasta onde ficam as rotas públicas e privadas de cada página da aplicação. <br />
→ service: Pasta onde vamos armazenar toda a camada de serviço. Cada service vai ter uma pasta alocada internamente na pasta service. E vai utilizar a classe `httpClient` para realizar as requests. <br />
→ styles: Pasta onde vamos armazenar toda a configuração de estilo global e tema da aplicação. <br />
→ utils: Pasta onde vamos armazenar todos os utilitários. <br />

### Estrutura de componentes

Para padronização dos componentes, nós vamos utilizar um pattern de container/presentation. O componente vai possuir uma camada de presentation, que vai possuir toda a view do componente, e uma camada de container, que vai possuir toda a lógica do componente. <br />

Essa comunicação entre o container e presentation vai ser feita através de um customHook exportado do container.

Vamos tomar como exemplo um componente chamado `example`:

→ index.ts: Responsável por exportar o componente, e o que mais for necessário para funcionamento do componente;
→ example.tsx: Responsável por ter a camada de presentation do componente;
→ example.hook.ts: Responsável por armazenar a camada de container do componente;
→ example.spec.tsx: Responsável por armazenar os testes do componente;
→ example.styles.ts: Responsável por toda estilização do componente;

## Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: <br />
→ [Git](https://git-scm.com);<br />
→ [Node.js](https://nodejs.org/en/);<br />

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/);

#### Getting started

Clone este repositório:

```bash
$ git clone https://github.com/DeliveryAPP-Project/delivery-app-frontend
$ cd delivery-app-frontend
```

Instale as dependências:

```bash
yarn install
```

Caso você esteja utilizando `npm`, execute:

```bash
npm install
```

#### Rodando a aplicação

Então, inicie o projeto:

```bash
yarn dev
# A aplicação será aberta na porta:5173 - acesse http://localhost:5173
```

Caso você esteja utilizando `npm`, execute:

```bash
npm run dev
```

## Como contribuir

Para contribuir, acesse [Guia de contribuição](./CONTRIBUTING.md)

## Colaboradores

A galera que ta fazendo acontecer ;)

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="link-avatar-github" width="100px;" alt="Foto do Fulano no GitHub"/><br>
        <sub>
          <b>Nome do usuário</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
