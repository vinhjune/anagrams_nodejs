var assert = require('assert');
var services = require('../services.js');

var input = ['abc', 'hyf', 'bca', 'fyg', 'd', 'efg', 'd'];
var expected = JSON.stringify({
		"abc" : ['abc', 'bca'],
		"fhy" : ['hyf'],
		"fgy" : ['fyg'],
		"d" : ['d','d'],
		"efg" : ['efg'] });
var output = services.getAnagram(input);

describe('test output', function(){
	it('#should equal', function(){
		assert.equal(expected, JSON.stringify(output));
	});	
});
