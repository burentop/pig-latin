var vowels = ['a', 'e', 'i', 'o', 'u'];
var match = false;

var isVowel = function(letter) {
  vowels.forEach(function(vowel) {
    console.log(vowel === letter);
    if (vowel === letter) {
      match = true;
    }
  });
}

var translate = function(english) {
  var first = english[0];
  isVowel(first);
  if (parseInt(first)) {
    match = false;
    return english;
  } else if (!match) {
    match = false;
    return english.slice(1) + first + "ay";
  } else {
    match = false;
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
