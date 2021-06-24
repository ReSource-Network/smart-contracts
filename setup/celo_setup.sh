#!/bin/bash

echo "Requires node 10"
(cd celo-monorepo && yarn && yarn build --ignore docs)