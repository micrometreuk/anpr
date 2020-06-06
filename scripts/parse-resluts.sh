#!/bin/bash

for f in public/*.json; do
     cat /home/debo/repos/anpr/public/alprresult.json | sed 's/null/{"presence":\"\Absent\"\}/g' | sed '/_id/c\{"presence":\"\present\"\}'
done   
