FROM node:latest
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Собираем React приложение
#RUN npm run build

# Определяем порт, который будет использоваться приложением
EXPOSE 5173
CMD ["npm", "run", "dev"]
