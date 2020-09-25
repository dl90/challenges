# Linux

```bash
/etc/shadow
```

## network

```bash
# ip & mac
arp -a

# active connections
netstat -ano

# routing table
route
```

## services

```bash
# /var/www/html
service apache2 start

# auto loads service on boot
systemctl enable ssh
systemctl enable postgresql
```

```bash
apt update && apt upgrade

# common location for installs
/opt
```

## ping ip

```bash
# ping once query result saved to ip.txt
ping 192.168.0.1 -c 1 > ip.txt
# split with delimiter " " and returns 4th field (ip)
cat ip.txt | grep "64 bytes" | cut -d " " -f 4 | tr -d ":"

for ip in `seq 1 254`; do
ping -c 1 192.168.0.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done > ip.txt

# & enables threading (multiple processes)
for ip in $(cat ip.txt); do nmap -sS -p80 -T4 $ip & done;
```

```bash
#!/bin/bash

# $0 is the name of the command run (usually the name of the shell script file);
# $1 is the first argument, $2 is the second argument, $3 is the third argument, etc...
if [ "$1" == "" ]
then
echo "You forgot an IP address!"
echo "Syntax: ./ipsweep.sh 192.168.1"

else
for ip in `seq 1 254`; do
ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done
fi
```
