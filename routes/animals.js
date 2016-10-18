var express = require('express')
var router = express.Router()
var Animal = require('../models/animal')


//1st step - Render the FORM PAGE at animals/new
router.get('/new', function (req, res) { // basically this slash refers to /animal so /animal / new
  res.render('animal/new') // render the form page // render always render ejs file = render new.ejs inside animal folder
})

//2nd step - POST IT to the /animal

//create the animals
router.post('/', function (req, res) {
  var newAnimal = new Animal({
    name: req.body.animal.name,
    breed: req.body.animal.breed,
    DOB: req.body.animal.dateofbirth,
    gender: req.body.animal.gender,
    family: req.body.animal.family,
    status: req.body.animal.status
  })

// save the animal that is being created
  newAnimal.save(function (err) {
    if (err) throw new Error(err)
  })
//send the data that user inputs in all fields
  res.send(req.body)

})

router.get('/', function (req, res) {
  //this will find all from the created Animal constructor
  Animal.find({}, function(err, animals){
      res.render('animal/index', {animalArr: animals})
  })


// res.render('animal/index',  )

})

module.exports = router


// Animal.findByID(req.params.id, function (err, data//data is the object for Animal.findbyID){
// handle error
//res.send (data)
//}
