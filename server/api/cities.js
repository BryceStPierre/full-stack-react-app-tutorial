var express = require('express');
var Cities = require('../models/cities');

var router = express.Router();

router.get('/', function (req, res) {
  Cities.retrieveAll(function (err, cities) {
    if (err)
      return res.json(err);
    return res.json(cities);
  });
});

router.post('/', function (req, res) {
  var city = req.body.city;

  Cities.insert(city, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;