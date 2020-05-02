#!/bin/bash
while true
do 
    ffmpeg -i /home/debo/repos/anpr/samples/2.mp4 -f v4l2 -r 10 -pix_fmt yuyv422 /dev/video0

done
