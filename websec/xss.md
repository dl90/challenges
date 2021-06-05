# XSS: Cross site scripting

* injection/execution of foreign javascript on to the clients browser
* browser trusts injected script believing it's part of the hosts response, bypasses same-origin policy
* gives access to non httpOnly cookies, session/local storage, DOM
* can use httpOnly cookies as part of malicious requests
* redirect page, manipulate DOM, inject iframe

## types

* stored/persistent: user input stored directly (db) and is retrieved and used as part of the page render (client or server side)
* reflected/non-persistent:
  * input or query used directly in current or subsequent page render
  * query strings used as part of page render can be used to built malicious links, tricking users to execute code when clicked
* DOM: event takes place in the DOM, payload is injected into and executed within the client's DOM

---

* _server XSS_: response includes unescaped user input and is used as part of the page render
* _client XSS_: unescaped user input is used to update the DOM using unsafe JavaScript/browser API
