#!/bin/bash

for f in public/*.json; do
cat /home/debo/repos/anpr/public/alprresult.json | sed "s/null/{\"\     Absent\"\},/g" | sed 'N;s/\n/\t/' | tr -d '{}:"' | sed 's/,/  /' | awk {'print $1, $2'} | sed 's/registration//' | sed 's/_id/      ,_id:/' | sed 's/Absent/         ,Absent/'  | awk 'gsub(" ","")' | sed '1 i\Regstrations, Data base Id' | awk '{print}' > public/result.csv
done   
