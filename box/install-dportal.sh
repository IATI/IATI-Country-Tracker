cd `dirname $0`


sudo apt-get install -y curl
sudo apt-get install -y parallel

sudo npm install -g forever

sudo rm /dportal
sudo ln -s `readlink -f ..` /dportal
mkdir -p /dportal/logs

source ./env.sh

# incase we are trying to replace
sudo /etc/init.d/dportal stop


/dportal/npm-install


bash /dportal/box/dstore-create


sudo cp dportal-initd /etc/init.d/dportal

sudo update-rc.d dportal defaults
sudo update-rc.d dportal enable

sudo /etc/init.d/dportal start


