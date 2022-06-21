FROM node:16
# Create app directory
WORKDIR /usr/backend

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3001

RUN npx prisma generate

USER node

CMD [ "npm", "run", "dev" ]