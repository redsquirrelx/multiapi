FROM node:iron-trixie-slim

WORKDIR /app

COPY ./app.js .
COPY ./package.json .

RUN npm i

EXPOSE 8080

CMD [ "npm", "run", "start" ]