## Overview
Webui for Openalpr with Node.js and Express.js. 

### Requirements
- Node.js

To get started with node.js installation read the post from https://micrometre.co.uk/micrometreuk-articles/2020/02/06/nodejs.html

Clone the repository and use npm to start. 

```bash
git clone https://github.com/micrometreuk/anpr.git 
cd micrometre-Jekyll.co.uk
npm run start
npm run test
```
#### Access using
http://localhost:9091  

### 1. In a Docker container.

### Requirements
- Docker and Docker Compose

To Install Docker CE and Docker Compose follow the post from.https://micrometre.co.uk/2020/02/06/docker.html

Clone the repo and use the make file to get started.

``` bash
git clone git@github.com:micrometreuk/anpr.git
``` 

``` bash
make start_docker               #Start the container
mae update_docker               #Update/upgarde container  
```
