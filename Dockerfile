FROM node:16-alpine

WORKDIR /app

COPY *.json .

RUN npm i

COPY . .

CMD [ "npm", "run", "server" ]
