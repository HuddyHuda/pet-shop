var mongoose = require('mongoose')

var animalSchema = new mongoose.Schema({
  // prop: Datatype
  name: String,
  breed: String,
  DOB: Date,
  gender: String,
  family: String,
  status: String
})

var Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
