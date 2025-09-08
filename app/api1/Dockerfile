FROM node:iron-trixie-slim

WORKDIR /app

COPY ./app.js .
COPY ./package.json .

RUN npm i

CMD [ "npm", "run", "start" ]