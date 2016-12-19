var vowels = ['a', 'e', 'i', 'o', 'u'];

var isVowel = function(letter) {
  vowels.forEach(function(vowel) {
    if (vowel === letter) {
      return true;
    }
  });
  return false;
}

var translate = function(english) {
  var first = english[0];
  if (parseInt(first)) {
    return english;
  } else if (!isVowel(first)) {
    return english.slice(1) + first + "ay";
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
