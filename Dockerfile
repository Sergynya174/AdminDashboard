# Используйте официальный образ Node.js в качестве базового образа

FROM node:alpine

# Установите рабочую директорию внутри контейнера

WORKDIR /app

# Скопируйте package.json и package-lock.json внутрь контейнера

COPY package\*.json ./

# Установите зависимости проекта

RUN npm install

# Скопируйте все файлы проекта внутрь контейнера

COPY . .

# Соберите проект с помощью команды npm run build (замените эту команду, если вы используете другую сборку)

RUN npm run build

# Укажите команду для запуска сервера внутри контейнера

CMD ["npm", "start"]

# FROM node:16-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# CMD cp -r build result_build