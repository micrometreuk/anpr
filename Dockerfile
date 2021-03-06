FROM ubuntu:18.04
RUN apt-get update &&  apt-get install -y \
curl \
python \
supervisor 
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN curl --silent --location https://raw.githubusercontent.com/micrometreuk/anpr/master/scripts/openalpr-root-install.sh | bash -
RUN apt-get update &&  apt-get install -y \
nodejs
VOLUME /etc/openalpr/
WORKDIR /code
RUN npm install -g nodemon
COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
EXPOSE 9091 9091
RUN mkdir -p   /var/log/supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY files/alprd.conf /etc/openalpr/alprd.conf
CMD ["/usr/bin/supervisord"]
