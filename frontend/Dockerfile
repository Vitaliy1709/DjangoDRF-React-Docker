# Используем базовый образ Node.js
FROM node:16

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /frontend

# Копируем файлы зависимостей и устанавливаем их
COPY package*.json ./
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

RUN npm install

RUN npm run build
