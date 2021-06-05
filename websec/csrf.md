# CSRF: Cross site request forgery

* malicious site sends cross site request from the client to a site the client has a session with
* browser will send cookie automatically, giving the request legitimacy/authorization
* server can not distinguish source of request from the pages it served vs malicious requests

## Synchronizer token (stateful/session)

* server generates token, sends to client
* token should be sent through hidden form fields or custom headers
* token bound to session and is checked for all non safe http methods

## Double submit cookie (stateless)

* server generates token, sends to client as an encrypted cookie
* token value bound to request as hidden form field or custom header
* server checks request token value against cookie
