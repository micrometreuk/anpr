#!/bin/bash
for f in public/uploads/*.* ; do alpr -c gb -n 1 $f | tail -n 1 | awk {'print "Number plates:", $2, $3, $4'}; done
#find public/uploads/ -iname *.jpeg -exec alpr -c gb  -p gb -n 1 {} \; | awk {'print "Number plates:", $2, $3, $4, $5, $6'}


#for f in public/uploads/*.* ; do alpr -c gb -n 1 $f | awk {'print$2, $3, $4'} | xargs ; done
#for f in samples/*.* ; do alpr -c gb -n 1 $f | awk {'print$2'} | tail -n 1 ; done
