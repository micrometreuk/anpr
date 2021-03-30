#!/bin/bash
echo 'deb http://deb.debian.org/debian buster-backports main' > /etc/apt/sources.list.d/backports.list
apt-get update && DEBIAN_FRONTEND=noninteractive  apt-get install -y \
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
beanstalkd \
tesseract-ocr
# Clone the latest code from GitHub
git clone https://github.com/openalpr/openalpr.git
# Setup the build directory
cd openalpr/src
mkdir build
cd build
# setup the compile environment
cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr -DCMAKE_INSTALL_SYSCONFDIR:PATH=/etc ..
# compile the library
make
# Install the binaries/libraries to your local system (prefix is /usr)
make install
