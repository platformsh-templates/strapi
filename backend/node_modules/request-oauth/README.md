
# request-oauth

[![npm-version]][npm] [![travis-ci]][travis] [![coveralls-status]][coveralls]

[OAuth] support for [request-compose]

```js
var compose = require('request-compose')
compose.Request.oauth = require('request-oauth')
var request = compose.client

;(async () => {
  try {
    var {body} = await request({
      url: 'https://api.twitter.com/1.1/users/show.json',
      qs: {
        screen_name: '[SCREEN NAME]'
      },
      oauth: {
        consumer_key: '[APP ID]',
        consumer_secret: '[APP SECRET]',
        token: '[ACCESS TOKEN]',
        token_secret: '[ACCESS SECRET]',
      }
    })
    console.log(body)
  }
  catch (err) {
    console.error(err)
  }
})()
```

# Table of Contents

- [OAuth Options](#)
- [**Examples**][examples]


# OAuth Options

###### Required

- **consumer_key** OAuth application key
- **consumer_secret** OAuth application secret
- **private_key** in [PEM format][pem-format], set this key instead of `consumer_secret` when using `RSA-SHA1` signing
- **token** user's access token
- **token_secret** user's token secret

###### Defaults

- **version** **`1.0`**
- **signature_method** **`HMAC-SHA1`** | `RSA-SHA1` | `PLAINTEXT`
- **transport_method** [type][transport-method] **`header`** | `query` | `form`

###### Generated

- **timestamp**
- **nonce**
- **signature**

###### Optional

- **realm**
- **body_hash** pass you own [Body Hash][body-hash] as string or pass `true` to get one generated for you

---

## Internal API

###### Required

- **oauth** `{}` see [OAuth Options](#oauth-options)
- **uri** `url.parse()`'d object
- **method** `GET` | `POST` ..

###### Optional

- **query** `a=1&b=2`
- **form** `a=1&b=2`
- **body** `{a:1,b:2}`

## Result

###### Error

```js
var result = oauth(options)
if (result instanceof Error) {
  // handle error
}
```

###### Success

```js
var result = oauth(options)

var transport = options.oauth.transport_method || 'header'
if (transport === 'header') {
  req.headers['authorization'] = result
}
else if (transport === 'query') {
  // append result to your querystring
}
else if (transport === 'body') {
  // append result to your form body
}
```


  [npm-version]: https://img.shields.io/npm/v/request-oauth.svg?style=flat-square (NPM Package Version)
  [travis-ci]: https://img.shields.io/travis/simov/request-oauth/master.svg?style=flat-square (Build Status - Travis CI)
  [coveralls-status]: https://img.shields.io/coveralls/simov/request-oauth.svg?style=flat-square (Test Coverage - Coveralls)
  [codecov-status]: https://img.shields.io/codecov/c/github/simov/request-oauth.svg?style=flat-square (Test Coverage - Codecov)

  [npm]: https://www.npmjs.com/package/request-oauth
  [travis]: https://travis-ci.org/simov/request-oauth
  [coveralls]: https://coveralls.io/github/simov/request-oauth
  [codecov]: https://codecov.io/github/simov/request-oauth?branch=master

  [oauth]: https://oauth.net/core/1.0/
  [pem-format]: http://how2ssl.com/articles/working_with_pem_files/
  [body-hash]: https://oauth.googlecode.com/svn/spec/ext/body_hash/1.0/oauth-bodyhash.html
  [transport-method]: http://oauth.net/core/1.0/#consumer_req_param

  [request-compose]: https://www.npmjs.com/package/request-compose
  [examples]: https://github.com/simov/request-compose#examples
