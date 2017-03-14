var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('diabetesmember', ['users'],['settings']);

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/users', function (req, res) {
  console.log('I received a GET request');

  db.users.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});


app.post('/users', function (req, res) {
  console.log(req.body);
  db.users.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/users/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.users.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/users/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.users.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/users/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.users.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {username: req.body.username, password: req.body.password, confirm: req.body.confirm, firstname: req.body.firstname, lastname: req.body.lastname, 
      gender: req.body.gender, email: req.body.email, age: req.body.age, weight: req.body.weight, height: req.body.height, type: req.body.type, 
      complication: req.body.complication, disease: req.body.disease, dragallergy: req.body.dragallergy, emaildoctor: req.body.emaildoctor}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});



app.get('/settings', function (req, res) {
  console.log('I received a GET request');

  db.settings.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});


app.post('/settings', function (req, res) {
  console.log(req.body);
  db.settings.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});


app.get('/settings/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.settings.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/settings/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.settings.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {sugars1: req.body.sugars1,sugars2: req.body.sugars2,
      sugars3: req.body.sugars3,calories1: req.body.calories1,
      calories2: req.body.calories2, calories3: req.body.calories3,
      sodium1: req.body.sodium1, sodium2: req.body.sodium2,
      sodium3: req.body.sodium3, fat1: req.body.fat1,
      fat2: req.body.fat2, fat3: req.body.fat3}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});



app.listen(8080);
console.log("Server running on port 8080");