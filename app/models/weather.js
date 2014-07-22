'use strict';

var request = require('request');

function Weather(){}



Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d8b5a108b79cf7eb/forecast10day/q/CA/' + zip + '.json';
  request(url, function(error, response, body){
      body = JSON.parse(body);
      var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      var temp = high + 'F';
      cb(temp);
   });
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d8b5a108b79cf7eb/forecast10day/q/CA/' + zip + '.json';
  request(url, function(error, response, body){
    body= JSON.parse(body);
    var low = body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var temp = low + 'F';
    cb(temp);
  });
};


Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d8b5a108b79cf7eb/forecast10day/q/CA/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var total = 0;
    for(var i = 0; i < body.forecast.simpleforecast.forecastday.length; i++){
      total += parseInt(body.forecast.simpleforecast.forecastday[i].high.fahrenheit);
     }
    var avg = total / body.forecast.simpleforecast.forecastday.length;
    cb(avg);
  });
};

Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d8b5a108b79cf7eb/forecast10day/q/CA/' + zip + '.json';
  request(url, function(error, response, body){
    body= JSON.parse(body);
    var total = 0;
    for(var i = 0; i < body.forecast.simpleforecast.forecastday.length; i++){
      total += parseInt(body.forecast.simpleforecast.forecastday[i].low.fahrenheit);
     }
    var avgl = total / body.forecast.simpleforecast.forecastday.length;
    cb(avgl);
  });
};
    





module.exports = Weather;

