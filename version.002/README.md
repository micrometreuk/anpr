## Overview 
REST API for Open/ALPR with Express.js In a Docker container.

### Requirements
- Ubuntu 18.04/20.04
- Docker and Docker Compose
- OpenALPR 

#### Install Docker CE and Docker Compose follow the post from. https://micrometreuk.github.io/2020/02/07/docker.html

#### Install Open/ALPR on the host

``` bash
cd anpr
bash  anpr/scripts/openalpr-install.sh   
```

``` bash
#Start the container
docker-compose up -d               
```

``` bash
#Update/upgarde container  
docker-compose stop
docker-compose down -v
docker-compose rm -f
docker-compose pull
docker-compose up -d --build
```

#### Access using
http://localhost:9091/alpr 


## To do

- [] https://codeforgeek.com/file-uploads-using-node-js/






