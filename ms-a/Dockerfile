FROM node:12.18.1-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
COPY A.js ./

CMD npm start