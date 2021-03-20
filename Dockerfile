FROM ubuntu:bionic
RUN apt-get update &&  apt-get install -y \
curl \
python \
wget \
supervisor \
gnupg \
apt-transport-https \
apt-utils 
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc |  apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" |  tee /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN  apt-get update
RUN  apt-get install -y mongodb-org
VOLUME ["/data/db"]
RUN curl --silent --location https://raw.githubusercontent.com/micrometreuk/anpr/master/scripts/openalpr-root-install.sh | bash -
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
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
EXPOSE 27017
EXPOSE 9091
