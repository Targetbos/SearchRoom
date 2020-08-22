import "../../forms-elements/__rate-button/_rate-button";
  //слайдер в описании комнаты
export function visibleImg(){
  document.querySelectorAll(".desc-room__container").forEach((event)=>{
    event.querySelectorAll("img").forEach((el)=>{
      var img = el.parentNode;
      var idImg = el.dataset.id;
      var dotsWrap = event.nextElementSibling;
      let dot = createDot(dotsWrap,idImg);
      
      dot.onclick= function(){
        for(let i=0; i<event.children.length; i++){
          event.children[i].classList.toggle("desc-room__item--show",false);
          dotsWrap.children[i].classList.toggle("desc-room__dot--active",false);
        }
        img.classList.add("desc-room__item--show");
        dot.classList.add("desc-room__dot--active");
      }

    });
  event.children[0].classList.add("desc-room__item--show");
  event.nextElementSibling.children[0].classList.add("desc-room__dot--active");
  });
}

function createDot(container, numberImg){
  var dot = document.createElement("span");
  
  if(numberImg == "0"){
    dot.classList.add("desc-room__dot");
    dot.classList.add("desc-room__dot--active");
  } else {
    dot.classList.add("desc-room__dot");
  }

  dot.name = numberImg;
  container.append(dot);
  
  return dot;
}
export function descRoomView(data){
  let imgLink = data.imgLink;
  let viewDescRoom = `<div class="desc-room">
                <div class="desc-room__wrap">
                  <div class="desc-room__slider">
                    <ul class="desc-room__container">
                      ${imgLink.map((link,id)=>
                        `<li class="desc-room__item">
                          <img class="desc-room__img" src= "${link}" data-id="${id}" >
                        </li>`).join("")
                      }
                    </ul>
                    <div class="desc-room__dots-wrap"></div>
                  </div>

                  <div class="desc-room__wrap-desc">
                    <div class="desc-room__wrap-number-price">
                      <div class="desc-room__wrap-number">
                        <span class="desc-room__number-room">${data.number}</span>
                        <span class="desc-room__type">${data.type}</span>
                      </div>
                      <div class="desc-room__wrap-price">
                        <span class="desc-room__cost-per-day">${numberBits(data.price)}</span>
                        <span class="desc-room__cost-day">в сутки</span>
                      </div>
                    </div>
                    <div class="desc-room__rating-wrap">
                      <div class="rate-button">
                        <div class="rate-button__wrap-star">
                          ${ratingView(data.number,data.rating)}
                        </div>
                      </div>
                      <div class="desc-room__wrap-feedback">
                        <span class="desc-room__feedback">${data.feedback}</span>
                        <span class="desc-room__feedback-text">Отзывов</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  return viewDescRoom;
}

function numberBits(num){
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function ratingView(numberRoom,rating){
  let inputStar = "";
  for(let i=5; i>0; i--){
    if (i == rating){
    inputStar += `<input class="rate-button__input-star" type="radio" name="rating-room-${numberRoom}" value="${i}" checked></input>`;
    } else {
    inputStar += `<input class="rate-button__input-star" type="radio" name="rating-room-${numberRoom}" value="${i}"></input>`  
    }
  }
  return inputStar;
}