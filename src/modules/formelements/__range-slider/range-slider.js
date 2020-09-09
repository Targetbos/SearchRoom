import 'webpack-jquery-ui/slider'
(function () {
  $(".js__range-slider").slider({
    animate: "slow",
    range: true,
    max: 15600,
    values: [5000, 10000],
    slide: function (event, ui) {
      $(".js__range-value").html(triplets(ui.values[0]) + "<span class='ruble'></span> - " + triplets(ui.values[1]) + "<span class='ruble'></span>");
    }
  });


})();

function triplets(str) {
  // \u202f — неразрывный узкий пробел
  return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u202f');
}