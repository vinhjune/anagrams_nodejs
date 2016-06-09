var buildAnagram = function(input){
  var anagrams = {};
  var sortedWord;
  input.forEach(function(word){
    sortedWord = sortWord(word);
    if(anagrams.hasOwnProperty(sortedWord)){
      anagrams[sortedWord].push(word);
    }
    else{
      anagrams[sortedWord] = [word];
    }
  });
  return anagrams;
}

function sortWord(word){
  return word.split("").sort().join("");
}

exports.getAnagram = buildAnagram;
