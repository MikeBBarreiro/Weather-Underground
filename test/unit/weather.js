
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
/*
describe('.avgHigh', function(){
  it('Should return the average high', function(done){
    Weather.avgHigh(70420, function(temp){
      expect(temp).to.be.ok;
      */
      
