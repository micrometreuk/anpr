FROM ubuntu:18.04
# Install prerequisites
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
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
    make \
    software-properties-common
RUN add-apt-repository ppa:alex-p/tesseract-ocr &&  apt update  && apt install tesseract-ocr -y
RUN git clone   https://github.com/openalpr/openalpr.git /srv/openalpr
RUN mkdir /srv/openalpr/src/build
WORKDIR /srv/openalpr/src/build
RUN cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr -DCMAKE_INSTALL_SYSCONFDIR:PATH=/etc .. && \
    make -j2 && \
    make install
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update &&  apt-get install -y \
nodejs
WORKDIR /code
RUN npm install pm2 -g 
COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
CMD ["pm2-runtime", "app.js"]
