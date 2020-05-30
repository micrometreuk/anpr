#!/bin/bash

for f in public/*.json; do
     cat ~/repos/anpr/public/alprresult.json | sed "s/null/{\""\registration\":"\"Absent\"}/g"  | jq -r '.' | tr -d '{}, ,"' | sed s/_id/User/g | sed s/:/,/g > ~/repos/anpr/public/alprresult.csv

done   
cat ~/repos/anpr/public/alprresult.json | sed "s/null/{\""\alprDB\":"\"Absent\"}/g"  | sed '/_id*/c\from_alprDB'
