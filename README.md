PROJETO BACK-END
================

# Para iniciar o projeto (nome: back-end)
`npx @aka-demy/create-express-app`
* _Install package...?_: y
* _Name_: back-end
* _Language_: JavaScript
* _Template engine_: None
* _Package manager_: npm

## Mudando para a pasta do projeto
`cd back-end`

## Atualizando pacotes vulneraveis com atualizações de segurança
`npm audit fix --force`

## Instalando o prisma como dependencia de desenvolvimento
`npm install prisma --save-dev`

## Inicializando o prisma com conctar para MongoDB
`npx prisma init --datasource-provider mongodb`

## instalando o prisma client
`npm install @prisma/client`

## Gerabdo cliente do Prisma
`npx prisma generate`
*Precisa ser executado **toda vez** que arquivo `schema.prisma` for alterado

## Exibindo os dados cadastrados com prisma studio
`npx prisma studio`
* Deve ser executado em um segundo terminal, enquanto o projeto esta sendo executado no priemiro.

## Criando um crud a partir de outro ja existente

### _Controller_
1. Copie o arquivo do _controler_ (`Ctr+c Ctrl+v`) e
renomeie-o de acordo com a nova entidade para a qual sera feito o novo crud.

2. Substitua (`Crtl+h`) todas as ocorencias de `prisma.xxxx` por `prisma.yyyy`,
onde `xxxx` é o nome da entidade antiga por `yyyy` que sera a entidade nova.

3. Verifique, no método `retrieceAll()` do _Controller_, se há campos sendo
usados no _orderby_ e substitua-os conforme a nova entidade.

### _Route_
1. Copie o arquivo do _route_ (`Crtl+c Ctrl+v`) e renomei-o de acordo com a nova entidade
para a qual esta sendo feito o CRUD.

2. Na linha de `import` do _controller_, substitua o nome da entidade antiga pela nova.

### Arquivo `app.js`
1. Na parte inferior do arquivo, na seção de rotas, copie e cole as duas linha correspondentes
a uma rota já existente e faça as substituições necessarias.
 * São **quatro substituições** ao todo, duas em cada linha.