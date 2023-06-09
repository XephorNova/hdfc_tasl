const jwt = require("jsonwebtoken");
const config = require("../config/config");

const tokenGenerator = (email, user_id) => {
  var token = jwt.sign({ email, user_id }, config.secret, {
    expiresIn: 86400, // expires in 24 hours
  });
  return token;
};

const verifyToken = (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    } else {
      req.auth = decoded;
      next();
    }
  });
};

module.exports = {
  tokenGenerator,
  verifyToken,
};
