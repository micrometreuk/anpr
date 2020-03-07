## Overview
Web ui for Open/ALPR with Express.js



### Requirements
- Node.js

To get started with node.js installation read the post from https://micrometre.co.uk/micrometreuk-articles/2020/02/06/nodejs.html


``` bash
git clone git@github.com:micrometreuk/anpr.git
cd anpr
npm  install 
npm run start
npm run test    #needs nodemone installed ```bash npm install nodemon```
```

###  In a Docker container.

### Requirements
- Docker and Docker Compose

To Install Docker CE and Docker Compose follow the post from.https://micrometre.co.uk/2020/02/06/docker.html

``` bash
make start_docker               #Start the container
mae update_docker               #Update/upgarde container  
```

#### Access using
http://localhost:9091  
