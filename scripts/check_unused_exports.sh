#!/usr/bin/env bash

set -e

./node_modules/.bin/ts-unused-exports tsconfig.json \
  --excludePathsFromReport='next.config' \
  --excludePathsFromReport='tailwind.config' \
  --excludePathsFromReport='.*/app/.*' \
  --excludePathsFromReport='.*\.next\.*'
