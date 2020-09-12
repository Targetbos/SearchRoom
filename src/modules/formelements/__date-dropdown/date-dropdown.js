import './js/air-datepicker';
import "./sass/_datepicker-config.scss";
import "./sass/cell.scss";
import "./sass/datepicker.scss";
import "./sass/navigation.scss";
import "./sass/timepicker.scss";
import "./_date-dropdown.scss";

$(".date-dropdown__subtitle").click(function(){
  $(".datepicker-here").datepicker({
    inline:true,
    autoClose:true,
    navTitles: {
      days: "MM yyyy"
    }
  });
});