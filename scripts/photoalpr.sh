#!/bin/bash
#!/bin/bash

for f in public/uploads/*.*; do
    alpr -c gb -n 1 $f | awk {'print$2'} | tail -n 1  

done > public/results.txt 2>&1
