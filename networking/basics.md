# Networking

## OSI (Open Systems Interconnection) model

1. physical: transfer of raw data (stream of bits) over wire
1. data link: node to node data transfer, identifies access through MAC address (within private network)
1. network: identifies path for cross network data transfer (routing and traffic control)
1. transport: chucking and packaging data for transfer, manages transmission speed and handles transport errors
1. session: manages setup, exchange, and teardown of application connections between devices
1. presentation: character encoding, encryption and compression
1. application: application API requests

### Device Level Process

- Inbound:
  - Layer 2: receives frame, filters/verifies MAC and caches return MAC, checks and discards any errors, peels MAC from frame and passes IP packet
  - Layer 3: receives packet, verifies IP and caches return IP, checks for errors, peels IP from packet and passes TCP segment
  - Layer 4: receives segment, assemble and verifies data, addresses any errors/missing data, peels off sequencing info for assembling data and passes data to port
  - Layer 5-7: receives data, caches return port, consumes data
- Outbound:
  - Layer 5-7: generates and forwards data and destination port
  - Layer 4: chucks data to build segment, attaches source and destination ports
  - Layer 3: builds packet, attaches source and destination IP
  - Layer 2: builds frame, attaches source and destination MAC

## MAC (Media Access Control)

- 48 bit physical address, 6 octets/pairs of hex (hardware and network adapters)
- first 24 bit identifies vendor (Organizationally Unique Identifier)
- typically do not change (but can be changed depending on device)
- used to identify, filter/whitelist devices

## Terms

- Switch: layer 2, LAN, inspects frame and directs it to a connected device with matching MAC
- Router: layer 3, bridges WAN and LAN, inspects IP in packet for destination, forwards to ISP
  - ISP core routers contain detailed table of all networks on the web (using Border Gateway Protocol)
- Duplex: _full_, unrestricted bidirectional, _half_, one at a time, Simplex: unidirectional
- RJ45: ethernet cable connectors, 4 pairs of twisted pair wires, Cat 5/Cat 6
- Broadcast: frame is sent to all local network devices/subnet (MAC: FF:FF:FF:FF:FF:FF)
- Multicast: frame is sent to a group of local network devices (MAC: .odd:..:..:..)
- Unicast: frame is sent to a single local network device (MAC: .even:..:..:..)
- Anycast: route traffic to different destinations based on cost, latency, location
- Cyclical Redundancy Check (CRC): ensures data integrity on layer 2

basic network configurables: IP, network mask, gateway, DNS

## Domain Name

- max 63 chars long per section
- www: subdomain, can be chained (abc.123.google.com), managed by owner of domain
- gogole: domain, authoritative name, managed by organizations
- com: TLD (top level domain) name, managed by ICANN
- www.google.com: fully qualified domain name (limited to 255 chars max)

## Domain Name System (DNS)

- distributed network service resolves domain name to IP addresses (name resolution)
- tracks updates to IP changes, resolve to servers based on geographic distance
- uses UDP primarily (connectionless, no overhead/handshake) due to amount of traffic generated in full name resolution (vs establishing/terminating TCP per step of name resolution)
- falls back to TCP if DNS lookup cant fit a single UDP datagram
- server uses port 53, client can be using any register port
- time to live (TTL) configured by the domain owner to set cache duration on DNS servers
- devices will also cache resolved domains to reduce traffic generated from full name resolution
- 5 types of DNS name servers, not mutually exclusive
  - caching: (LAN/ISP) caches known domain names until TTL expires
  - recursive: (LAN/ISP) performs full name resolution request
  - root: 13 authorities, keeps a list of TLD servers, uses anycast
  - TLD (top level domain): specific for each TLD (.ca), keeps a list of authoritative name servers
  - authoritative: resolves domain name on organizational level, responsibility of organization
- reverse DNS lookup: retrieves domain name based on IP

### Full Name Resolution Process

hierarchical and regulated to ensure correct/secure name resolution

1. recursive name server queries root name servers
1. root name server responds with matching TLD name server to contact
1. recursive name server queries TLD name servers
1. TLD name server responds with match authoritative name server to contact
1. recursive name server queries authoritative name servers
1. authoritative name server responds with IP

### Resource Record Types

DNS resource records are stored/served on authoritative name servers

- A record (required): domain name to IPv4
  - commonly one to man: domain to A record, can be can be many to many
  - allows for DNS level round robin load balancing between different A records (IPs)
- AAAA record (quad A): domain name to IPv6
- CNAME (canonical name): used to redirect traffic from one domain to another (your-website.com => some-cloud-hosting-uid.abc.com)
  - client performs another name resolution to redirected URL
  - simplifies multi domain name resolution, all points to one canonical IP address vs managing/updating multiple A records for each domain name
- MX record (mail exchange): directs/stores locations of email server
- SRV record (service): directs/stores locations of varies services
- TXT record (description): describes the domain for people to read, but also used to share configuration preferences
- PTR record (pointer): IP to fully qualified domain name, reverse DNS (www.google.ca)

### DNS Zone

- allows for easier control over multiple levels of domain (api.x.com, app.x.com, mail.x.com)
- one authoritative name server for main domain (www.x.com) and one for each sub domain
- zone files: config files listing resource records for the DNS zone
  - SOA record (start of authority): declares zone name and associated authoritative name servers for the zone
  - NS record: identifies other name servers also responsible for the same zone

## DHCP (Dynamic Host Configuration Protocol)

- application layer protocol, automates local network IP management
- composed of DHCP server(s) (router/dedicated server UDP port 67) and clients (network devices UDP port 68)
- assigns and manages pool of private IP address (track of assigned IPs and associated MAC addresses and lease/expiration time)
  - dynamic allocation: IP changes per connection
  - automatic allocation: prefers same IP when same device reconnects, tracks MAC
  - fixed allocation: manually specifies MAC and associated IP to assign
- DHCP Discovery Process (UDP):
  - DHCP Discover: clients (0.0.0.0:68) broadcasts to the whole network (255.255.255.255:67), intended for DHCP servers in LAN
  - DHCP Offer: DHCP server checks config, responds by broadcasting (255.255.255.255:68) with available IP and clients MAC
  - DHCP Request: client confirms an address (typically first offer received) and broadcasts it (255.255.255.255.67)
  - DHCP ACK (acknowledgement): DHCP server broadcasts (255.255.255.255:68) with IP address, subnet mask, default gateway, DNS server, expiration time (DHCP lease) and clients MAC
- DHCP leases can be renewed/released by clients when expired/disconnect from LAN

## NAT (Network Access Translation)

- technique for translating IP address (IP masquerading), varies between vendors
- gateways use NAT to change outbound IP packet's source IP (typically the gateways WAN interface IP), keeping track of original source and destination IP/port
- performs the reverse when forwarding responses, changes inbound IP packet's destination IP to the clients private IP by referring to data tracked previously
- one to many NAT: one public IP (WAN) to many private IPs (LAN)
- port preservation: gateway retains and uses the same port as the client's (ephemeral port for TCP connection) when carrying out NAT translations
  - client IP mapped to port, traffic directed to that port on the gateway is returned to the client
  - random port is chosen if conflict occurs
- port forwarding: a specific port on the gateway is reserved and configured to always forward WAN traffic for that port to the bound client with the same port

## VPN (Virtual Private Network)

- extends access to private LAN to hosts outside of the network over WAN, through a 'tunnel' to a VPN server in the private LAN
- application data carried in the transport layer (Layer 4) to the VPN server is actually an is encrypted IP packet (Layer 3) containing another set of IP, ports, and application data, it is decrypted then routed within the private LAN

## Proxy

- interface in-between, acting on behalf of a client to access another resource
- uses: content filtering, bypassing filters, logging, caching, encryption
- reverse proxy: single exposed server with many servers behind it (similar to routing to private networks)
  - load balance and TLS termination
