FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY . .

USER node

CMD ["npm", "run", "dev"]