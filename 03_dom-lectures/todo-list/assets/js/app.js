// todo click - mark as completed
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// delete todo
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(1000, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

// add new todo
$("input[type='text']").on("keypress", function (event) {
  // check if Enter key was pressed
  if (event.which === 13) {
    const newTodo = $(this).val();
    if (newTodo !== '') {
      $(".container ul").append(`<li><span><i class="far fa-trash-alt"></i></span> ${newTodo}</li>`);
    }
    $(this).val("");
  }
})

// collapse header button
$("h1 span").click(function () {
  $("input[type='text']").fadeToggle();
})
