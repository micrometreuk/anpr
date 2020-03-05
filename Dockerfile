from ubuntu:18.04

# Install prerequisites
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    curl \
    git \
    wget \
    build-essential \
    cmake \
    libcurl3-dev \
    libleptonica-dev \
    liblog4cplus-dev \
    libopencv-dev \
    libtesseract-dev \
    supervisor 
# Copy all data
RUN git clone https://github.com/openalpr/openalpr.git && mv /openalpr /srv/openalpr
# Setup the build directory
RUN mkdir /srv/openalpr/src/build
workdir /srv/openalpr/src/build

# Setup the compile environment
RUN cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr -DCMAKE_INSTALL_SYSCONFDIR:PATH=/etc .. && \
    make -j2 && \
    make install
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update &&  apt-get install -y \
nodejs
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
WORKDIR /code
RUN npm install -g nodemon
COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
CMD ["/usr/bin/supervisord"]
