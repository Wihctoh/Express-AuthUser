const jwt = require('jsonwebtoken');

function createToken(user) {
  const secret = '1234';
  const payload = { id: user[0].id, email: user[0].email };

  return jwt.sign(payload, secret);
}

module.exports = createToken;
