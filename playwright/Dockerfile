# https://github.com/microsoft/playwright/blob/master/docs/docker/Dockerfile.bionic
FROM thegalah/playwright
RUN apt-get install -y ffmpeg
RUN npm i -g yarn
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
WORKDIR /app
RUN yarn install
ENTRYPOINT yarn run start