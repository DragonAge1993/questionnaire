# Этап сборки (Build)
FROM node:12 as build
USER root

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения (включая исходный код фронтенда)
COPY . .

# Сборка фронтенда для production
RUN npm run build --prod

# Этап для обслуживания статических файлов через Nginx
FROM nginx:alpine

# Копируем собранные файлы фронтенда из предыдущего этапа в Nginx
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html/

# Копируем и настраиваем конфигурацию Nginx для обработки маршрутов SPA
#ddsdddCOPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт, который будет слушать Nginx
EXPOSE 80

# Запускаем Nginx в фореграунде
CMD ["nginx", "-g", "daemon off;"]
