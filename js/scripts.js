var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var inputWords = [];
var outputWords = [];

var generateOutput = function() {
  for (var index = 0; index < inputWords.length; index += 1) {
    outputWords.push(translate(inputWords[index]));
  }
}

var isVowel = function(letter) {
  for (var index = 0; index < vowels.length; index += 1) {
    if (vowels[index] === letter) {
      return true;
    }
  }
  return false;
}

var translate = function(english) {
  var first = english[0];
  isVowel(first);
  if (parseInt(first)) {
    return english;
  } else if (!isVowel(first)) {
    var vowelLoc = english.search(/[aeiou]/i);
    return english.slice(vowelLoc) + english.slice(0, vowelLoc) + "ay";
  } else {
    return english + "ay";
  }
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var english = $("input#english").val();
    inputWords = english.split(" ");
    generateOutput();
    var result = outputWords.join(" ");
    $("#output-english").text(english);
    $("#output-pig").text(result);
    $("#result").show();
  });
});
