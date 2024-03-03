#!/usr/bin/env bash

set -e

npm run lint
npm run type-check
npm run test

QUICK_BUILD=true yarn build
