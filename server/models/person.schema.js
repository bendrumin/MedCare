var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var personSchema = new Schema({
  name: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  notes: {type: String, required: true},
  medication: {type: String, required: true},
  dosage: {type: String, required: true}
});

// export our model
module.exports = mongoose.model('Person', personSchema);
