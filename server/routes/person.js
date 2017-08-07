var express = require('express');
var router = express.Router();
var Person = require('../models/person.schema.js');

router.get('/', function(req, res) {
  // find (select) all documents in our collection
  Person.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});

router.post('/', function(req, res) {
  console.log('log the data: ', req.body);

  // create an object instance from our Person model
  var addPerson = new Person(req.body);

  // insert into our collection
  addPerson.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});

router.post('/search', function(req, res) {
  // find (select) all documents in our collection
  console.log('search is:', req.body.search);
  Person.find({name: req.body.search}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});


module.exports = router;
