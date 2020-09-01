//слайдер в описании комнаты
"use strict"

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
    this.addClickSliderBtn()
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
    let btnBack = wrapBtn.firstChild;
    let btnNext = wrapBtn.lastChild;
    btnBack.onclick = () => {
      this.backImageView()
    }
    btnNext.onclick = () => {
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

document.querySelectorAll(".js__container").forEach((el) => {
  var sliderRoom = new SliderRoom(el);
  sliderRoom.init();
})


export function descRoomView(arrayRoom) { //возвращает структуру представления комнаты 
  let imgLink = arrayRoom.imgLink;
  let viewDescRoom = `<div class="desc-room">
              <div class="desc-room__wrap">
                <div class="desc-room__slider">
                  <ul class="desc-room__container js__container">
                    ${imgLink.map((link,id)=>
                      `<li class="desc-room__item js__item-desc-room">
                        <img class="desc-room__img" src= "${link}">
                      </li>`).join("")
                    }
                  </ul>
                  <div class="desc-room__dots-wrap"></div>
                  <div class="desc-room__wrap-slider-btn">
                    <span class="desc-room__btn --back"></span>
                    <span class="desc-room__btn --next"></span>
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
                        ${ratingView(arrayRoom.number,arrayRoom.rating)}
                      </div>
                    </div>
                    <div class="desc-room__wrap-feedback">
                      <span class="desc-room__feedback">${arrayRoom.numOfFeedback}</span>
                      <span class="desc-room__feedback-text">Отзывов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  return viewDescRoom;
}

function numberBits() {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function ratingView(numberRoom, rating) {
  let inputStar = "";
  for (let i = 5; i > 0; i--) {
    if (i == rating) {
      inputStar += `<input type="radio" id=${numberRoom+"-star-"+ i} name=${"rating-room-" + numberRoom} value=${i} data-numroom=${numberRoom} checked/>
                    <label for=${numberRoom+"-star-"+ i} title="${i}"/>`
    } else {
      inputStar += `<input type="radio" id=${numberRoom+"-star-"+ i} name=${"rating-room-" + numberRoom} value=${i} data-numroom=${numberRoom}/>
                    <label for=${numberRoom+"-star-"+ i} title="${i}"/>`
    }
  }
  return inputStar;
}