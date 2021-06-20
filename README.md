# DESAFIO MESHA

[![Front feito com Angular](https://img.shields.io/badge/Front%20feito%20com-Angular-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![Api feita com NestJS](https://img.shields.io/badge/Api%20feita%20com-NestJS-red?style=for-the-badge&logo=nestjs)](https://nestjs.com/)
![Linguagem Typescript](https://img.shields.io/badge/Linguagem-Typescript-blue?style=for-the-badge&logo=Typescript)
[![TypeORM](https://img.shields.io/badge/Utilizando-TypeORM-blue?style=for-the-badge&logo=typeorm)](https://www.mysql.com/)
[![Utilizando MySQL](https://img.shields.io/badge/Utilizando-MySQL-blue?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![Utilizando JWT](https://img.shields.io/badge/Utilizando-JWT-yellow?style=for-the-badge)](https://jwt.io/)
![Utilizando Monorepo](https://img.shields.io/badge/Utilizando-Monorepo-orange?style=for-the-badge)

## Descrição do Projeto

Projeto realizado como teste técnico para vaga de programador na mesha. technology

## Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🌎 Configure as variaveis de ambiente de acordo com o seu ambiente, mas use MySQL

```
APP_FRONTEND_URL=http://localhost:4200
APP_URL="http://localhost:3333"
APP_ENV=development

TYPEORM_CONNECTION= mysql
TYPEORM_HOST=localhost
TYPEORM_PORT=3306
TYPEORM_DATABASE=avaliacao
TYPEORM_USERNAME=root
TYPEORM_PASSWORD=
TYPEORM_ENTITIES = src/app/**/*.entity.ts
TYPEORM_MIGRATIONS = apps/api/src/database/migrations/*.ts
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_MIGRATIONS_DIR = apps/api/src/database/migrations
TYPEORM_SEEDING_SEEDS=apps/api/src/database/seeds/*.ts

MAIL_DRIVER=smtp
MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
MAIL_FROM_EMAIL=
MAIL_FROM_NAME=NTM
MAIL_TO_ADIM=

TZ=UTC
RECAPTCHA_SECRET_KEY=
JWT_SECRET_KEY=7d7635f1ad876fbc1f8d8e5a36cc982c
STORAGE="./storage"
```

### 💻 Intalando os pacotes do Projeto (Angular + NestJS)

```bash
# Clone este repositório
$ git clone https://github.com/matheuscassiano/avaliacao-mesha

# Acesse a pasta do projeto no terminal/cmd
$ cd avaliacao-mesha

# Instale as dependências com npm
$ npm install

# Rode as migrations
$ npm run migration:run

# Rode as seeds
$ npm run seed:run
```

### 🎲 Rodando o Projeto (Angular + NestJS)

```bash
# Para executar a api rode <http://localhost:3333/api>
$ npm start api

# Para executar o front rode <http://localhost:4200>
$ npm start front
```
