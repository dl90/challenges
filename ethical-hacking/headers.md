# Headers

## CSP

prevent cross site scripting by specifying which resources are allowed to load: [CSP](https://content-security-policy.com/)

```text
Content-Security-Policy:
  default-src 'self';                   # Default to only allow content from the current site
  img-src 'self' https://i.imgur.com;   # Allow images from current site and imgur.com
  object-src 'none';                    # Don't allow objects such as Flash and Java
  script-src 'self';                    # Only allow scripts from the current site
  style-src 'self';                     # Only allow styles from the current site
  frame-ancestors 'self';               # Only allow frames from the current site
  base-uri 'self';                      # Restrict URL's in the <base> tag to current site
  form-action 'self';                   # Allow forms to submit only to the current site
```

## Strict-Transport-Security

tells the browser that the site should only be accessed via HTTPS

```text
Strict-Transport-Security: max-age=3600; includeSubDomains
```

## X-Content-Type-Options

ensures that the MIME types set by the application are respected by browsers

```text
X-Content-Type-Options: nosniff
```

## Cache-Control

Any page with sensitive data, such as a user page or a customer checkout page, should be set to no-cache.
However, pages that change rarely, such as static assets (images, CSS files, and JS files), are good to cache.

```text
# Don’t cache by default
Header set Cache-Control no-cache

# Cache static assets for 1 day
<filesMatch ".(css|jpg|jpeg|png|gif|js|ico)$">
    Header set Cache-Control "max-age=86400, public"
</filesMatch>
```

## Expires

This sets the time the cache should expire the current request. It is ignored if the Cache-Control max-age header is set

```text
Expires: 0
```

## X-Frame-Options

This header indicates whether the site should be allowed to be displayed within an iFrame.

if a malicious site puts your website within an iFrame, the malicious site is able to perform a click jacking attack by running some JavaScript that will capture mouse clicks on the iFrame and then interact with the site on the users behalf (not necessarily clicking where they think they clicked!).

This should always be set to deny unless you are specifically using frames, in which case it should be set to same-origin. If you are using Frames with another site by design, you can white list the other domain here as well.

```text
X-Frame-Options: deny
```

## Access-Control-Allow-Origin

Tell the browser which other sites' front end JavaScript code may make requests of the page in question.

eg: SiteA serves up some JavaScript which wants to make a request to siteB, then siteB must serve the response with the header specifying that SiteA is allowed to make this request.

```text
Access-Control-Allow-Origin: *                                # allow code from any origin to access a resource
Access-Control-Allow-Origin: https://developer.mozilla.org    # allow requesting code from the origin https://developer.mozilla.org to access a resource
```

## Set-Cookie

cookies are sent via HTTPS (encrypted) only, and that they are not accessible via JavaScript.

```text
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## X-XSS-Protection

instructs browsers to halt execution of detected cross site scripting attacks.

```text
X-XSS-Protection: 1; mode=block
```
