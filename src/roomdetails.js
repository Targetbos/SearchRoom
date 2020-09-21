import "./modules/footer/__footer/_footer.scss";
import "./modules/header/__header/header";
import "./modules/cards/__booking-room/booking-room";
import "./modules/formelements/__advantages/_advantages.scss";
import "./modules/formelements/__circle-diagramm/_circle-diagramm.scss";

var imgRoom = ["assets/images/imgRoom1.png", "assets/images/imgRoom2.png", "assets/images/imgRoom3.png"]

class sliderRoomDetails {
  constructor(imgArr) {
    this.wrapSlider = document.querySelector(".js__sliderRoomDetails")
    this.imgArr = imgArr;
  }


}