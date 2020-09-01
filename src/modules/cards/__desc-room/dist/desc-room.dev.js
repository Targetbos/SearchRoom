//слайдер в описании комнаты
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SliderRoom =
/*#__PURE__*/
function () {
  function SliderRoom(container) {
    _classCallCheck(this, SliderRoom);

    this.container = container;

    this.arrImages = function () {
      return Array.prototype.slice.call(this.container.querySelectorAll(".js__item-desc-room"));
    };

    this.dotsWrap = this.container.nextElementSibling;
    this.imgShow = 0; //id показываемого изображения
  }

  _createClass(SliderRoom, [{
    key: "createDot",
    value: function createDot() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.arrImages().entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              id = _step$value[0],
              img = _step$value[1];

          var dot = document.createElement("span");

          if (id == 0) {
            dot.classList.add("desc-room__dot");
            dot.classList.add("desc-room__dot--active");
            this.arrImages()[id].classList.add("desc-room__item--show");
          } else {
            dot.classList.add("desc-room__dot");
          }

          dot.name = id;

          dot.onclick = function (event) {
            _this.visibleImage(event.target.name);
          };

          this.dotsWrap.append(dot);

          img.onclick = function (event) {
            _this.nextImageView();
          };
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "nextImageView",
    value: function nextImageView() {
      var newIdImg = this.imgShow + 1;
      var numOfImages = this.arrImages().length;

      if (newIdImg == numOfImages) {
        newIdImg = 0;
      }

      this.visibleImage(newIdImg);
    }
  }, {
    key: "visibleImage",
    value: function visibleImage(id) {
      var images = this.arrImages();
      var arrDots = Array.prototype.slice.call(this.dotsWrap.querySelectorAll(".desc-room__dot"));
      images[this.imgShow].classList.remove("desc-room__item--show");
      images[id].classList.add("desc-room__item--show");
      arrDots[this.imgShow].classList.remove("desc-room__dot--active");
      arrDots[id].classList.add("desc-room__dot--active");
      this.imgShow = id;
    }
  }, {
    key: "numberBits",
    value: function numberBits() {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }]);

  return SliderRoom;
}();

document.querySelectorAll(".js__container").forEach(function (el) {
  var sliderRoom = new SliderRoom(el);
  sliderRoom.createDot();
}); // export function descRoomView(data) {
//   let imgLink = data.imgLink;
//   let viewDescRoom = `<div class="desc-room">
//               <div class="desc-room__wrap">
//                 <div class="desc-room__slider">
//                   <ul class="desc-room__container">
//                     ${imgLink.map((link,id)=>
//                       `<li class="desc-room__item">
//                         <img class="desc-room__img" src= "${link}" data-id="${id}" >
//                       </li>`).join("")
//                     }
//                   </ul>
//                   <div class="desc-room__dots-wrap"></div>
//                 </div>
//                 <div class="desc-room__wrap-desc">
//                   <div class="desc-room__wrap-number-price">
//                     <div class="desc-room__wrap-number">
//                       <span class="desc-room__number-room">${data.number}</span>
//                       <span class="desc-room__type">${data.type}</span>
//                     </div>
//                     <div class="desc-room__wrap-price">
//                       <span class="desc-room__cost-per-day">${numberBits(data.price)}</span>
//                       <span class="desc-room__cost-day">в сутки</span>
//                     </div>
//                   </div>
//                   <div class="desc-room__rating-wrap">
//                     <div class="rate-button">
//                       <div class="rate-button__wrap-star">
//                         ${ratingView(data.number,data.rating)}
//                       </div>
//                     </div>
//                     <div class="desc-room__wrap-feedback">
//                       <span class="desc-room__feedback">${data.feedback}</span>
//                       <span class="desc-room__feedback-text">Отзывов</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>`;
//   return viewDescRoom;
// }
// function ratingView(numberRoom, rating) {
//   let inputStar = "";
//   for (let i = 5; i > 0; i--) {
//     if (i == rating) {
//       inputStar += `<input class="rate-button__input-star" type="radio" name="rating-room-${numberRoom}" value="${i}" checked></input>`;
//     } else {
//       inputStar += `<input class="rate-button__input-star" type="radio" name="rating-room-${numberRoom}" value="${i}"></input>`
//     }
//   }
//   return inputStar;
// }