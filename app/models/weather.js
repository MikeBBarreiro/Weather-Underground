/*jshint camelcase:false */

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

Weather.allHighs = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d8b5a108b79cf7eb/forecast10day/q/CA/' + zip + '.json';
  request(url, function(error, response, body){
    body= JSON.parse(body);
    var aHigh = [];

    for(var i = 0; i < body.forecast.simpleforecast.forecastday.length; i++){
      parseInt(body.forecast.simpleforecast.forecastday[i].high.fahrenheit);
    }
    aHigh.push(body.forecast.simpleforecast.forecastday.high);

    cb(aHigh);

  });
};
Weather.allLows = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d8b5a108b79cf7eb/forecast10day/q/CA/' + zip + '.json';
  request(url, function(error, response, body){
    body= JSON.parse(body);
    var aLow = [];

    for(var i = 0; i < body.forecast.simpleforecast.forecastday.length; i++){
      parseInt(body.forecast.simpleforecast.forecastday[i].low.fahrenheit);
     }
    aLow.push( body.forecast.simpleforecast.forecastday.low);
    cb(aLow);

  });
};

Weather.deltas = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d8b5a108b79cf7eb/forecast10day/q/CA/' + zip + '.json';
  request(url, function(error, response, body){
    body= JSON.parse(body);
  var aDeltas = [];
  var forecats = body.forecast.simpleforecast.forecastday;
  
  for(var i = 0; i <forecats.length; i++){
  aDeltas.push(parseInt(forecats[i].high.fahrenheit) - parseInt(forecats[i].low.fahrenheit));

  }

 cb(aDeltas);

});
};


module.exports = Weather;

