PROJETO BACK-END
================

# Para iniciar o projeto (nome: back-end)
`npx @aka-demy/create-express-app`
* _Install package...?_: y
* _Name_: back-end
* _Language_: JavaScript
* _Template engine_: None
* _Package manager_: npm

# Mudando para a pasta do projeto
`cd back-end`

# Atualizando pacotes vulneraveis com atualizações de segurança
`npm audit fix --force`

# Instalando o prisma como dependencia de desenvolvimento
`npm install prisma --save-dev`

# Inicializando o prisma com conctar para MongoDB
`npx prisma init --datasource-provider mongodb`

# instalando o prisma client
`npm install @prisma/client`

# Gerabdo cliente do Prisma
`npx prisma generate`
*Precisa ser executado **toda vez** que arquivo `schema.prisma` for alterado

# Exibindo os dados cadastrados com prisma studio
`npx prisma studio`
* Deve ser executado em um segundo terminal, enquanto o projeto esta sendo executado no priemiro.

