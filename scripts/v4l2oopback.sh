#!/bin/bash
sudo aptitude install v4l2loopback-source  v4l2loopback-utils v4l-utils  module-assistant ffmpeg mpv mplayer -y
sudo  module-assistant auto-install v4l2loopback-source
sudo modprobe v4l2loopback

