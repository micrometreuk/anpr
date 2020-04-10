#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
sudo apt update -y && sudo apt upgrade \
sudo apt install -y \
v4l2loopback-source  \
v4l2loopback-utils \
v4l-utils  \
module-assistant \
ffmpeg mpv mplayer \
libgstreamer1.0-0 \
gstreamer1.0-plugins-base \
gstreamer1.0-plugins-good \
gstreamer1.0-plugins-bad \
gstreamer1.0-plugins-ugly \
gstreamer1.0-libav \
gstreamer1.0-doc \
gstreamer1.0-tools  \ 
gstreamer1.0-x \
gstreamer1.0-alsa \ 
gstreamer1.0-gl \
gstreamer1.0-gtk3 \
gstreamer1.0-qt5 \
gstreamer1.0-pulseaudio
sudo  module-assistant auto-install v4l2loopback-source
sudo modprobe v4l2loopback
sudo depmod -a
#loopback command
#ffmpeg -i 2.mp4 -f v4l2 -r 10 -pix_fmt yuyv422 /dev/video2
#ffmpeg -i samples/2.mp4 -filter:v "setpts=2*PTS" -f v4l2 -pix_fmt yuyv422 /dev/video2
