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
