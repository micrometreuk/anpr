#!/bin/bash

for f in public/*.json; do
     cat ~/repos/debo/public/alprresult.json | sed "s/null/{\""\alprDB\":"\"Absent\"}/g"  | sed '/_id*/c\{"alprDB":"present"}' > public/result-filtered.json
done   
cat /home/debo/repos/debo/public/alprresult.json | sed "s/null/{\""\Absent\":"\"Absent\"}/g" | sed 'N;s/\n/\t/' | tr -d '{}""' | sed s/:/,/ | sed 's/_id:/ /' | sed 's/:/   /' | sed 's/,/ /g' | awk {'print$1,$2,$3'}
 cat /home/debo/repos/debo/public/alprresult.json | sed "s/null/{\"\     Absent\"\},/g" | sed 'N;s/\n/\t/' | tr -d '{}:"' | sed 's/,/  /' | awk {'print $1, $2'} | sed 's/registration//' | sed 's/_id/      ,db_ID/' | sed 's/Absent/         ,Absent/'
 cat /home/debo/repos/debo/public/alprresult.json | sed "s/null/{\"\     Absent\"\},/g" | sed 'N;s/\n/\t/' | tr -d '{}:"' | sed 's/,/  /' | awk {'print $1, $2'} | sed 's/registration//' | sed 's/_id/      ,db_ID/' | sed 's/Absent/         ,Absent/' | cat /home/debo/repos/debo/public/alprresult.json | sed "s/null/{\"\     Absent\"\},/g" | sed 'N;s/\n/\t/' | tr -d '{}:"' | sed 's/,/  /' | awk {'print $1, $2'} | sed 's/registration//' | sed 's/_id/      ,db_ID/' | sed 's/Absent/         ,Absent/'  | awk 'gsub(" ","")'
 cat /home/debo/repos/debo/public/alprresult.json | sed "s/null/{\"\     Absent\"\},/g" | sed 'N;s/\n/\t/' | tr -d '{}:"' | sed 's/,/  /' | awk {'print $1, $2'} | sed 's/registration//' | sed 's/_id/      ,db_ID/' | sed 's/Absent/         ,Absent/'  | awk 'gsub(" ","")' | sed '1 i\Reg, Data base Id'
