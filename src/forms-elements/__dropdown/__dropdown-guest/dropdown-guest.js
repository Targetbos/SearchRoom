//Управляем кнопками + и -, выбора колличества гостей  
document.querySelectorAll('.dropdown-guest__btn').forEach(function(el){
  
  if(el.name == 'minus'){ //При нажатии на кнопку "-"
    if(el.nextSibling.innerHTML == '0') { //если гостей 0
      el.classList.add('dropdown-guest__btn--deactivate'); // то декативируем кнопку(меняем цвет кнопки)
    }    
  }

  el.onclick = function(elem){ //вешаем событие клика на каждую кнопку
    console.log(elem.path[3].lastElementChild.firstChild);
    let btn = this;
    if(btn.name == 'minus') { // при нажатии на минус
      if(btn.nextSibling.innerHTML != '0'){ // если количество ноль, то перестаём отнимать и меняем цвет кнокпи
        btn.nextSibling.innerHTML -= 1;
        btn.nextSibling.innerHTML == '0' && btn.classList.add('dropdown-guest__btn--deactivate')
      } 
    } else if(btn.name == 'plus'){ // при нажатии на плюс
      btn.previousSibling.innerHTML == '0' && btn.parentElement.firstChild.classList.remove('dropdown-guest__btn--deactivate'); // меняем цвет кнопки, если был 0
      btn.previousSibling.innerHTML ++; // увеличиваем значение на 1
    }
    let btnClear = elem.path[3].lastElementChild.firstChild // Кнопка "Очистить"

    //Заполнение input Data и Value данными
    var itemNumber = document.querySelectorAll('.dropdown-guest__number');
    var adults = itemNumber[0].innerHTML;
    var children = itemNumber[1].innerHTML;
    var babies = itemNumber[2].innerHTML;
    var stringguest = '';
    
    if(adults > 0) {stringguest += adults + ((adults < 2)?' взрослый, ':' взрослых, ');}
    if(children > 0) {stringguest += children + ((children < 2) ? ' ребенок, ': (children < 5) ? ' ребенка, ' : ' детей, ');}
    if(babies > 0) {stringguest += babies + ((babies < 2) ? ' младенец ': (babies < 5) ? ' младенца ' : ' младенцев ');}
    
    if(babies == '0' &&  children == '0' && adults == '0') {
      stringguest = 'Сколько гостей'; 
      btnClear.classList.add('dropdown-guest__btn-clear--hide');
    } else { 
      btnClear.classList.remove('dropdown-guest__btn-clear--hide');
    }
    
    document.querySelectorAll('.dropdown-guest__input').forEach(function(el){
      el.dataset.adults = adults;
      el.dataset.children = children;
      el.dataset.babies = babies;
      el.value = stringguest;
    }); 
  }
});
// Управление появлением и скрытием списка при клике
document.querySelectorAll('.dropdown-guest__form').forEach(function(event){
  let formExpanded = event.offsetParent.lastElementChild;
  let overlay = event.offsetParent.lastElementChild.previousSibling;
  event.addEventListener('click', function(){
    formExpanded.classList.remove('dropdown-guest__form-expanded--hide');
    overlay.classList.add('dropdown-guest__overlay--open');
  });
  overlay.addEventListener('click',function(el){
    formExpanded.classList.add('dropdown-guest__form-expanded--hide');
    overlay.classList.remove('dropdown-guest__overlay--open');
    el.stopPropagation();
  });
});
// Конец Управления кнопками + и -, выбора количества гостей