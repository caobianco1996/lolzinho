# Catálogo de campeões — protótipo Angular

Aplicação Angular 14 com catálogo local e busca pelo nome de campeões de League of Legends. Os dados em src/assets/herois.json vieram do Data Dragon versão 12.6.1 e estão desatualizados.

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

O teste usa Karma e pode exigir um navegador compatível. Na verificação manual, busque parte do nome de um campeão e confirme a filtragem e contagem; limpe o campo para exibir o catálogo todo.

## Dados e imagens

O protótipo exibe nomes e não usa imagens locais. Os 6.060 arquivos de skins que estavam em src/assets/champion não eram referenciados pela aplicação e foram removidos da versão atual para reduzir o repositório. O histórico Git anterior ainda contém esses arquivos. Se imagens forem adicionadas depois, prefira carregar apenas os ícones necessários de uma versão definida do Data Dragon e registre fonte e data.

League of Legends e seus ativos pertencem aos respectivos titulares; confira os termos aplicáveis antes de publicar.