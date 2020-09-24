
module.exports = (ctor, aliases) => {

  function domain (alias, options) {
    var config = aliases[alias]

    var subdomain =
      (options.subdomain || ctor.subdomain || config.subdomain)

    return (subdomain !== undefined)
      ? config.domain.replace('[subdomain]', subdomain)
      : config.domain
  }

  function path (alias, options) {
    var config = aliases[alias]
    var path = config.path
    var value

    value = (options.subpath || ctor.subpath || config.subpath)
    if (value !== undefined) {
      path = path.replace('[subpath]', value)
    }

    value = (options.version || ctor.version || config.version)
    if (value !== undefined) {
      path = path.replace('[version]', value)
    }

    value = (options.type || ctor.type || config.type || 'json')
    path = path.replace('[type]', value)

    value = (options.url || config.endpoint || '')
    path = path.replace('{endpoint}', value)

    return path
  }

  function url (alias, options) {
    return [
      domain(alias, options),
      path(alias, options)
    ].join('/')
  }

  url.domain = domain
  url.path = path
  return url
}
