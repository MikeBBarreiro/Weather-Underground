
/*jshint expr:true*/
/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('.high', function(){
    it('Should show the high', function(done){
      Weather.high(37203, function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });


  describe('.low', function(){
    it('Should return the low temp for today', function(done){
      Weather.low(10011, function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });

  describe('.avgHigh', function(){
    it('Should return the average high', function(done){
      Weather.avgHigh(70420, function(temp){
        expect(temp).to.be.within(-50, 150);
        done();
      });
    });
  });

  describe('.avgLow', function(){
    it('Should return the average low', function(done){
      Weather.avgLow(70420, function(temp){
        expect(temp).to.be.within(-50, 150);
        done();
      });
    });
  });

  describe('.allHighs', function(){
    it('Should show all the highs within 10 days', function(done){
      Weather.allHighs(70420, function(temp){
        expect(temp).to.be.within(-50,150);
        done();
      });
    });
  });
  describe('.allLows', function(){
    it('Should shows all the lows within 10 days', function(done){
      Weather.allLows(70420, function(temp){
        expect(temp).to.be.within(-50, 150);
        done();
      });
    });
  });
  describe('.deltas', function(){
    it('Should give the deference between the, Highs, and Lows', function(done){
      Weather.deltas(70420, function(aDeltas){
        expect(aDeltas).to.have.length(10);
        expect(aDeltas[0]).to.be.within(-50, 150);
        done();
      });
    });
  });
  describe('.moon', function(){
    it('Should give the alumination of the moon', function(done){
     Weather.moon(70420, function(phase){
       expect(phase).to.be.ok;
       expect(phase).to.be.a('string');
       done();
      });
    });
  });
});



