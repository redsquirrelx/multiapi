FROM node:iron-trixie-slim

WORKDIR /app

COPY ./app.js ./app.js

COPY ./package.json ./package.json

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "start" ]