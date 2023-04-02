$(document).ready(function () {
  $("#loader").show();
  $.post("/list", null, function (result) {
    $("#loader").hide();
    console.log(result);
  }).fail(function () {
    $("#loader").hide();
  });
});
