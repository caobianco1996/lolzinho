# Catálogo de campeões — protótipo Angular

Aplicação Angular 14 que apresenta um catálogo local de campeões de League of Legends. Os dados em src/assets/herois.json foram obtidos do Data Dragon versão 12.6.1 e estão desatualizados.

## Requisitos e execução

- Node.js compatível com Angular CLI 14
- npm

Na raiz do repositório:

~~~sh
npm ci
npm start
~~~

Abra http://localhost:4200.

## Build e testes

~~~sh
npm run build
npm test
~~~

O teste usa o runner Karma; pode ser necessário um navegador compatível. Na verificação manual, confira a listagem e navegação entre campeões usando o catálogo local.

## Dados e ativos

Ao atualizar o catálogo, mantenha dados e imagens na mesma versão e registre a fonte e a data. League of Legends e seus ativos pertencem aos respectivos titulares; confira os termos aplicáveis antes de publicar.