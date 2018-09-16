var express = require('express');
var Weather = require('../models/weather');

var router = express.Router();

router.get('/:city', function (req, res) {
  var city = req.params.city;

  Weather.retrieveByCity(city, function (err, weather) {
    if (err) 
      return res.json(err);
    return res.json(weather);
  });
});

module.exports = router;