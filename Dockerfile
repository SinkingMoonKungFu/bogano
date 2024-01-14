FROM node
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
RUN npm install -g serve
CMD ["serve", "-s", "dist"]
