## how to install python 3.x

sudo yum install centos-release-scl

sudo yum install rh-python36

--> and then enable the shell on the directory you want to use this at

---- so cd to that dir first and then
scl enable rh-python36 bash

--> and then install development tool
sudo yum groupinstall 'Development Tools'

## install pip

sudo yum install epel-release

sudo yum install python-pip

---- and then install dev tool
sudo yum install python-devel
sudo yum groupinstall 'development tools'
