'use strict';
module.exports = function(app) {
  var DevContact = require('../controllers/DevController');

  // Directory Routes
  app.route('/Devs')
    .get(DevContact.list_all_devs)
    .post(DevContact.create_a_dev);


  app.route('/Devs/:DevId')
    .get(DevContact.read_a_dev)
    .put(DevContact.update_a_dev)
    .delete(DevContact.delete_a_dev);
};
