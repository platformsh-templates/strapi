
var init = require('./lib/init')
var endpoint = require('./lib/endpoint')
var url = require('./lib/url')


module.exports = (ctor, provider) => {
  var aliases = init.aliases(provider)

  return {
    endpoint: endpoint(aliases),
    url: url(ctor, aliases),
    aliases
  }
}
