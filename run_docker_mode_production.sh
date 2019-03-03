#!/bin/bash

NODE_ENV="docker"
export NODE_ENV

sleep 15
exec node server.js
