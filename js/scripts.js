var translate = function(english) {
  var first = english[0];
  if (parseInt(first)) {
    return english;
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
