//слайдер в описании комнаты
"use strict"
import "../../formelements/__rate-button/_rate-button.scss";
import "./desc-room.scss";

class SliderRoom {
  constructor(container) {
    this.container = container;
    this.dotsWrap = this.container.nextElementSibling;
    this.imgShow = 0; //id показываемого изображения
    this.arrImages = function () {
      return Array.prototype.slice.call(this.container.querySelectorAll(".js__item-desc-room"))
    };
  }

  init() {
    this.createDot();
    this.addClickSliderBtn();
  }
  createDot() {
    for (let [id, img] of this.arrImages().entries()) {

      var dot = document.createElement("span");
      if (id == 0) {
        dot.classList.add("desc-room__dot");
        dot.classList.add("desc-room__dot--active");
        this.arrImages()[id].classList.add("desc-room__item--show");
      } else {
        dot.classList.add("desc-room__dot");
      }

      dot.name = id;
      dot.onclick = (event) => {
        this.visibleImage(event.target.name);
      }
      this.dotsWrap.append(dot);
      img.onclick = () => {
        this.nextImageView();
      }
    }
  }
  addClickSliderBtn() {
    let wrapBtn = this.dotsWrap.nextElementSibling;
    let btnBack = wrapBtn.firstElementChild;
    let btnNext = wrapBtn.lastElementChild;
    btnBack.onclick = (event) => {
      event.stopPropagation();
      this.backImageView()
    }
    btnNext.onclick = (event) => {
      event.stopPropagation();
      this.nextImageView()
    }

    wrapBtn.onclick = (event) => {
      this.nextImageView()
    }

  }
  backImageView() {
    let newIdImg = this.imgShow - 1;
    let numOfImages = this.arrImages().length - 1;
    if (newIdImg < 0) {
      newIdImg = numOfImages;
    }
    this.visibleImage(newIdImg);
  }
  nextImageView() {
    let newIdImg = this.imgShow + 1;
    let numOfImages = this.arrImages().length;
    if (newIdImg == numOfImages) {
      newIdImg = 0;
    }
    this.visibleImage(newIdImg);
  }

  visibleImage(id) {
    let images = this.arrImages();
    let arrDots = Array.prototype.slice.call(this.dotsWrap.querySelectorAll(".desc-room__dot"));
    images[this.imgShow].classList.remove("desc-room__item--show");
    images[id].classList.add("desc-room__item--show");
    arrDots[this.imgShow].classList.remove("desc-room__dot--active");
    arrDots[id].classList.add("desc-room__dot--active");
    this.imgShow = id;
  }



}
export function addSliderDescRoom() {
  document.querySelectorAll(".js__container").forEach((el) => {
    var sliderRoom = new SliderRoom(el);
    sliderRoom.init();
  })
}
addSliderDescRoom();

export function descRoomView(arrayRoom) { //возвращает структуру представления комнаты 
  let imgLink = arrayRoom.imgLink;
  let viewDescRoom = `<div class="desc-room">
              <div class="desc-room__wrap">
                <div class="desc-room__slider">
                  <ul class="desc-room__container js__container">
                    ${imgLink.map((link,id)=>
                      `<li class="desc-room__item js__item-desc-room">
                        <img src= "${link}" alt="Интерьер номера №${arrayRoom.number}" class="desc-room__img" >
                      </li>`).join("")
                    }
                  </ul>
                  <div class="desc-room__dots-wrap"></div>
                  <div class="desc-room__wrap-slider-btn">
                    <span class="desc-room__btn --back js__btn-slider-back"></span>
                    <span class="desc-room__btn --next js__btn-slider-next"></span>
                  </div>
                </div>

                <div class="desc-room__wrap-desc">
                  <div class="desc-room__wrap-number-price">
                    <div class="desc-room__wrap-number">
                      <span class="desc-room__number-room">${arrayRoom.number}</span>
                      <span class="desc-room__type">${arrayRoom.type}</span>
                    </div>
                    <div class="desc-room__wrap-price">
                      <span class="desc-room__cost-per-day">${numberBits(arrayRoom.price)}</span>
                      <span class="desc-room__cost-day">в сутки</span>
                    </div>
                  </div>
                  <div class="desc-room__rating-wrap">
                    <div class="rate-button">
                      <div class="rate-button__wrap-star">
                        <input type="radio" id="star-5-${arrayRoom.number}" name=${"rating-room-" + arrayRoom.number} value="5" data-numroom=${arrayRoom.number} ${arrayRoom.rating==5? "checked" :""}>
                        <label for="star-5-${arrayRoom.number}"></label>
                        <input type="radio" id="star-4-${arrayRoom.number}" name=${"rating-room-" + arrayRoom.number} value="4" data-numroom=${arrayRoom.number} ${arrayRoom.rating==4? "checked" :""}>
                        <label for="star-4-${arrayRoom.number}"></label>
                        <input type="radio" id="star-3-${arrayRoom.number}" name=${"rating-room-" + arrayRoom.number} value="3" data-numroom=${arrayRoom.number} ${arrayRoom.rating==3? "checked" :""}>
                        <label for="star-3-${arrayRoom.number}"></label>
                        <input type="radio" id="star-2-${arrayRoom.number}" name=${"rating-room-" + arrayRoom.number} value="2" data-numroom=${arrayRoom.number} ${arrayRoom.rating==2? "checked" :""}>
                        <label for="star-2-${arrayRoom.number}"></label>
                        <input type="radio" id="star-1-${arrayRoom.number}" name=${"rating-room-" + arrayRoom.number} value="1" data-numroom=${arrayRoom.number} ${arrayRoom.rating==1? "checked" :""}>
                        <label for="star-1-${arrayRoom.number}"></label>
                      </div>
                    </div>
                    <div class="desc-room__wrap-feedback">
                      <span class="desc-room__feedback">${arrayRoom.feedback}</span>
                      <span class="desc-room__feedback-text">Отзывов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  return viewDescRoom;
}

function numberBits(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}