cat public/result.csv | grep reg | tr : "    " | awk {'print $3'} | tr -d '", }'

