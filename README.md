
![Game Process](https://github.com/Paulo-Martin182/pokedex-app-with-nextjs/blob/main/public/React%20Avan%C3%A7ado%20-%20Boilerplate%20-%20Google%20Chrome%202021-02-01%2015-12-01.gif)

<h1 align="center">
    <a href="https://softwrap-test.vercel.app/softwrap">🔗 Pokedex</a>
</h1>
<p align="center">Pokedex utilizando PokeApi </p>

#  Sobre o Projeto

Este projeto permite visualizar uma lista de pokemons e ao selecionar um poderá visualizar algumas de suas
principais informações

>_Initial Commit... Este Projeto foi iniciado a partir de outro projeto em desenvolvimento apenas com as configurações iniciais como "Eslint, Prettier, Typescript com Nextjs"


<h4 align="center"> 
	🚧  Por falta de tempo estamos apenas com testes visuais 🛠️ Testes de erros em construção...  🚧
</h4>
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Graphql](https://www.typescriptlang.org/)
- [ApolloClient](https://www.typescriptlang.org/)
- [Styled-Components](https://www.typescriptlang.org/)

### 🎲 Rodando na sua maquina

```bash
# Clone este repositório
$ git clone <https://github.com/Paulo-Martin182/pokedex-app-with-nextjs>

# Acesse a pasta do projeto no terminal/cmd
$ cd pokedex-app-with-nextjs

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

## Você vai precisar de...

- `npm --version` instalado na sua maquina 
```


## Ambiente de desenvolvimento

>_ Algumas tecnologias para agilizar no desenvolvimento  com um padrão funcional...

![Badge](https://img.shields.io/badge/Plop-^2.7.4-%237159c1?style=for-the-badge&logo=🖨️)
![Badge](https://img.shields.io/badge/Eslint-^7.14.0-%237159c1?style=for-the-badge&logo=⌨️)
![Badge](https://img.shields.io/badge/EditorConfig-0.15.3-%237159c1?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Prettier-2.2.1-%237159c1?style=for-the-badge&logo=🧸)
![Badge](https://img.shields.io/badge/Jest-^26.6.3-%237159c1?style=for-the-badge&logo=🖤)

### Comandos

#### Para gerar um Componente com a estruturação padrão 
- ` yarn generate MyComponent`

#### Para rodar o Eslint

- `yarn test` 

Para manter o Jest "Escutando" `yarn test:watch`

#### Para rodar o Eslint

- `yarn lint`

ou

- `yarn lint --fix`

# Sobre as tecnologias e suas formas de implementação

## NextJS 

- O Nextjs tem suporte pra SSG, SSR e SPA

Nextjs foi escolhido por suas enormes vantagens e afins de estudos avançados
e as vantagens em ter escolhido esta tecnologia apesar de não utilizar todo seu potencial são

### No Server Side Rendering (SSR) com Nextjs

- Ótimo em SEO
- Meta Tags com previews mais adequados
- Sua otima Perfomace 
- E seu baixo processamento do lado Client

>_ Uma desvantagem de utilizar esta opção é o Time to first byte (TTFB), o servidor vai preparar todo o conteudo para entrega, logo... TTFB maior, um HTML maior e um Reload sempre que houver uma requisição

## Typescript

>_ um SuperSet do JavaScript, já chamado como linguagem está sendo um queridinho para diversos projetos. O Typescript adiciona novas features ao javascript, sendo tipagens Staticas


## GraphQl

Graphql é de fato uma delicinha para trabalhar com API

- permite evolução constante
- Entrega apenas de dados requisitados
- Dados altamente desacoplados

>_ Pelo fato de entregar apenas dados requisitados o deixa menor e mais rapido... 


## Styled-Components

Css outra delicinha haha 
>_ o Styled Components tem Escopo Definido, isso evita colisões de classes <3
- Remove css não utilizado
- Props e Themes, pode ser altamente dinamico
- E uma manutenção simplificada, com uma vantagem ao utilizar Jest

>_ E um ponto que sempre me perco... o Styled possui Vendor Prefixing automatico e isso salva bastante para não precisar ficar colocando aquelas coisas como "webkit ou moz"

### Jest

Jest foi utilizado para verificar se...
>_ quando o leitor de tela passar, os componentes principais, vão estar todos exibindo corretamente o "Alt"

### Plop

Plop foi muito util durante o desenvolvimento, pois está é uma tecnologia que pode gerar arquivos a partir
de um template base, então eu criei uma pasta como base de componente, com os "stories.tsx", "testes.tsx", 
"Styles.ts" e o "index.tsx" com um codigo padrão

### Eslint 

Eslint serve para formatação de codigo e correção de Inconsistências com base a uma coleção de regras
como
- Caso Utilizar Hooks de formas erradas
- Criação de variaveis não utilizadas





