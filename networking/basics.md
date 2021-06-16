# Networking

## OSI (Open Systems Interconnection) model

1. physical: transfer of raw data (stream of bits) over wire
1. data link: node to node data transfer, identifies access through MAC address (within private network)
1. network: identifies path for cross network data transfer (routing and traffic control)
1. transport: chucking and packaging data for transfer, manages transmission speed and handles transport errors
1. session: setup, exchange, identify, scope and teardown of connections between devices
1. presentation: character encoding, encryption and compression
1. application: application API requests

### Device Level Process

- Inbound:
  - Layer 2: receives frame, filters/verifies MAC and caches return MAC, checks and discards any errors, peels MAC from frame and passes IP packet
  - Layer 3: receives packet, verifies IP and caches return IP, checks for errors, peels IP from packet and passes segment
  - Layer 4: receives segment, assemble and verifies data, addresses any errors/missing data, peels off sequencing info for assembling data and passes data to port
  - Layer 5-7: receives data, caches return port, consumes data
- Outbound:
  - Layer 5-7: generates and forwards data and destination port
  - Layer 4: chucks data to build segment, attaches source and destination ports
  - Layer 3: builds packet, attaches source and destination IP
  - Layer 2: builds frame, attaches source and destination MAC

## MAC (Media Access Control)

- 48 bit physical address, octet, 6 pairs of hex (hardware and network adapters)
- first 24 bit identifies vendor (Organizationally Unique Identifier)
- typically do not change (but can be changed depending on device)
- used to identify, filter/whitelist devices

## Layer 2 Ethernet Frame

```text
| preamble | Start frame delimiter | dest MAC | source MAC | (VLAN header)/ethertype |   payload  | frame check sequence (CRC) |
| 7 bytes  |       1 byte          |  6 bytes |  6 bytes   |        6 bytes          | 1500 bytes |         4 bytes            |
```

## Terms

- Switch: layer 2, LAN, inspects frame and directs it to a connected device with matching MAC
- Router: layer 3, bridges WAN and LAN, inspects IP in packet for destination, forwards to ISP
  - ISP core routers contain detailed table of all networks on the web (using Border Gateway Protocol)
- Duplex: _full_, unrestricted bidirectional, _half_, one at a time, Simplex: unidirectional
- RJ45: ethernet cable connectors, 4 pairs of twisted pair wires, Cat 5/Cat 6
- Broadcast: sends frame to all local network devices (MAC: FF:FF:FF:FF:FF:FF)
- Multicast: sends frame to a group of local network devices (MAC: .odd:..:..:..)
- Unicast: sends frame to one local network device (MAC: .even:..:..:..)
- Cyclical Redundancy Check (CRC): ensures data integrity on layer 2

## DHCP (Dynamic Host Configuration Protocol)

- automates local network IP management
- dynamically assigns and manages IP address (track of assigned IPs and associated MAC addresses and lease/expiration time)
- composed of DHCP server(s) (router/dedicated server) and clients (network devices)
- DHCP Discover: clients IP request is broadcast to the whole network (255.255.255.255), targeting the DHCP servers
- DHCP Offer: DHCP server responds with available IP addresses
- DHCP Request: client confirms (typically first offer received) and sends the address to the DHCP server
- DHCP ACK (acknowledgement): DHCP server sends IP addr, subnet mask, default gateway, DNS server
