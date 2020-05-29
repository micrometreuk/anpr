#!/bin/bash

for f in public/*.json; do
    cat public/alprresult.json | sed "s/null/{\""\registration\":"\"Absent\"}/g"  | jq '.' > public/result.json

done   
