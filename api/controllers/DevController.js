'use strict';


var mongoose = require('mongoose'),
  Dev = mongoose.model('Devs');

exports.list_all_devs = function(req, res) {
  Dev.find({}, function(err, dev) {
    if (err)
      res.send(err);
    res.json(dev);
  });
};


exports.create_a_dev = function(req, res) {
  var new_dev = new Dev(req.body);{
    name:req.body.name;
    phone: req.body.phone;
    address: req.body.address;
  }
  new_dev.save((err, dev) => {
    if (err)
      res.send(err);
    res.json(dev);
  });
};


exports.read_a_dev = function(req, res) {
  Dev.findById(req.params.DevId, function(err, dev) {
    if (err)
      res.send(err);
    res.json(dev);
  });
};


exports.update_a_dev = function(req, res) {
  Dev.findOneAndUpdate({_id: req.params.DevId}, req.body, {new: true}, function(err, dev) {
    if (err)
      res.send(err);
    res.json(dev);
  });
};


exports.delete_a_dev = function(req, res) {
  Dev.remove({
    _id: req.params.DevId
  }, function(err, dev) {
    if (err)
      res.send(err);
    res.json({ message: 'Developer successfully deleted' });
  });
};

