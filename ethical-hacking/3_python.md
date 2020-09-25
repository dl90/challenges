# Python review

```txt
#! /bin/python3
```

./file.py => python3 file.py

---

## sockets

```python3
import socket
HOST = "192.168.0.1"
PORT = 8888

# AF_INET: ipv4, SOCK_STREAM: port
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))

```

```bash
# netcat
nc -ndlp 8888
```

## naive port scanner

```python3
import sys
import socket
from datetime import datetime

# target (1st arg)
if len(sys.argv) == 2:
    target = socket.gethostbyname(sys.argv[1])

    print("-" * 40)
    print(f" target: {target} \n time: {str(datetime.now())}")
    print("-" * 40)

    try:
        for port in range(50, 85):  # 1 65535
            print(f"scanning port: {port}")
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            socket.setdefaulttimeout(1)
            # returns int (error indicator) 0: open 1: closed
            result = s.connect_ex((target, port))
            if result == 0:
                print(f"\t => open port: {port}")
            s.close()
    except KeyboardInterrupt:
        print("\nexiting")
        sys.exit()
    except socket.gaierror:
        print(f"unresolved hostname {sys.argv[1]}")
        sys.exit()
    except socket.error:
        print(f"unable to connect to {sys.argv[1]}")
        sys.exit()

else:
    print(f"expect: python3 name.py <ip>. got: {sys.argv[1:]}")

```
