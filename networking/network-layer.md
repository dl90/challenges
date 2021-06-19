# Network Layer

## Layer 3 IP Packet (Datagram)

- IP packet is the payload of ethernet frames (Layer 2)
- min header size: 20 bytes
- largest packet size including header is 16 bits: 2 octet or 2^16 - 1 bytes
- IP packet payload is TCP/UDP segment (Layer 4)

### Header fields

- identification field used to identify packets belonging to a transmission
- fragmentation (chunking data) is indicated by the flag field
- fragmentation offset field is used to sequence chunked data by receiver
- TTL (Time To Live) field limits number of router hops (decrements per hop), stop infinite network loops due to misconfiguration
- protocol field identifies protocol (TCP/UDP)
- Header checksum validates header integrity and is updated per TTL decrement
- source/destination ip fields

## IPv4

- 32 bit numbers, 4 sets octet (0 - 255)
- dotted decimal notation 0.0.0.0
- distributed and assigned based on network, hierarchical
- dynamic (automatic) typically individual clients
- static (manual) typically servers/networking devices

### Address Class System

> replaced by classless inter-domain routing (CIDR)

- defines and splits global IP address space
- Class A: network id = first octet, rest = host id
  - 3 octets => 24 bits to represent hosts => 2^24 - 1 unique hosts
  - 0... {0-127}.0.0.0
  - used by core routers to route traffic around the globe
- Class B: network id = first 2 octets, rest = host id
  - 2 octets => 16 bits => 2^16 - 1 unique hosts
  - 10... {128-191}.0.0.0
- Class C: network id = first 3 octets, rest = host id
  - 1 octet => 8 bits => 2^8 - 1 unique hosts (typical home router)
  - 110... {192-223}.0.0.0
- Class D: reserved for multicasting: 1110... {224-239}.0.0.0
- Class E: reserved for experimental: 1111... {240-255}.255.255.255

### CIDR

- allows more flexible network sizes compared to Address Class System

## Subnetting

split large network into individual subnets

### Subnet Mask

- 32 bit, 4 octets, same as IP
- determines the size/range of subnet and if an IP exists on the same network (LAN)

```text
CIDR:  108.177.16.0/24
mask:  255.255.255.0

Class A address: 108 < 128
network ID:  108
host ID:     177.16.0

ip:     0110 1100 . 1011 0001 . 0001 0000 . 0000 0000
mask:   1111 1111 . 1111 1111 . 1111 1111 . 0000 0000

subnet ID = region marked by 1's
host ID = region marked by 0's

only last octet is available for host IDs
256 IPs (254 real hosts)

--------------------------------------------------------------------------
mask:   255.255.255.224
bin:    1111 1111 . 1111 1111 . 1111 1111 . 1110 0000

host ID: 5 bits, 32 IPs (30 real hosts)
CIDR: 27 set bits => /27, or 108.177.16.0/27 (IP/mask)
--------------------------------------------------------------------------
CIDR:   108.177.30.0/21
mask:   255.255.248.0

ip:     0110 1100 . 1011 0001 . 0001 1110 . 0000 0000
bin:    1111 1111 . 1111 1111 . 1111 1000 . 0000 0000

network ID: 108
host ID:    177.30.0
subnet ID:  108.177.24.0
hosts: 11 bits, 2048 IPs (108.177.24.0 ~ 108.177.31.255)
```

## ARP (Address Resolution Protocol)

```bash
arp [ip]
arp -la
```

- prior to building ethernet frame (Layer 2) MAC address for destination needs to be resolved
- ARP table (on each client) tracks other LAN clients IPs and their associated MAC address (LAN), refreshes often
- broadcast ARP messages looks for unknown IPs in LAN (MAC FF:FF:FF:FF:FF:FF)
- client with matching broadcasted IP sends back an ARP response containing its MAC

## DHCP (Dynamic Host Configuration Protocol)

- automates local network IP management
- dynamically assigns and manages IP address (track of assigned IPs and associated MAC addresses and lease/expiration time)
- composed of DHCP server(s) (router/dedicated server) and clients (network devices)
- DHCP Discover: clients IP request is broadcast to the whole network (255.255.255.255), targeting the DHCP servers
- DHCP Offer: DHCP server responds with available IP addresses
- DHCP Request: client confirms (typically first offer received) and sends the address to the DHCP server
- DHCP ACK (acknowledgement): DHCP server sends IP addr, subnet mask, default gateway, DNS server

## Routing

- gateway router: primary point of ingress (entry) and egress (exit) to WAN
- routers have at least 2 network interfaces with different MAC/IP to connect different networks
- routers use routing tables to lookup destination IP and find optimal network to forward traffic
- routers forward packets across network interface by rebuilding the received ethernet frame
  - duplicates received IP packet, decrements IP packets TTL field in packet header, updates header checksum
  - builds frame, attaching dest MAC (consulting its ARP table), it's own MAC as source MAC and sends frame
  - repeat on until packet reaches destination or TTL reaches 0

### Routing Tables (Routing Information Base)

```bash
netstat -r [-n -R -x]
```

varies depending on manufacturer, typically contains

- destination networks (network identifiers): IP range for remote networks
- next hop (gateway): IP of network router for destination network
- total hops (metric): cost used to decide efficiency
- interface: name or address of the network interface (hardware) to reach the gateway

routing tables are constantly updated as routers communicate to other routers using routing protocols

### Interior Gateway Protocol

Used by routers to exchange info within a single autonomous system (AS),
which is collection of networks under the control of a single network operator (eg: large organizations, ISP)

each AS has their own IP address space (block of IPs) and a ASN assigned by IANA <https://www.whatismyip.com/asn/US/>

- distance vector protocol (old)
  - router does not know the full topology of the AS its in
  - router obtains and shares distance value from its neighbor
- link state routing protocol
  - routers tracks the full topology of all other routers in the AS (mesh)
  - router calculates shortest path and updates its routing table based on topology

### Exterior Gateway Protocol (BGP)

Used by routers to exchange info between independent autonomous systems

- the basis of internet (network of networks)
- edge router: in charge of routing traffic outside of AS

## Non-routable Address Space (private network)

addresses set aside, not assigned to any AS

```text
10.0.0.0/8      => 10.0.0.0     ~   10.255.255.255
172.16.0.0/12   => 172.16.0.0   ~   172.31.255.255
192.168.0.0/16  => 192.168.0.0  ~   192.168.255.255
```

- can be routed within an AS (interior gateway protocol) but not outside
- ideal for client IPs within LAN, using NAT
- provides some protection for clients, external requests limited to responses (client obfuscation by router)
