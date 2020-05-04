#!/bin/bash

for name in ~/Public/*.mp4; do
  ffmpeg -i "$name" -filter:v "setpts=2*PTS" -f v4l2 -pix_fmt yuyv422 /dev/video0

done
