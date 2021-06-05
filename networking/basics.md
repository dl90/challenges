# Networking

## OSI (Open Systems Interconnection) model

1. application: application API requests
1. presentation: character encoding, encryption and compression
1. session: open and close connection between devices
1. transport: chucking and packaging data for transfer, manages transmission speed and handles transport errors
1. network: identifies path for cross network data transfer (routing and traffic control)
1. data link: node to node data transfer, identifies access through MAC address (within private network)
1. physical: transfer of raw data (stream of bits) over wire

## MAC (Media Access Control)

- 48 bit physical address (hardware and network adapters)
- first 24 bit identifies vendor
- typically do not change (but can be changed)
- used to identify, filter/whitelist devices

## DHCP (Dynamic Host Configuration Protocol)

- automates local network IP management
- dynamically assigns and manages IP address (track of assigned IPs and associated MAC addresses and lease/expiration time)
- composed of DHCP server(s) (router/dedicated server) and clients (network devices)
- DHCP Discover: clients IP request is broadcast to the whole network (255.255.255.255), targeting the DHCP servers
- DHCP Offer: DHCP server responds with available IP addresses
- DHCP Request: client confirms (typically first offer received) and sends the address to the DHCP server
- DHCP ACK (acknowledgement): DHCP server sends IP addr, subnet mask, default gateway, DNS server
