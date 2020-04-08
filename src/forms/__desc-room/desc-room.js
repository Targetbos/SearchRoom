document.querySelectorAll(".desc-room__container").forEach((event)=>{
  
  event.querySelectorAll("img").forEach((el)=>{
    var img = el.parentNode;
    var idImg = el.dataset.id;
    var dotsWrap = event.parentNode.lastChild;
    let dot = createDot(dotsWrap,idImg);
    
    dot.onclick=()=>{
      for(let i=0; i<event.childNodes.length; i++){
        event.childNodes[i].classList.remove("desc-room__item--show");
        dotsWrap.childNodes[i].classList.remove("desc-room__dot--active");
      }

      img.classList.add("desc-room__item--show");
      dot.classList.add("desc-room__dot--active");
    }

  });

  event.children[0].classList.add("desc-room__item--show");
  event.parentNode.lastChild.children[0].classList.add("desc-room__dot--active");
});

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