# Transport Layer

- multiplexing: combining signals to data stream, to traverse one medium
- demultiplexing: separate individual signals from data stream
- transport layer handles multiplexing/demultiplexing through ports
- Connection oriented (TCP): ensures data delivery but generates more traffic/larger overhead
- Connectionless (UDP): unreliable, no data sequencing, realtime, ideal for broadcast/multicast

## Layer 4 TCP Segment

- IP packet (Layer 3) encapsulates TCP segment (Layer 4)
- TCP segment's payload is application data
- TCP header size: 20 bytes

### TCP Segment Header Fields (IPv4)

- source and destination ports, source port is ephemeral
- sequence number: 32 bit number, tracks order of chucked data sent
- acknowledgement number: 32 bit number, identifies next expected sequence number
- flags: instructs the receiver to examine specific parts of the header or perform an action
- window size: specifies range of sequence numbers the receiver can accept without acknowledgement
- checksum: 16 bit verifies validity of whole segment, including data

### Three Way Handshake (open)

1. A sends a TCP segment to B with SYN flag, identifies first segment
1. B replies to A with SYN and ACK flag, indicates B acknowledges the sequence number
1. A replies to B with ACK flag, acknowledging B's reply and establishes connection

### Transmission

- if the sender does not receive an acknowledgement for the packet sent, it will pause, wait, and retransmit
- this ensures ensures expected data is actually received

### Four Way Handshake (close)

1. A sends a TCP segment to B with FIN flag
1. B replies to A with ACK
1. When B is ready to close connection, B sends a TCP segment to A with FIN flag
1. A replies to B with ACK, closing the connection

### TCP Socket

- endpoint instantiated to receive and respond TCP connections, identified by IP and Port
- socket states identifies the servers/clients socket connection status

## Ports

- identifies a network service (network socket) and protocol (TCP/UDP/..., all or some), 16 bit, 2^16 - 1 unique ports
- 1 ~ 1023: system/well known ports, requires admin access
- 1024 ~ 49151: registered ports for applications
- 49152 ~ 65535: private ephemeral ports, used to establish outbound traffic (source port)

## Firewall

- blocks traffic from entering/accessing network
- can be based on IP (Layer 3), port (Layer 4), application (Layer 4+)
- specific rules ie LAN, WAN, subnet access

## Network Layer Process

```text
  home router                     ISP network                        Internet exchange/Internet Backbone
WAN 201:23:45:67 ------------ node ----------- node ---------------- core routers (NA) ---- core router (Asia)
LAN  10.1.1.1            201:23:45:0/24    201:23:0:0/16             206.81.80.237          58.138.88.129
Network 10.1.1.0/24                                                                                |
        |                                                                                          |
home computer A                                                                        corporate hosting provider
  10.1.1.20                                                                                   203.141.47.242
                                                                                                   |
                                                                                               web server
                                                                                            202.93.95.234:443

1. A wants to connect to 202.93.95.234:443, sees address is not in LAN, hits gateway (10.1.1.1)
  - A resolves gateway MAC addr with its ARP table
  - A designates ephemeral port 49555 for the TCP connection, builds TCP segment with ports and SYN flag to initiate handshake (layer 4)
  - TCP segment is encapsulated in IP packet, with destination 202.93.95.234 (layer 3)
  - IP packet is encapsulated in ethernet frame, with gateway MAC as destination MAC (layer 2)
  - ethernet frame sent to router through cat-6 (layer 1)

2. home router receives ethernet frame
  - sees the MAC address is for it, verifies CRC, retrieves payload/IP packet
  - router inspects packet checksum and destination IP, look up its routing table, defaults to the ISP's gateway (node), resolves the nodes MAC with its ARP table
  - router updates IP packet sources IP with its own IP 201:23:45:67 (NAT), decrements TTL and updates checksum
  - router builds ethernet frame with ISP node gateway MAC as destination and sends it

3. router hops repeat until frame reaches web sever (or TTL reaches 0)

4. web server receives ethernet frame, destination MAC address matches, verifies CRC, retrieves IP packet
  - server verifies IP packet checksum and destination IP, retrieves TCP segment
  - server verifies TCP segment, destination port status (443), sees SYN flag and notes the acknowledgment number
  - server builds new TCP segment with SYN-ACK flag with destination port 49555 to proceed with handshake
  - TCP segment is encapsulated in IP packet, with destination 201:23:45:67 (home router)
  - IP packet is encapsulated in ethernet frame with the relaying routers MAC address as destination MAC (203.141.47.242)
  - ethernet frame hops between routers and reaches home router
  - home router uses NAT to forward ethernet frame to A in its private network
  - computer A processes the frame and continues with the handshake
```
