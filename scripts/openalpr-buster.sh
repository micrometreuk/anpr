#!/bin/bash
sudo apt-get update && DEBIAN_FRONTEND=noninteractive  sudo apt-get install -y \
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
beanstalkd 
##  sudo apt upgrade -y
##  # Clone the latest code from GitHub
##  git clone https://github.com/openalpr/openalpr.git
##  # Setup the build directory
##  cd openalpr/src
##  mkdir build
##  cd build
##  # setup the compile environment
##  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr -DCMAKE_INSTALL_SYSCONFDIR:PATH=/etc ..
##  # compile the library
##  make
# Install the binaries/libraries to your local system (prefix is /usr)
echo "deb http://ftp.debian.org/debian stretch-backports main" | sudo tee /etc/apt/sources.list
echo "deb-src http://ftp.debian.org/debian stretch-backports main" | sudo tee /etc/apt/sources.list
