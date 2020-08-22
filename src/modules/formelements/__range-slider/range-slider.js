(function(){
  var rangeBlock = document.querySelector('.range-slider__block'),
      rangeBody = document.querySelector('.range-slider__body'),
      widthBlock = rangeBlock.offsetWidth - 19,
      rangeBlockPoz = rangeBlock.offsetLeft,
      dataRange= Object({
        min: 0,
        max: 50000,
        step: 100,
        maxPrice: 0,
        minPrice: 0,
        widthBlock: widthBlock,
        rangeMinPoz: 75,
        rangeMaxPoz: 159
      });

      rangeBody.style.marginLeft = dataRange.rangeMinPoz + "px";
      rangeBody.style.marginRight = (widthBlock + 7) - dataRange.rangeMaxPoz + "px";
      
      document.querySelectorAll('.range-slider__btn').forEach((btn)=>{
        btn.style.left = dataRange[btn.firstElementChild.name + "Poz"] + "px";
        btn.addEventListener("mousedown",function(el){btnPosition(el);}); 
      });

  function btnPosition(btn){
    var rangeBody = document.querySelector('.range-slider__body')
    var _this = btn;
    console.log("onMouseDown");
    let btnName = _this.target.firstElementChild.name;
    var btnPosition = ((_this.clientX- 7) - rangeBlockPoz)-1;
    
    if ((btnPosition > -1 && btnPosition < widthBlock)&&(btnName == "rangeMin" && btnPosition < dataRange.rangeMaxPoz)){
      dataRange[btnName + "Poz"] = btnPosition; 
      _this.target.style.left= btnPosition + "px";

    } else if ((btnPosition > -1 && btnPosition < widthBlock)&&(btnName == "rangeMax" && btnPosition > dataRange.rangeMinPoz)){
      dataRange[btnName + "Poz"] = btnPosition; 
      _this.target.style.left= btnPosition + "px";
    }

    rangeBody.style.marginLeft = dataRange.rangeMinPoz + "px";
    rangeBody.style.marginRight = (widthBlock + 7)- dataRange.rangeMaxPoz + "px";
    printSubtitle(dataRange);

    document.addEventListener("mouseup", (e)=>{
      console.log("OnmouseUp")
      document.onmousemove = null;
      document.querySelector("[name='rangeMin']").value = dataRange.minPrice;
      document.querySelector("[name='rangeMax']").value = dataRange.maxPrice;

    });
  }
  function printSubtitle(objData){
    var priceBlock = document.querySelector(".range-slider").firstElementChild.lastElementChild,
        data = objData,  
        sizeOnePixel = (data.max/data.widthBlock),  
        minPrice = Math.round(sizeOnePixel * data.rangeMinPoz),
        maxPrice = Math.round(sizeOnePixel * data.rangeMaxPoz + sizeOnePixel),
        str = minPrice+"Р - "+maxPrice+"Р";
        objData["maxPrice"] = maxPrice;
        objData["minPrice"] = minPrice;
        priceBlock.innerHTML = str;
  }
})() 