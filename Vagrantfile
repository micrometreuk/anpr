# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  # config.vm.box_check_update = false
  # config.vm.network "forwarded_port", guest: 80, host: 8080
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"
  # config.vm.network "private_network", ip: "192.168.33.10"
  # config.vm.network "public_network"
  # config.vm.synced_folder "../data", "/vagrant_data"
   config.vm.provider "virtualbox" do |vb|
     vb.memory = "524"
   end
   config.vm.provision "shell", inline: <<-SHELL
     apt-get update
   SHELL
   config.vm.provision "shell", path: "scripts/vagrant-provisioner.sh"
end
