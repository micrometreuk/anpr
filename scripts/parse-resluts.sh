#!/bin/bash
cp public/*.json ~/Public/results/
ls -la  ~/Public/results/

for name in ~/Public/results*.json; do
    cat ~/Public/results/*.json | jq
done
