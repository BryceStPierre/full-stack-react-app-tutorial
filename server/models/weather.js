const request = require('request-promise');

const API_KEY = '865fa2abfcaa7fdeb5c2f20dedaca48b';

class Weather {
  static retrieveByCity (city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    }).then(function (res) {
      callback(res);
    }).catch(function (err) {
      console.log(err);
      callback({ error: 'Could not reach OpenWeatherMap API.' });
    });
  }
}

module.exports = Weather;