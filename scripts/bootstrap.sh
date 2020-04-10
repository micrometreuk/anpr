#!/usr/bin/env bash
echo "starting vagrant shell provisioner"
apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
build-essential \
cmake \
curl \
git \
libcurl3-dev \
libleptonica-dev \
liblog4cplus-dev \
libopencv-dev \
libtesseract-dev \
wget \
make \
software-properties-common
add-apt-repository ppa:alex-p/tesseract-ocr &&  apt update  && apt install tesseract-ocr -y
curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
apt-get update &&  apt-get install -y \
nodejs
RUN npm install pm2 -g
COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
CMD ["pm2-runtime", "app.js"]
