const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets");

function toJWT(data) {
  console.log(`secret`, jwtSecret);
  return jwt.sign(data, jwtSecret, { expiresIn: "2h" });
}

function toData(token) {
  console.log(`tooooooooken djbfhsdjkfhjfkhjksdf`, token);
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };
