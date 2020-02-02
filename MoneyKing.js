const { req, ipad, usd } = require('./modules');

module.exports = cash => ipad(usd(cash), 8, ' ');
