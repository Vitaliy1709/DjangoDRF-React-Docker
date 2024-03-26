# DjangoDRF-React-Docker

# Django_React

Проект Django_React представляет собой веб-приложение, разделенное на backend, написанный на Python с использованием фреймворка Django, и frontend, написанный на React. Проект упакован в Docker контейнеры для удобства развертывания и управления окружением.

# Установка

Для запуска проекта вам понадобится Docker и Docker Compose.

1. Клонируйте репозиторий:

git clone https://...

2. Перейдите в директорию проекта:

cd Django_React

3. Запустите Docker Compose для сборки и запуска контейнеров:

docker-compose up --build

Это запустит контейнеры backend и frontend, а также контейнер базы данных PostgreSQL.

4. Откройте браузер и перейдите по адресу http://localhost:8000/ для доступа к приложению.

# Использование

Проект Django_React предоставляет веб-интерфейс для удобного взаимодействия с приложением, включая возможности создания, изменения и удаления пользователей и групп пользователей. Кроме того, проект предоставляет API для работы с пользователями и группами пользователей, что позволяет интегрировать его функционал в другие приложения и сервисы.

# Технологии

    Django
    Django Rest Framework
    React
    Axios
    Docker
    PostgreSQL
