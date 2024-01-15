FROM node:alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 80
RUN npm install -g serve
CMD ["serve", "-l", "80", "-s", "dist"]
