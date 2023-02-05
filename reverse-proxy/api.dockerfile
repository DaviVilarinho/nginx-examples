FROM node:18.14.0-alpine
WORKDIR /api-src
COPY ./api-src/* /api-src/
RUN npm install
ENTRYPOINT node index.js

