document.querySelectorAll('.radio-buttons__label').forEach(function(el){
  el.onclick = function(ol){
    let list = document.querySelectorAll('.radio-buttons__label')
    for(let i=0; i<list.length; i++){
      list[i].classList.remove('radio-buttons__label--color-75');
    }
    if (ol.target.dataset.sex == 'men'){
      ol.target.classList.add('radio-buttons__label--color-75');
    } else {ol.target.classList.add('radio-buttons__label--color-75');
  }
  }
});