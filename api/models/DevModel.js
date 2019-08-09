'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DevSchema = new Schema({
  name: {
    type: String,
    required: 'Enter Full Name'
  },
  phone:{
      type: Number,
      required: 'phone number'
  },
  address:{
      type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Stack: {
    type: [{
      type: String,
      enum: ['FrontEnd', 'BackEnd', 'FullStack']
    }],
    default: ['FullStack']
  }
});

module.exports = mongoose.model('Devs', DevSchema);