var vowels = ['a', 'e', 'i', 'o', 'u'];

var isVowel = function(letter) {
  for (var index = 0; index < vowels.length; index += 1) {
    if (vowels[index] === letter) {
      return true;
    }
  }
  return false;
}

var findFirstVowel = function(word) {
  for (var index = 0; index < word.length; index += 1) {
    if (isVowel(word[index])) {
      return index;
    }
  }
  return -1;
}

var translate = function(english) {
  var first = english[0];
  isVowel(first);
  if (parseInt(first)) {
    return english;
  } else if (!isVowel(first)) {
    var vowelLoc = findFirstVowel(english);
    return english.slice(vowelLoc) + english.slice(0, vowelLoc) + "ay";
  } else {
    return english + "ay";
  }
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var english = $("input#english").val();
    var result = translate(english);
    $("#result").text(result);

    $("#result").show();
  });
});
