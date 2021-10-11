FROM node:14.17.1-alpine

RUN apk add --no-cache python g++ make
WORKDIR /
COPY . .
RUN npm install --only=production

EXPOSE 3001

CMD ["node", "app.js"]