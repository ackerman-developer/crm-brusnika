FROM node:latest
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

# Собираем React приложение
RUN npm run build

# Определяем порт, который будет использоваться приложением
EXPOSE 3000
CMD ["npm", "run", "dev"]
