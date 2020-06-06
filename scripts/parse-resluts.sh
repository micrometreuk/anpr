#!/bin/bash

for f in public/*.json; do
 cat /home/debo/repos/anpr/public/alprresult.json | sed 's/null/{",Absent"}/' | sed '/_id/c\{\"\,present\"}'  | sed 'N;s/\n/\t/' | tr -d '{"}' | sed 's/registration://' | sed '1 i\Reg, Presence' > /home/debo/repos/anpr/public/result.csv 
 done   
