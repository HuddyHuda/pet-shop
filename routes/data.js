var express = require('express')
var router = express.Router()
var Animal = require('../models/animal')

router.get('/', function (req, res) {
  res.render('index')
})

router.post('/data', function (req, res) {
  var newAnimal = new Animal({
    name: req.body.animal.name,
    breed: req.body.animal.breed,
    DOB: req.body.animal.dateofbirth,
    gender: req.body.animal.gender,
    family: req.body.animal.family,
    status: req.body.animal.status
  })

  newAnimal.save(function (err) {
    if (err) throw new Error(err)
  })

  res.send(req.body)
})

module.exports = router
