
module.exports = (aliases) => {

  function find (alias, options) {
    var config = aliases[alias]
    var endpoints = config.endpoints

    if (!endpoints || (!endpoints.all && !endpoints.str && !endpoints.regex)) {
      return config.auth
    }

    var auth = {}
    var endpoint = options.url

    // all
    if (endpoints.all) {
      var __endpoint = endpoints.all.__endpoint
      if (__endpoint && __endpoint.auth) {
        auth = __endpoint.auth
      }
    }

    // string
    if (endpoints.str && endpoints.str[endpoint]) {
      var __endpoint = endpoints.str[endpoint].__endpoint
      if (__endpoint && __endpoint.auth) {
        auth = __endpoint.auth
      }
    }

    // regex
    if (endpoints.regex) {
      for (var key in endpoints.regex) {
        if (new RegExp(key).test(endpoint)) {
          var __endpoint = endpoints.regex[key].__endpoint
          if (__endpoint && __endpoint.auth) {
            auth = __endpoint.auth
            break
          }
        }
      }
    }

    return Object.keys(auth).length ? auth : config.auth
  }

  function replace (config, arg1, arg2) {
    if (config instanceof Array) {
      config = (arg1 !== undefined && arg2 !== undefined)
        ? config[1]
        : config[0]
    }

    var auth = {}

    Object.keys(config).forEach((key) => {
      auth[key] = {}
      Object.keys(config[key]).forEach((sub) => {
        var value = config[key][sub]
        if (value.indexOf('[0]') !== -1) {
          auth[key][sub] = value.replace('[0]', arg1)
        }
        else if (value.indexOf('[1]') !== -1) {
          auth[key][sub] = value.replace('[1]', arg2)
        }
      })
    })

    return auth
  }

  return {find, replace}
}
