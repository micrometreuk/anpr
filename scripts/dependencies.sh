#!/bin/bash
#install dependencies
export DEBIAN_FRONTEND=noninteractive
sudo apt upgrade -y && \
sudo apt install -y \
git \
build-essential \
make \
software-properties-common \
unzip \
curl \
wget \
openssh-server \
bash-completion \
vim \
python2.7 \
openssh-server \
tmux \
apt-transport-https \
ca-certificates \
aptitude \
python3.6-venv
python \
python-virtualenv \
python3-virtualenv \
python3-pip \
python3-dev \
python-pip  
sudo apt autoremove -y
