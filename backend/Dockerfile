FROM node:16-alpine3.14

WORKDIR /usr/backend

COPY package*.json ./

RUN npm install --location=global npm@latest

COPY --chown=node:node . /usr/backend/ 

EXPOSE 3001

RUN npx prisma generate

USER node

CMD [ "npm", "start" ]