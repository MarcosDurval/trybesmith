FROM node:16

WORKDIR /usr/backend

COPY package*.json ./

RUN npm install

COPY --chown=node:node . /usr/backend/ 

EXPOSE 3001

RUN npx prisma generate

USER node

CMD [ "npm", "start" ]