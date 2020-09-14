import './js/air-datepicker';
import "./sass/_datepicker-config.scss";
import "./sass/cell.scss";
import "./sass/datepicker.scss";
import "./sass/navigation.scss";
import "./sass/timepicker.scss";
import "./_date-dropdown.scss";

var dateDropdown = $(".js__datePicker").datepicker({
  range: true,
  autoClose: true,
  navTitles: {
    days: "MM yyyy"
  },
  onSelect: function (fd) {
    $(".date-dropdown__in-day").val(fd.split(',')[0])
    $(".date-dropdown__out-day").val(fd.split(',')[1])
  }
});