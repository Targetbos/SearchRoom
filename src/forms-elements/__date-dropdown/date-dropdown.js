import './js/air-datepicker';
$(".date-dropdown__subtitle").click(function(){
  
  $(".datepicker-here").datepicker({
    inline:true,
    autoClose:true,
    navTitles: {
      days: "MM yyyy"
    }
   
  });
});