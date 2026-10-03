# Catálogo de campeões — protótipo Angular

Aplicação Angular 14 com catálogo local e busca pelo nome de campeões de League of Legends. Os dados em src/assets/herois.json foram obtidos do Data Dragon versão 12.6.1 e estão desatualizados.

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

O teste usa o runner Karma; pode ser necessário um navegador compatível. Na verificação manual, digite parte do nome de um campeão no campo de busca e confirme que a lista e a contagem filtram os resultados; limpe o campo para ver o catálogo completo.

## Dados e ativos

Ao atualizar o catálogo, mantenha dados e imagens na mesma versão e registre fonte e data. League of Legends e seus ativos pertencem aos respectivos titulares; confira os termos aplicáveis antes de publicar.