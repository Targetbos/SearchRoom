//Управляем кнопками + и -, выбора номера гостиницы  
document.querySelectorAll('.dropdown-room__btn').forEach(function(el){
  if(el.name == 'minus'){ 
    el.nextSibling.innerHTML == '0' && el.classList.add('dropdown-room__btn--deactivate'); // Если ноль, то декативируем кнопку(меняем цвет кнопки)
  }
  el.onclick = function(){ //вешаем событие клика на каждую кнопку
    if(this.name == 'minus') { // при нажатии на минус
      if(this.nextSibling.innerHTML != '0'){ // если количество ноль, то перестаём отнимать и меняем цвет кнокпи
        this.nextSibling.innerHTML -= 1;
        this.nextSibling.innerHTML == '0' && this.classList.add('dropdown-room__btn--deactivate')
      } 
    } else if(this.name == 'plus'){ // при нажатии на плюс
      this.previousSibling.innerHTML == '0' && this.parentElement.firstChild.classList.remove('dropdown-room__btn--deactivate'); // меняем цвет кнопки, если был 0
      this.previousSibling.innerHTML ++; // увеличиваем значение на 1
    }
    //Заполнение Data и Value данными
    var itemNumber = document.querySelectorAll('.dropdown-room__number');
    var bedroom = itemNumber[0].innerHTML;
    var bed = itemNumber[1].innerHTML;
    var bathroom = itemNumber[2].innerHTML;
    var stringRoom = '';
    if(bedroom > 0) {stringRoom += bedroom + ((bedroom<2)?' спальня, ':(bedroom<5)?' спальни, ': ' спален, ');}
    if(bed > 0) {stringRoom += bed + ((bed < 2) ? ' кровать': (bed<5) ? ' кровати' : ' кроватей');}
    document.querySelectorAll('.dropdown-room__input').forEach(function(el){
      el.dataset.bedroom = bedroom;
      el.dataset.bed = bed;
      el.dataset.bathroom = bathroom;
      el.value = stringRoom;
    }); 
  }
});
var formExpanded = document.querySelector('.dropdown-room__form-expanded');
document.querySelectorAll('.dropdown-room__form').forEach(function(event){
  console.log(event);
  event.addEventListener('focus', function(){
    console.log('onfocus');
    formExpanded.classList.remove('dropdown-room__form-expanded--hide');
  });
  formExpanded.addEventListener('blur', function(){
    formExpanded.classList.add('dropdown-room__form-expanded--hide');
    console.log('blur');
  });
  console.log(formExpanded.lastChild.lastChild);
});
// Конец Управления кнопками + и -, выбора номера гостиницы  


