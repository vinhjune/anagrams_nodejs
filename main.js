if (process.argv.length<=2) {
  console.log("Please provide sample words, separated by a white space!");
  return;
}

var input = [];
process.argv.forEach(function (val, index, array) {
  if (index >=2) {
    input.push(val);
  }
});

var services = require('./services.js');
var output = services.getAnagram(input); 
console.log("groups of anagrams:");
console.log(output);