FROM node
WORKDIR /app
COPY package.json yarn.lock .
RUN yarn install
COPY /dist .
RUN yarn build
EXPOSE 80
CMD ["yarn", "dev"]
