# Previsão do Tempo

## Descrição do Projeto

Esse projeto foi realizado para testar novos conhecimentos utilizando Styled Components para estilização: https://styled-components.com/ e TypeScript e foi baseado no seguinte desafio: https://github.com/1STi/desafio-frontend.

## Tecnologias usadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40" />


Esse projeto foi criado com React [Create React App] (https://github.com/facebook/create-react-app).

## Começando com React

Você precisa ter [NPM](https://nodejs.org/en/) ou [Yarn](https://yarnpkg.com/pt-BR/) instalado para rodar essa aplicação.

#### Clone esse projeto

```
  git clone https://github.com/carolineambar/previsaodotempo
```

#### Entre na pasta

```
  cd previsaodotempo
```

#### Instale dependencias

```
  yarn
```

or

```
  npm install
```

#### Para rodar!

```
  yarn start
```

or

```
  npm start
```

## Estrutura do projeto

```shell
|-- public
|---- favicon.ico
|---- index.html
|---- logo192.png
|---- logo512.png
|---- manifest.json
|---- robots.txt
|-- src
|---- api
|------ index.ts
|---- assets
|------ arrow.svg
|------ search.svg
|---- components
|------ Card
|-------- Card.styles.ts
|-------- Card.tsx
|-------- index.ts
|------ Page
|-------- index.ts
|-------- Page.styles.ts
|-------- Page.tsx
|------ Search
|-------- index.ts
|-------- Search.styles.ts
|-------- Search.tsx
|------ Table
|-------- index.ts
|-------- Table.styles.ts
|-------- Table.tsx
|---- config
|------ GlobalStyle.ts
|------ Theme.ts
|---- types
|------ city.ts
|---- App.tsx
|---- index.ts
|---- react-app-env.d.ts
|---- reportWebVitals.ts
|---- setupTests.ts
|-- .eslintrc
|-- .gitignore
|-- .prettierrc
|-- package-lock.json
|-- package.json
|-- tsconfig.json
```

Na pasta ```public``` estão as configurações do React.

Na pasta ```src``` estão as pastas de ```api``` onde está as configurações do backend, a ```assets``` onde estão o ícones e imagens utilizadas e ```components``` onde estão os componentes da aplicação subdivididos com documentos tsx para funcionalidade e ts para os estilos com Styled Components além dos arquivos de funcionalidade e o arquivo ```App.tsx``` onde ficou a aplicação principal.

Os demais arquivos são de configuração do Servidor como o ```package.json```.

## Futuras melhorias 

Atualmente consumi a seguinte API criada no gist: https://gist.githubusercontent.com/juunegreiros/c871c0fff7e43ffa1e32b6adb21f685c/raw/3db783c9a010eb99d42e1b740bc8309a0a33366c/clima.json , porém como futura melhoria irei consumir uma API de sites com previsão do tempo como o Yahoo, por exemplo.
