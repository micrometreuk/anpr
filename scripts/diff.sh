#!/bin/bash
cat public/db.json | grep reg | tr : "    " | awk {'print$3'} | tr -d '", }' 
cat public/alprresult.json | grep reg | tr : "    " | awk {'print$2'} | tr -d '". }'
