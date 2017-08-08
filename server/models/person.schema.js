var mongoose = require('mongoose');
var Schema = mongoose.Schema;

<<<<<<< HEAD
// create the Schema
var personSchema = new Schema({
  name: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  notes: {type: String, required: true},
  medication: {type: String, required: true},
  dosage: {type: String, required: true}
=======
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
>>>>>>> server-info
});

// export our model
module.exports = mongoose.model('Person', personSchema);
<<<<<<< HEAD
=======
// module.exports = mongoose.model('Medication', medicationSchema);
>>>>>>> server-info
