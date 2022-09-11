const path = require('path')
const _require = require('esm')(module)

const CHAIN = Symbol('alvey.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.alveyinfo.lib.Chain.get(this.config.alvey.chain)
    return this[CHAIN]
  },
  get alveyinfo() {
    return {
      lib: _require(path.resolve(this.config.alveyinfo.path, 'packages', 'alveyinfo-lib')),
      rpc: _require(path.resolve(this.config.alveyinfo.path, 'packages', 'alveyinfo-rpc')).default
    }
  }
}
