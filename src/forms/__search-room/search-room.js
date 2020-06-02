import '../../forms-elements/__date-dropdown/date-dropdown';
import '../../forms-elements/__dropdown/__dropdown-guest/dropdown-guest';
$(".date-dropdown__date-input").click(function(){
  $(".datepicker-here").datepicker({
    onHide: function(dp,animationCompleted){
      let _this = dp,
          month = function(dates){ 
                    let month = dates.getMonth() + 1; 
                    let result;
                    if(month > 10 ){ result = Number.parseInt(month);} else {result = "0"+ Number.parseInt(month);}
                    return result;
                  },
          day = function(dates){ 
                  let day = dates.getDate(); 
                  let result;
                  if(day > 9 ){ result = day;} else {result = "0"+ day;}
                  return result;
                },
          result = [];

      if(!animationCompleted){
        result = _this.selectedDates.map((el)=> day(el) + "." + month(el) + "." + el.getFullYear());
        document.querySelector(".date-dropdown__date-in").firstElementChild.nextElementSibling.value = result[0]
        document.querySelector(".date-dropdown__date-out").firstElementChild.nextElementSibling.value = result[1]
      }
    },
    inline:true,
    autoClose:true,
    range:true,
    navTitles: {
      days: "MM yyyy"
    }
  });
});
