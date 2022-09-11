const path = require('path')
const _require = require('esm')(module)

module.exports = {
  get alveyinfo() {
    return {
      lib: _require(path.resolve(this.config.alveyinfo.path, 'packages', 'alveyinfo-lib')),
      rpc: _require(path.resolve(this.config.alveyinfo.path, 'packages', 'alveyinfo-rpc')).default
    }
  }
}
