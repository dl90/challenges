# Intro

## IP address (layer 3 Network)

```bash
ifconfig
```

ipv4: 32 bit representation broken in to chucks of 8 bits separated by '.'

ipv6: 128 bit, barely used

### private ip address

not to be confused with actual ip addresses, these are issued by the router

* CLASS C: 192.168.0.0 (254 hosts => connections) most common household & small business
* CLASS B: 172.16-31.0.0 (65024 hosts) larger business
* CLASS A: 10.0.0.0 (16.6M hosts) corporate/institution
* localhost: 127.0.0.0-7

addresses outside this range are public addresses

## MAC address (layer 2 Data link)

differentiate devices

a4:83:e7:00:00:00 => first 3 set of hex identifies device vendor

## TCP UDP (layer 4 Transport)

Transmission Control Protocol

* reliability connection oriented (website ssh)

User Datagram Protocol

* stateless connectionless => no need to establish connection (streaming data)

## OSI model

1. Physical (cables)
1. Data (Mac address, switches)
1. Network (IP address, routing)
1. Transport (TCP, UDP)
1. Session (session management)
1. Presentation (media)
1. Application (HTTP)

## Subnetting

subnet mask => represented the same as ipv4

**128**[10000000] **192**[11000000] **224**[11100000] **240**[11110000] **248**[11111000] **252**[1111100] **254**[11111110] **255**[11111111]

* 128.0.0.0 /1
* 192.0.0.0 /2
* 224.0.0.0 /3
* 240.0.0.0 /4
* 248.0.0.0 /5
* 252.0.0.0 /6
* 254.0.0.0 /7
* 255.0.0.0 /8
* ...
* 255.255.0.0 => /16 network
* 255.255.255.0 => /24 network (wack 24)

| IP | Subnet| Hosts | Network | Broadcast |
| --- | --- | --- | --- | --- |
| 192.168.1.0/24 | 255.255.255.0 | 254 (.0 - .255)-2 | 192.168.1.0 | 192.168.1.255 |
| 192.168.1.0/28 | 255.255.255.240 | 14 (0.241 -.0.254) |192.168.1.0 | 192.168.1.15 |
| 192.168.1.16/28 | 255.255.255.240 | 14 | 192.168.1.16 | 192.168.1.31 |
| 192.168.0.0/22 | 255.255.252.0 | 1022 | 192.168.0.0 | 192.168.3.255 |
| 192.168.1.0/26 | 255.255.255.192 | 62 | 192.168.1.0 | 192.168.1.63 |
| 192.168.1.0/27 | 255.255.255.224 | 30 | 192.168.1.0 | 192.168.1.31 |

[cidr](https://www.ipaddressguide.com/cidr)

![chart](https://github.com/dl90/challenges/blob/main/ethical-hacking/images/1_intro.png?raw=true)
