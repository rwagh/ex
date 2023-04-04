$(document).ready(function () {
  $("#loader").show();
  $.post("/list", null, function (list) {
    $("#loader").hide();
    console.log(list);
    if (list.length > 0) {
      localStorage.setItem("exam_list", list);
      $.get("/templates/item.html", function (template) {
        list.forEach((row) => {
          $.tmpl(template, row).appendTo("#listArea");
        });
      });
    }
  }).fail(function () {
    $("#loader").hide();
  });
});
$(document).on("click", ".view", function () {
  //$("#loader").show();
  let id = $(this).data("id");
  console.log("id:", $(this).data("id"));
  window.location.href =`/exam/${id}`;
  /* $.post("/get", { id: id }, function (row) {
    $("#loader").hide();
    console.log(row);
  }).fail(function () {
    $("#loader").hide();
  }); */
});
