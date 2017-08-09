var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicationSchema = new Schema({
  medication: {type: String},
  dosage: {type: String} 
});

// create the Schema
var personSchema = new Schema({
  name: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  notes: {type: String, required: true},
  allMeds: [] // [medicationSchema]
});

// export our model
module.exports = mongoose.model('Person', personSchema);
// module.exports = mongoose.model('Medication', medicationSchema);
