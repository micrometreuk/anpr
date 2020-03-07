## Overview
Web ui for Open/alpr wit Express.js



### Requirements
- Node.js

If you are deploying on localhost you will need node.js installed, to get started with node.js installation read the post from https://micrometre.co.uk/micrometreuk-articles/2020/02/06/nodejs.html

``` bash
npm run start
npm run test
npm run debug
```

###  In a Docker container.

### Requirements
- Docker and Docker Compose

For this demo the Requirements are Docker and docker-compose. To Install Docker CE and Docker Compose follow the post from.https://micrometre.co.uk/2020/02/06/docker.html

    Clone the repo and use the make file to get started.

``` bash
git clone git@github.com:micrometreuk/webmin.git
``` 

``` bash
make start_docker               #Start the container
mae update_docker               #Update/upgarde container  
```

#### Access using
http://localhost:9091  
