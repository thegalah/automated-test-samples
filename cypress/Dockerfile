FROM mhart/alpine-node:12.18.1
RUN apk update
RUN npm -i g yarn
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
WORKDIR /app
RUN yarn install
ENTRYPOINT yarn run start