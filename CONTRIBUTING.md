# Guia de contribuição

Obrigado por contribuir com o Delivery App! Este guia descreve como você pode ajudar no desenvolvimento do projeto e as diretrizes para padronização de branches e pull requests.

Os primeiros passos para rodar o projeto são apresentados no readme do repositório, clique aqui para ser direcionado.

## Padronização de código

Nós estamos utilizando Eslint, Prettier, editorconfig e um StyleGuide padrão com integrações automáticas e formtação de código. Instale as extensões abaixo no seu editor de código.

1. [ESLint](https://github.com/Microsoft/vscode-eslint)
1. [Prettier](https://github.com/prettier/prettier-vscode)
1. [Editor config](https://github.com/editorconfig/editorconfig-vscode)

> Para que o Prettier formate o código ao salvar, adicione `"editor.formatOnSave": true` no User Settings, se você utiliza o VSCode.

> Você também pode utilizar o script `lint:fix` para rodar o eslint em todos os arquivos e realizar as correções.

## Criação da branch

Agora que você já inicializou o repositório. Crie uma nova branch para trabalhar na contribuição.

Certifique-se de estar na branch `main`

```
git checkout main
```

Crie uma nova branch a partir da branch `main`

```
git checkout -b nome-da-sua-branch
```

Certifique-se de seguir a padronização de nomenclatura.

### Padronização do Nome das Branches

Para manter o fluxo consistente de desenvolvimento e facilitar a colaboração, adotamos um padrão para nomear as branches. O padrão consiste em utilizar o prefixo `feature/`, `fix/`, `docs/` e `refactor/`, seguido por uma pequena descrição que identifique a finalidade da branch.

#### Feature - Para novos recursos e finalidades

Branches que introduzem novos recursos ou finalidades ao projeto devem seguir o padrão `feature/nome-do-recurso`. Por exemplo:

```
feature/login-authentication
feature/payment-gateway-integration
```

#### Fix - Para correções de bugs

Branches que corrigem bugs ou problemas existentes devem seguir o padrão `fix/nome-do-bug`. Por exemplo:

```
fix/header-navigation-issue
fix/data-processing-error
```

#### Docs - Para documentação

Branches relacionadas à documentação do projeto devem seguir o padrão `docs/nome-da-documentacao`. Por exemplo:

```
docs/api-endpoints-documentation
docs/user-guide-update
```

#### Refactor - Para melhorar ou reestruturar o código

Brancher que são responsáveis por realizar uma reestruturação do código sem alterar o comportamento devem seguir o padrão `refactor/nome-do-refactor`. Por exemplo:

```
refactor/modify-structure-button
refactor/home-page
```

É importante observar que a palavra após o prefixo deve ser descritiva e concisa, fornecendo informações claras sobre o conteúdo da branch. Além disso, recomendamos usar letras minúsculas e separar palavras com hífens ou underscores para uma melhor legibilidade.

Ao criar uma nova branch, certifique-se de aderir a esse padrão de nomenclatura para facilitar a identificação e o rastreamento das alterações feitas.

## Desenvolvimento

Realize as alterações e adições necessárias no código, seguindo as práticas de codificação definidas pelo projeto.

Teste suas alterações para garantir que não haja regressões e que tudo funcione corretamente.

### Testing Code

Teste suas alterações para garantir que não haja regressões e que tudo funcione corretamente.

- `yarn tests:jest` - Rode todos os testes uma única vez
- `yarn tests:jest-watch` - Rode todos os testes no mode interativo e watch por mudanças

## Commits

Para manter um histórico de commits claro e consistente, adotamos um padrão para as mensagens de commit. Cada mensagem de commit deve seguir o seguinte formato:

```
<tipo>(escopo opcional): descrição breve
```

### Tipos de Commits

feat: Para adicionar um novo recurso ou funcionalidade ao projeto.

fix: Para corrigir um bug ou problema existente no código.

docs: Para atualizar ou adicionar documentação.

chore: Para realizar tarefas de manutenção, atualização ou outras tarefas não relacionadas ao código em si.

refactor: Para refatorar o código, sem adicionar novos recursos ou corrigir bugs.

Lembramos que é importante escrever descrições breves e informativas para cada commit, fornecendo contexto suficiente para entender as alterações realizadas.

Exemplos:

```
git commit -m "fix: Remove incorrect background"
```

Importante: Não faça commits diretamente na branch main. Todas as alterações devem ser feitas em uma branch separada de acordo com a padronização e, em seguida, solicitadas através de um Pull Request para a branch main.

## Pull Request

Abra o Pull Request(PR) no repositório com título descrito que resuma sua alteração. Caso seja necessário, pode adicionar alguma informação relevantes para a revisão.

Durante a revisão, um workflow automatizado será executado para verificar a qualidade do código, testes, formatação, entre outros critérios. Caso algum erro seja identificado, faça as correções necessárias e faça push novamente para a sua branch.

Após a revisão e aprovação do PR, sua branch será mesclada à branch `main`

### Atualização da branch

Antes de abrir um Pull Request (PR), certifique-se de atualizar sua branch com a branch principal do repositório para evitar conflitos. Você pode fazer isso usando os seguintes comandos:

```
git pull origin main
```

Resolva quaisquer conflitos que possam ocorrer durante o merge, caso haja.

## Agradecimentos

Agradecemos a todos os contribuidores que tornaram este projeto possível! Sua colaboração é muito valorizada e ajuda a melhorar continuamente o Delivery App. Se tiver alguma dúvida ou precisar de ajuda, sinta-se à vontade para entrar em contato com nossa equipe.

Aproveite sua jornada de desenvolvimento e boas contribuições!
