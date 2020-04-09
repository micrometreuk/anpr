#!/bin/bash
#Install Vagrant
sudo apt-get update
cd
wget https://releases.hashicorp.com/vagrant/2.2.7/vagrant_2.2.7_x86_64.deb 
sudo dpkg -i vagrant_2.2.7_x86_64.deb
rm vagrant_2.2.7_x86_64.deb
sudo wget https://raw.github.com/kura/vagrant-bash-completion/master/etc/bash_completion.d/vagrant -O /etc/bash_completion.d/vagrant
#vagrant plugins
vagrant plugin install vagrant-vbguest
vagrant plugin install vagrant-hostsupdater
vagrant plugin install vagrant-lxd
sudo chown -R "$USER:$USER" .vagrant.d/
vagrant plugin list
