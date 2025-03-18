FROM node:18-alpine AS builder

WORKDIR /app/frontend

COPY package*.json .
COPY src ./src
COPY public ./public
COPY index.html .
COPY vite.config.js .
COPY eslint.config.js .

RUN npm install
RUN npm run build

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/frontend/dist /usr/share/nginx/html