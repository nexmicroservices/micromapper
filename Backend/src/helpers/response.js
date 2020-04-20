exports.sendCreated = function(res, data) {
  return res.status(201).send(data);
};

exports.sendBadRequest = function(res, message) {
  return res.status(400).send({
    code: 400,
    message: message
  });
};

exports.sendUnauthorized = function(res, message) {
  return res.status(401).send({
    code: 401,
    message: message
  });
};

exports.sendForbidden = function(res) {
  return res.status(403).send({ 
    code: 403,
    message: 'You do not have rights to access this resource.'
  });
};

exports.sendNotFound = function(res) {
  return res.status(404).send({
    code: 404,
    message: 'Resource not found.'
  });
};

exports.setHeadersForCORS = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Access-Token, Content-Type, Accept");
  next();
}
