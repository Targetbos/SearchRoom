$(".filter-date-dropdown").click(function(){
  this.children().val("");
  $(".filter-date-dropdown__input").datapicker({
    inline:true,
    autoClose:true,
    prevHtml: '',

  });
  $(".datepicker--nav-action").attr("next").append("ghjdthrf");
});