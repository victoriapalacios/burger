var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes. Below is the index page.
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

// Place Burger Order
router.post('/burger/add', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

// EAT Burger
router.post('/burger/subtract/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

// Export routes for server.js to use.
module.exports = router;
