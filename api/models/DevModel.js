'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DevSchema = new Schema({
  name: {
  type: [{
  type:  String,
  required: 'enter full name'
  }]
}, 
  address:  {
    type: [{
    type:  String,
    required: 'enter address'
    }]
  },
  phone:  {
    type: [{
    type:  Number,
    required: 'enter number'
    }]
  },
  
  status: {
    type: [{
      type: String,
      enum: ['FrontEnd', 'BackEnd', 'FullStack']
    }],
    default: ['FullStack']
  } 
});

module.exports = mongoose.model('Devs', DevSchema);
