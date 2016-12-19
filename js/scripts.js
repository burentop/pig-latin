

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var english = $("input#english").val();
    var result = translate(english);
    $("#result").text(result);

    $("#result").show();
  });
});
