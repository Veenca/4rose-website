let categoryArray = $(".mainCategory");

categoryArray.siblings().css("display", "none");

categoryArray.on("click", function () {
  let displayValue;
  let element = $(this).siblings();

  displayValue = element.css("display");
  if (displayValue == "none") {
    element.fadeIn(500);
  } else {
    element.css("display", "");
    element.fadeOut(300);
  }
});
let specificName=categoryArray.siblings().children().children();
let specificCategory = $(".specificList")
specificCategory.addClass('hide')
//console.log(specificName(''))
//console.log(categoryArray.siblings().children().children())
//specificCategory.children().addClass('hide')
//specificCategory.children().hide();
/* specificCategory.parent().children().on("click", function () {
    $(this).toggleClass('hide')
    console.log("ok")


}); */