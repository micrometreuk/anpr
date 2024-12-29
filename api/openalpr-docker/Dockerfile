FROM ubuntu:22.04
RUN apt-get update && DEBIAN_FRONTEND=noninteractive  apt-get install -y \
curl \
python3 \
wget \
supervisor \
gnupg \
apt-transport-https \
apt-utils \
lsof \
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
beanstalkd \
tesseract-ocr

run curl --location https://raw.githubusercontent.com/micrometre/dotfiles/master/scripts/openalpr_root-install.sh | bash -


VOLUME /etc/openalpr/
RUN mkdir -p   /var/lib/openalpr/plateimages
VOLUME /var/lib/openalpr/plateimages
RUN chown 1000:1000 /var/lib/openalpr/plateimages

RUN mkdir -p   /var/log/supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY alprd.conf /etc/openalpr/alprd.conf
CMD ["/usr/bin/supervisord"]
WORKDIR ~/    