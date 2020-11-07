# linux commands

## run task in background

```bash
node server.js &
```

## switch to task

```bash
fg
```

## pause fg task then run it in bg

```bash
'control z'
bg
```

## check running background tasks

```bash
jobs
```

## continue running task after exiting terminal

```bash
disown -h %<job number>
```

## find running process

```bash
ps aux | grep server.js

pgrep node
```

## kill running process

```bash
kill <processID>

pkill node
```

## Node Permission Denied

Error: listen EACCES: permission denied 0.0.0.0:80

Using iptables to fix it
iptables is a user-space utility program that allows a system administrator to configure the tables provided by the Linux kernel firewall.

We will create a redirect of port 80 to 8080 in our scenario.

```bash
sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
```

To check if the route has been added successfully you can execute the following command:

```bash
sudo iptables --table nat --list
```

You should see something like this:
REDIRECT tcp -- anywhere anywhere tcp dpt:http redir ports 8080
