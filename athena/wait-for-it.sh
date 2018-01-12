#!/bin/bash
# wait-for-it.sh

set -e
cmd="$1"
sleep 10

>&2 echo "Mongo is up - executing command"
exec $cmd

