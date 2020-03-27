import response from '../helpers/response';

exports.list = function(req, res) {
  res.json("{'method':'list'}");
};

exports.read = function(req, res) {
  if (isNaN(req.params.id)) return response.sendBadRequest(res, "Parameter 'id' should be a number");

  res.json({'method':'read', 'id': req.params.id });
};

exports.create = function(req, res) {
  console.log("New service created.");
  res.json({'method':'create'});
};

exports.update = function(req, res) {
  if (isNaN(req.params.id)) return response.sendBadRequest(res, "Parameter 'id' should be a number");

  console.log("Service updated.");
  res.json({'method':'update', 'id': req.params.id });
};

exports.delete = function(req, res) {
  if (isNaN(req.params.id)) return response.sendBadRequest(res, "Parameter 'id' should be a number");
    
  console.log("Service deleted.");
  res.json({'method':'delete', 'id': req.params.id });
};
