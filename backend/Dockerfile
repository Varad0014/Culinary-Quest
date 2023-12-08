FROM node:20.10.0-alpine
WORKDIR /
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 4000
CMD ["npm", "start"]