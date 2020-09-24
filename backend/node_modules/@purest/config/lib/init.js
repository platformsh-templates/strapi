
function initAlias (provider, domain, path) {
  var alias = {domain: domain, path: path}

  var __domain = provider[domain].__domain || {}
  var __path = provider[domain][path].__path || {}

  if (__domain.subdomain) {
    alias.subdomain = __domain.subdomain
  }
  if (__domain.auth) {
    alias.auth = __domain.auth
  }

  if (__path.subdomain) {
    alias.subdomain = __path.subdomain
  }
  if (__path.subpath) {
    alias.subpath = __path.subpath
  }
  if (__path.version) {
    alias.version = __path.version
  }
  if (__path.type) {
    alias.type = __path.type
  }
  if (__path.endpoint) {
    alias.endpoint = __path.endpoint
  }
  if (__path.auth) {
    alias.auth = __path.auth
  }

  return alias
}

function initEndpoints (provider, domain, path) {
  var result = {all: {}, str: {}, regex: {}}

  var endpoints = provider[domain][path]

  for (var key in endpoints) {
    if (key === '__path') {
      continue
    }

    if (key === '*') {
      result.all = endpoints[key]
    }
    else if (endpoints[key].__endpoint && endpoints[key].__endpoint.regex) {
      result.regex[key] = endpoints[key]
    }
    else {
      result.str[key] = endpoints[key]
    }
  }

  if (!Object.keys(result.all).length) {
    delete result.all
  }
  if (!Object.keys(result.str).length) {
    delete result.str
  }
  if (!Object.keys(result.regex).length) {
    delete result.regex
  }

  if (Object.keys(result).length) {
    return result
  }
}

function initAliases (provider) {
  var aliases = {}

  for (var domain in provider) {
    if (domain === '__provider') {
      continue
    }

    for (var path in provider[domain]) {
      if (path === '__domain') {
        continue
      }

      var __path = provider[domain][path].__path

      if (!__path) {
        throw new Error('Purest: __path key is required!')
      }
      if (!__path.alias) {
        throw new Error('Purest: __path.alias key is required!')
      }

      var alias = __path.alias
      alias = (alias instanceof Array) ? alias : [alias]

      alias.forEach((name) => {
        var result = initAlias(provider, domain, path)
        var endpoints = initEndpoints(provider, domain, path)
        if (endpoints) {
          result.endpoints = endpoints
        }
        aliases[name] = result
      })
    }
  }

  if (Object.keys(aliases).length) {
    return aliases
  }
}

exports.alias = initAlias
exports.endpoints = initEndpoints
exports.aliases = initAliases
