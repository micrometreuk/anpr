#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
sudo apt update -y && sudo apt upgrade \
sudo apt install -y \
aptitude \
v4l2loopback-source  \
v4l2loopback-utils \
v4l-utils  \
module-assistant \
ffmpeg \
mpv \
mplayer 
sudo aptitude install v4l2loopback-source module-assistant v4l2loopback-dkms v4l2loopback-utils -y
sudo module-assistant auto-install v4l2loopback-source
sudo modinfo v4l2loopback 
sudo modprobe v4l2loopback 
#loopback command
#ffmpeg -i 2.mp4 -f v4l2 -r 10 -pix_fmt yuyv422 /dev/video2
#ffmpeg -i samples/2.mp4 -filter:v "setpts=2*PTS" -f v4l2 -pix_fmt yuyv422 /dev/video2
