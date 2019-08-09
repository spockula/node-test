'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DevSchema = new Schema({
  name: {
    type: String,
    required: 'Enter Full Name'
  },
  Phone:{
      type: Number,
      required: 'Enter Phone Number'
  },
  Address:{
      type: String,
      required: 'Enter address'
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