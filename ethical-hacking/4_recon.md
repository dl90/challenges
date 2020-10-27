# Reconnaissance

![chart](https://github.com/dl90/challenges/blob/main/ethical-hacking/images/4_overview.png?raw=true)

* physical: location [aerial images, building layout]
* social: profile [job, web presence, pictures]

## Web / Host

1. target validation: [whois, nslookup, dnsrecon]
1. subdomains: [google, nmap ...]
1. fingerprinting: whats running on the site/host (services) [nmap, netcat ...]
1. data breaches: leaked creds [haveibeenpowned, [weleakinfo](https://weleakinfo.com/)]

## Domain search

[hunter.io](https://hunter.io/)

* first name / last name / departments
* gather a valid list of names and emails **and** build valid emails with pattern based on web presence
* allows password spraying
* [node api](https://www.npmjs.com/package/hunterio) / [doc](https://hunter.io/api-documentation/v2#introduction)

## Identifying subdomains

[Mozilla Observatory](https://observatory.mozilla.org/)

### subli3ter

searches for sub-domains

```bash
subli3ter -d domain.com
```

![img](https://github.com/dl90/challenges/blob/main/ethical-hacking/images/4_sublist3r.png?raw=true)

### [crt.sh](https://crt.sh/)

certificate fingerprinting (issued certificate history)

> %.domain.com

[result](https://crt.sh/?q=%25.bcit.ca)

### theHarvester

searches domain/name for any info from a variety of sources

needs api keys (api-keys.yaml) for some searches

```bash
theHarvester -h
```

![img](https://github.com/dl90/challenges/blob/main/ethical-hacking/images/4_theHarvester.png?raw=true)

### [OWASP Amass](https://github.com/OWASP/Amass/blob/master/doc/user_guide.md)

[tutorial](https://github.com/OWASP/Amass/blob/master/doc/tutorial.md)

![img](https://github.com/dl90/challenges/blob/main/ethical-hacking/images/4_amass.png?raw=true)

## Technology profiler

platforms, frameworks, services, CDN, CMS, libraries, etc

* [builtwith](https://builtwith.com/)

* [wappalyzer](https://www.wappalyzer.com/) (firefox extension)

* whatweb <url/ip>

* Burp Suite (intercepts traffic)
