#!/bin/bash
# wait-for-it.sh

set -e
cmd="$1"

# TODO:- Use a better logic to wait
sleep 10

>&2 echo "Mongo is up - executing command"
exec $cmd

