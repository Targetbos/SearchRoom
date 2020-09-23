import "./_filter-date-dropdown.scss";
import "../__date-dropdown/js/air-datepicker";
import "../__date-dropdown/sass/_datepicker-config.scss";
import "../__date-dropdown/sass/cell.scss";
import "../__date-dropdown/sass/datepicker.scss";
import "../__date-dropdown/sass/navigation.scss";
import "../__date-dropdown/sass/timepicker.scss";
$(".filter-date-dropdown__input").click(function () {
  $(".datepicker-here").datepicker({
    inline: true,
    autoClose: true,
    navTitles: {
      days: "MM yyyy"
    }
  })
})