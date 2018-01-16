#!/bin/bash

NODE_ENV="docker"
export NODE_ENV

sleep 15
exec ./node_modules/nodemon/bin/nodemon.js  --debug --watch server server.js
