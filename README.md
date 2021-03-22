## Overview 
### WebUI for OpenALPR 

Using a video file containing Licence plates for input.
OpenALPR daemon(alprd)  will POST to the Nodejs application. 
The Licence plate number are stored in a MongoDB data base.

![alt tag](public/images/db-admin.png ) 
#### Feature
- Upload video files
- Manage alprd 
- Perform MongoDB CRUD Operations

#### Contents

##### Backends
- Node.js
- Express.js
- MongoDB
:
##### Frontends
- jsGrid
- Material Design Lite 

### Requirements
- Docker and Docker Compose.
- MongoDB Compass (optional).
 Gui for MongoDB https://docs.mongodb.com/compass/master/install

### Usage
``` bash
#Start the container
docker-compose up -d               
```
#### Access using
http://localhost:9091/
