FROM node:5.12.0
# replace this with your application's default port
EXPOSE 8080

RUN mkdir -p /usr/src/mappr
WORKDIR /usr/src/mappr

COPY package.json /usr/src/mappr/
RUN npm install && npm install --only=dev && npm cache clean

COPY client /usr/src/mappr/client
COPY etl-scripts /usr/src/mappr/etl-scripts
COPY server /usr/src/mappr/server
COPY test /usr/src/mappr/test
COPY server.js /usr/src/mappr/
COPY mapping.json /usr/src/mappr/
COPY run_local_mode.sh /usr/src/mappr/
COPY run_test_mode.sh /usr/src/mappr/

ENV NODE_ENV "local"

CMD [ "npm", "start" ]