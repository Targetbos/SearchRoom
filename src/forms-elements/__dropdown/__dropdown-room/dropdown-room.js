(function(){

  // Управление появлением и скрытием списка при клике
  document.querySelectorAll('.dropdown-room__form').forEach(function(event){
    event.onclick =  function(elem){
      let formExpanded = event.lastElementChild;
      let overlay = formExpanded.previousElementSibling;
     
      formExpanded.classList.remove('dropdown-room__form-expanded--hide');
      overlay.classList.add('dropdown-room__overlay--open');
     
      controlBtnForm(formExpanded);
     
      overlay.onclick = function(el){
        formExpanded.classList.add('dropdown-room__form-expanded--hide');
        overlay.classList.remove('dropdown-room__overlay--open');
        el.stopPropagation();
      }
    }
  });
  
  //Управляем кнопками + и -, выбора номера гостиницы  
  function controlBtnForm(formEx){
    formEx.querySelectorAll("button").forEach(function(el){
      
      if(el.name == 'minus'){ 
        el.nextSibling.innerHTML == '0' && el.classList.add('dropdown-room__btn--deactivate'); // Если ноль, то декативируем кнопку(меняем цвет кнопки)
      }

      el.onclick = function(){ //вешаем событие клика на каждую кнопку
        let btn = this;
        if(btn.name == 'minus') { // при нажатии на минус
          if(btn.nextSibling.innerHTML != '0'){ // если количество ноль, то перестаём отнимать и меняем цвет кнокпи
            btn.nextSibling.innerHTML -= 1; //уменьшаем значение на 1
            btn.nextSibling.innerHTML == '0' && btn.classList.add('dropdown-room__btn--deactivate')
          } 
        } else if(btn.name == 'plus'){ // при нажатии на плюс
          btn.previousSibling.innerHTML == '0' && btn.parentElement.firstChild.classList.remove('dropdown-room__btn--deactivate'); // меняем цвет кнопки, если был 0
          btn.previousSibling.innerHTML ++; // увеличиваем значение на 1
        }

        //Заполнение input Data и Value данными
        let itemNumber = formEx.querySelectorAll('.dropdown-room__number');

        var bedroom = itemNumber[0].innerHTML;
        var bed = itemNumber[1].innerHTML;
        var bathroom = itemNumber[2].innerHTML;
        var stringRoom = '';

        if(bedroom > 0) {stringRoom += bedroom + ((bedroom<2)?' спальня, ':(bedroom<5)?' спальни, ': ' спален, ');} 
        if(bed > 0) {stringRoom += bed + ((bed < 2) ? ' кровать': (bed<5) ? ' кровати' : ' кроватей');}
        if(bedroom == 0 && bed == 0){stringRoom = "Выберите комнату";}
        
        let dataInputRoom = formEx.parentNode.firstChild;
        dataInputRoom.dataset.bedroom = bedroom;
        dataInputRoom.dataset.bed = bed;
        dataInputRoom.dataset.bathroom = bathroom;
        dataInputRoom.value = stringRoom;
      }
    });
  }
  
  // Конец Управления кнопками + и -, выбора номера гостиницы 
})();


