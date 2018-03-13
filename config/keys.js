// keys.js -- figure out which set of credentials to run
if (process.env.NODE_ENV === 'production') {
  // return prod set of keys
  module.exports = require('./prod');
} else {
  // return development set of keys
  module.exports = require('./dev');
}