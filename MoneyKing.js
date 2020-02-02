const req = require('./req');

module.exports = cash => req('ipad')(req('usd')(cash), 8, ' ');
