(function () {
  $(".js__range-slider").slider({
    animate: "slow",
    range: true,
    max: 15600,
    values: [5000, 10000],
    slide: function (event, ui) {
      $(".js__range-value").text(triplets(ui.values[0]) + "P - " + triplets(ui.values[1]) + "P");
    }
  });


})();

function triplets(str) {
  // \u202f — неразрывный узкий пробел
  return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u202f');
}