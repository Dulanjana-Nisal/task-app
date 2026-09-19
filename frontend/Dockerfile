FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN mkdir -p node_modules/.vite && chown -R node:node /app

RUN npm install

COPY . . 

USER node
