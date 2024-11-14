# Этап сборки
FROM node:12 as build

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения
COPY . .

# Сборка бэкенда
RUN npm run build
# Этап запуска
FROM node:12 as production

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /usr/src/app/dist ./dist/

# Копируем только package.json и package-lock.json
COPY --from=build /usr/src/app/package*.json ./

# Устанавливаем зависимости для продакшн
RUN npm install --only=production
# Указываем порт, который будет слушать приложение
EXPOSE 3000

# Запускаем бэкенд
CMD ["node", "dist/index.js"]  # Убедитесь, что путь правильный
