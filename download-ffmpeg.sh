#!/bin/sh

wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz

tar -xf ffmpeg-release-amd64-static.tar.xz

cd ffmpeg-*

mv ./ffmpeg ../build/functions

cd ..

chmod +x ./build/functions
