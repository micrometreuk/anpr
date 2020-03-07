## Overview
Webui for Linux commands with Node.js and Express.js. 

### Requirements
- Node.js

To get started with node.js installation read the post from https://micrometre.co.uk/micrometreuk-articles/2020/02/06/nodejs.html

Clone the repository and use npm to start. 

```bash
git clone https://github.com/micrometreuk/webmin.git 
cd webmin
npm start
npm test # needs nodemon 
```
#### Access using
http://localhost:9091  

### In a Docker container.

### Requirements
- Docker and Docker Compose

To Install Docker CE and Docker Compose follow the post from.https://micrometre.co.uk/2020/02/06/docker.html

Clone the repo and use the make file to get started.

``` bash
git clone git@github.com:micrometreuk/webmin.git
``` 

``` bash
make start_docker               #Start the container
mae update_docker               #Update/upgarde container  
```
