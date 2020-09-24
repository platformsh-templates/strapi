
# Common Interface for HTTP Clients

A module conforming to this specification is:

1. A function that expects the common options object outlined in this specification
2. A function that initiates the actual HTTP request while consuming the options outlined in this specification

```js
module.exports = (options) => {
  // do something with options
  // and make the actual HTTP request
}
```

Given the above module definition, a client application can use it like this:

```js
var request = require('my-http-client')
// make request
request({
  // any common option defined in this specification
})
```


## HTTP Client Wrappers

```js
var http = require('http')

module.exports = (options) => {
  // do something with the common interface options
  var resultOptions = {}
  // implement various HTTP features
  return http.request(resultOptions)
}
```

---

```js
var request = require('request')

module.exports = (options) => {
  // do something with the common interface options
  var resultOptions = {}
  // implement various HTTP features
  return request(resultOptions)
}
```

---

```js
// use the native fetch API in the browser

module.exports = (options) => {
  // do something with the common interface options
  var resultOptions = {}
  // implement various HTTP features
  return fetch(new Request(url, resultOptions))
}
```

Either way the client application should be able to make requests in a consistent way:

```js
var request = require('my-http-client')
// make request
request({
  // any common option defined in this specification
})
```


## Optional Dependencies

A module conforming to this specification while having optional dependencies may look like this:

```js
module.exports = (deps) => (options) => {
  var resultOptions = {}
  if (options.oauth) {
    resultOptions.oauth = deps.oauth(options.oauth)
  }
  return request(resultOptions)
}
```

Given the above module definition, a client application can use it like this:

```js
var request = require('my-http-client')({
  oauth: require('my-oauth-implementation')
})
// make request
request({
  // any common option defined in this specification
})
```


## Bundled Dependencies

A module conforming to this specification while having *hardcoded* dependencies may look like this:

```js
module.exports = require('my-http-client')({
  oauth: require('my-oauth-implementation')
})
```

Given the above module definition, a client application can use it like this:

```js
var request = require('my-http-client')
// make request
request({
  // any common option defined in this specification
})
```


## Basic API

A module using the common [@request/api][request-api] may look like this:

```js
var request = require('my-http-client')
var api = require('@request/api')

module.exports = api({
  type: 'basic',
  request: request
})
```

Given the above module definition, a client application can use it like this:

```js
var request = require('my-http-client')
// make request
request('url', {options}, (err, res, body) => {})
// or
request.[HTTP_VERB]('url', {options}, (err, res, bdoy) => {})
// + any combination of the above arguments
```


## Chain API

A module using the common [@request/api][request-api] may look like this:

```js
var request = require('my-http-client')
var api = require('@request/api')

module.exports = api({
  type: 'chain',
  config: {
    method: {
      get: [],
      // ...
    },
    option: {
      qs: [],
      // ...
    },
    custom: {
      submit: [],
      // ...
    }
  },
  define: {
    submit: function (callback) {
      if (callback) {
        this._options.callback = callback
      }
      return request(this._options)
    }
  }
})
```

Given the above module definition, a client application can use it like this:

```js
var request = require('my-http-client')
// make request
request
  .get('url')
  .qs({a: 1})
  .submit((err, res, body) => {})
```


## Promises

A module utilizing Promises may look like this:

```js
module.exports = (deps) => (options) => {
  var request = deps.request

  if (deps.promise) {
    var Promise = deps.promise
    var promise = new Promise((resolve, reject) => {
      options.callback = (err, res, body) => {
        if (err) {
          reject(err)
        }
        else {
          resolve([res, body])
        }
      }
    })
    request(options)
    return promise
  }
  else {
    return request(options)
  }
}
```

Given the above module definition, a client application can use it like this:

```js
var request = require('my-http-client')({
  request: require('request'),
  promise: Promise
})
// or
var request = require('my-http-client')({
  request: require('request'),
  promise: require('bluebird')
})
// make request
request({options})
  .catch((err) => {})
  .then((result) => {})
```

Promises can be combined with the [@request/api][request-api].


# Interface

option    | type
:---      | :---
method    | `String`
**URL**   |
url/uri   | `String`, `Object`
qs        | `Object`, `String`
**Body**  |
form      | `Object`, `String`
json      | `Object`, `String`
body      | `Stream`, `Buffer`, `Array`, `String`
multipart | `Object`, `Array`
**Authentication** |
auth      | `Object`
 | basic, oauth, hawk, httpSignature, aws
**Modifiers** |
gzip      | `Boolean`, `String`
encoding  | `Boolean`, `String`
stringify | `Object`
parse     | `Object`
**Proxy** |
proxy     | `String`, `Object`
tunnel    | `Boolean`
**Misc**  |
headers   | `Object`
cookie    | `Boolean`, `Object`
length    | `Boolean`
callback  | `Function`
redirect  | `Boolean`, `Object`
timeout   | `Number`
har       | `Object`
end       | `Boolean`


---


## Method

### method `String`


---


## URL

### url/uri `String` | `Object`
  - `String`
  - `url.Url`

### qs `Object` | `String`
  - `Object`
  - `String`


---


## Body

### form `Object` | `String`
  - `Object`
  - `String` pass URL encoded string if you want it to be RFC3986 encoded prior sending

### json `Object` | `String`
  - `Object`
  - `String`

### body `String` | `Buffer` | `Array` | `Stream`
  - `Stream`
  - `Buffer`
  - `String`
  - `Array`

### multipart `Object` | `Array`

- `Object` for `multipart/form-data`
- `Array` for any other `multipart/[TYPE]`, defaults to `multipart/related`

Each item's body can be either: `Stream`, `Request`, `Buffer` or `String`.

- `_multipart`
  - `data` - the above
Additionally you can set `preambleCRLF` and/or `postambleCRLF` to `true`.


---


## Authentication

### auth `Object`
  - `basic`
    - `{user: '', pass: '', sendImmediately: false, digest: true}`
      - Sets the `Authorization: Basic ...` header.
      - The `sendImmediately` option default to `true` if omitted.
      - The `sendImmediately: false` options requires the [redirect option][redirect-option] to be enabled.
      - Digest authentication requires the [@request/digest][request-digest] module.

  - `bearer`
    - `{token: '', sendImmediately: false}`
      - Alternatively the `Authorization: Bearer ...` header can be set if using the `bearer` option.
      - The rules for the `sendImmediately` option from above applies here.

  - `oauth`

  - `hawk`

  - `httpSignature`

  - `aws`


---


## Modifiers

### gzip `Boolean` | `String`
- `true`
  - Pipes the response body to [zlib][zlib] Inflate or Gunzip stream based on the compression method specified in the `content-encoding` response header.
- `'gzip'` | `'deflate'`
  - Explicitly specify decompression method to use.

### encoding `Boolean` | `String`
- `true`
  - Pipes the response body to [iconv-lite][iconv-lite] stream, defaults to `utf8`.
- `'ISO-8859-1'` | `'win1251'` | ...
  - Specific encoding to use.
- `'binary'`
  - Set `encoding` to `'binary'` when expecting binary response.

### parse `Object`
  - `{json: true}`
    - sets the `accept: application/json` header for the request
    - parses `JSON` or `JSONP` response bodies *(only if the server responds with the approprite headers)*
  - `{json: function () {}}`
    - same as above but additionally passes a user defined reviver function to the `JSON.parse` method
  - `{qs: {sep:';', eq:':'}}`
    - [qs.parse()][qs] options to use
  - `{querystring: {sep:';', eq:':', options: {}}}` use the [querystring][querystring] module instead
    - [querystring.parse()][querystring] options to use

### stringify `Object`
  - `{qs: {sep:';', eq:':'}}`
    - [qs.stringify()][qs] options to use
  - `{querystring: {sep:';', eq:':', options: {}}}` use the [querystring][querystring] module instead
    - [querystring.stringify()][querystring] options to use


---


## Proxy

### proxy `String` | `Object`

```js
{
  proxy: 'http://localhost:6767'
  //
  proxy: url.parse('http://localhost:6767')
  //
  proxy: {
    url: 'http://localhost:6767',
    headers: {
      allow: ['header-name'],
      exclusive: ['header-name']
    }
  }
}
```

### tunnel `Boolean`
  - `true`


---


## Misc

### headers `Object`


### cookie `Boolean` | `Object`
  - `true`
  - `new require('tough-cookie).CookieJar(store, options)`


### length `Boolean`
  - `true` defaults to `false` if omitted


### callback `Function`
  - `function (err, res, body) {}` buffers the response body
    - by default the response buffer is decoded into string using `utf8`.
    Set the `encoding` property to `binary` if you expect binary data, or any other specific encoding.


### redirect `Boolean` | `Object`
  - `true`
    - follow redirects for `GET`, `HEAD`, `OPTIONS` and `TRACE` requests
  - `Object`
    - *all* - follow all redirects
    - *max* - maximum redirects allowed
    - *removeReferer* - remove the `referer` header on redirect
    - *allow* - `function (res)` user defined function to check if the redirect should be allowed


### timeout `Number`
  - integer indicating the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request. Note that if the underlying TCP connection cannot be established, the OS-wide TCP connection timeout will overrule the timeout option


### har `Object`


### end `Boolean`
  - `true`
    - tries to automatically end the request on `nextTick`


---


  [request-api]: https://github.com/request/api
  [qs]: https://www.npmjs.com/package/qs
  [querystring]: https://nodejs.org/dist/latest-v6.x/docs/api/querystring.html



  [request]: https://github.com/request/request
  [request-contributors]: https://github.com/request/request/graphs/contributors
  [zlib]: https://iojs.org/api/zlib.html
  [node-http-request]: https://nodejs.org/api/http.html#http_http_request_options_callback

  [tough-cookie]: https://github.com/SalesforceEng/tough-cookie
  [iconv-lite]: https://www.npmjs.com/package/iconv-lite
  [hawk]: https://github.com/hueniverse/hawk
  [aws-sign2]: https://github.com/request/aws-sign
  [http-signature]: https://github.com/joyent/node-http-signature
  [tunnel-agent]: https://github.com/mikeal/tunnel-agent

  [request-core]: https://github.com/request/core
  [request-headers]: https://github.com/request/headers
  [request-digest]: https://github.com/request/digest
  [request-oauth]: https://github.com/request/oauth
  [request-multipart]: https://github.com/request/multipart
  [request-log]: https://github.com/request/log

  [redirect-option]: #redirect
