$(document).ready(function () {
  $("#loader").show();
  let href = window.location.href;
  let id = href.substring(href.lastIndexOf("/") + 1, href.length);
  $.post("/get", { id: id }, function (row) {
    $("#loader").hide();
    let qlist = row.Questions;
    let olist = row.QuestionOptions;
    $("#qArea").text(qlist.shift(0).Question);
    console.log(row);
    localStorage.setItem("item", row);

  }).fail(function () {
    $("#loader").hide();
  });
});
