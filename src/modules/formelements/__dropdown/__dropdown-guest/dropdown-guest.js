(function(){
//Блок управления выбора колличества гостей  

  var btnClearSt; // Статус кнопки "очистить"
  var inputGuest; // поле вывода и передачи данных о гостях
  var stringGuest;// Строка данных о гостях передаваемая в input value
  
  // Управление появлением и скрытием списка при клике
  document.querySelectorAll('.dropdown-guest__form').forEach(function(event){
    overlay = event.parentElement.lastChild.previousSibling; // Поле, закрывающее документ, кроме выпадающей формы
    // при клике по форме выбора гостей
    event.addEventListener('click', function(el){
      let form = el.target.parentElement;
      formExpanded = form.parentElement.lastChild; // выпадающая форма выбора гостей
      overlay = form.parentElement.lastChild.previousSibling; // Поле, закрывающее документ, кроме выпадающей формы
      btnClear = formExpanded.lastElementChild.firstChild; // кнопка очистки

      formExpanded.classList.remove('dropdown-guest__form-expanded--hide'); // Показываем всплывающую форму
      overlay.classList.add('dropdown-guest__overlay--open');               // добавляем overlay форме, при клике по overlay форма закрывается
      event.classList.add('dropdown-guest__form--border-bottom-90deg');     // делаем нижний угол у input 90 градусов
      if(!btnClearSt) btnClear.classList.add('dropdown-guest__btn-clear--hide'); // если статус кнопки false, скрываем её
      btnControl(formExpanded, form);                                             // запускаем функцию обработки нажатий на кнопки внутри всплывающей формы
    });
    
    // При клике за пределами формы
    overlay.addEventListener('click',function(el){
      formExpanded.classList.add('dropdown-guest__form-expanded--hide');  // скрываем всплывающую форму с кнопками
      overlay.classList.remove('dropdown-guest__overlay--open');          // Скрываем Overlay
      event.classList.remove('dropdown-guest__form--border-bottom-90deg');// закругляем углы у input
      el.stopPropagation();                                               // останавливаем всплытие события
    });
  });
  //////////////////////////////////////////
  //        Управление блоком кнопок      //
  //////////////////////////////////////////
  function btnControl(formEx,form){
    // при клике по кнопке "Очистить"
    btnClear = formEx.lastElementChild.firstChild // Кнопка "Очистить"
    btnClear.onclick = function(){
      inputGuest = form.firstChild;
      var itemNumber = formEx.querySelectorAll('.dropdown-guest__number');
      for(let i=0; i<itemNumber.length;i++){
        itemNumber[i].innerHTML = '0'; //обнуляем значения количества гостей
      }
      //Обнуляем значения переменных, input.value и скрываем кнопку "Очистить"
      inputGuest.dataset.adults = "0";
      inputGuest.dataset.children = "0";
      inputGuest.dataset.babies = "0";
      inputGuest.value = 'Сколько гостей'; 
      btnClear.classList.add('dropdown-guest__btn-clear--hide');
      for(i=0;i<btnForm.length;i++){
        deactivateBtn(btnForm[i]);  
      }
    }

    // при клике по кнопке "Применить"
    btnApple = btnClear.nextSibling // Кнопка "Применить"
    formExpanded = formEx;
    overlay = formExpanded.previousSibling;

    btnApple.onclick = function(){
      formExpanded.classList.add('dropdown-guest__form-expanded--hide');
      overlay.classList.remove('dropdown-guest__overlay--open');
      form.classList.remove('dropdown-guest__form--border-bottom-90deg');
    }

    //Обработка событий при клике по кнопкам "+" и "-"
    var btnForm = formEx.querySelectorAll('.dropdown-guest__btn');
    btnForm.forEach(function(el){
      deactivateBtn(el); // Если ноль, то меняем цвет кнопки и отменяем уменьшение значения
      
      //Вешаем события на на все кнопки "+" и "-"
      el.onclick = function(){
        inputGuest = form.firstChild;
        let btn = this; 
        clickBtn(btn); // Увеличение или уменьшения значения при клике по кнопке "+" или "-"

        //Заполнение input Data и Value данными
        itemNumber = formEx.querySelectorAll('.dropdown-guest__number');
        var adults = itemNumber[0].innerHTML;
        var children = itemNumber[1].innerHTML;
        var babies = Number.parseInt(itemNumber[2].innerHTML);
        let sumGuest = Number.parseInt(adults) +  Number.parseInt(children); // всего гостей 
        let babiesSum = ((babies !== 0) ? (babies < 2) ? babies + ' младенец' : (babies < 5) ? babies + ' младенца' : babies + ' младенцев' : ""); 
        let strGuest = sumGuest + ((sumGuest == 0)? 'Сколько гостей' : (sumGuest<2)? ' гость' : (sumGuest<5)? ' гостя': ' гостей');// Строка вывода данных в INPUT
        stringGuest = (babiesSum == 0)? strGuest: strGuest + ', '+ babiesSum;
        // скрытие и отображение кнопки "Очистить"
        if(sumGuest == 0) {
          stringGuest = 'Сколько гостей'; 
          btnClear.classList.add('dropdown-guest__btn-clear--hide');
          btnClearSt = false;
        } else { 
          btnClear.classList.remove('dropdown-guest__btn-clear--hide');
          btnClearSt = true;
        }
        // Заполнение данных data в input 
        inputGuest.dataset.adults = adults;
        inputGuest.dataset.children = children;
        inputGuest.dataset.babies = babies;
        inputGuest.value = stringGuest;
      }
    });
  }

  //////////////////////////////////////////
  //          При клике на + или -        //
  //////////////////////////////////////////
  function clickBtn(btn){
    if(btn.name == 'minus') { // при нажатии на минус
      if(btn.nextSibling.innerHTML != '0'){ // если количество ноль, то перестаём отнимать и меняем цвет кнокпи
        btn.nextSibling.innerHTML --;
        btn.nextSibling.innerHTML == '0' && btn.classList.add('dropdown-guest__btn--deactivate')
      } 
    } else if(btn.name == 'plus'){ // при нажатии на плюс
      btn.previousSibling.innerHTML == '0' && btn.parentElement.firstChild.classList.remove('dropdown-guest__btn--deactivate'); // меняем цвет кнопки, если был 0
      btn.previousSibling.innerHTML ++; // увеличиваем значение на 1
    }
  }

 ///////////////////////////////////////////////////
 //          Деактивация кнопки - при нуле        //
 ///////////////////////////////////////////////////
  function deactivateBtn(btn){
    if(btn.name == 'minus'){ //При нажатии на кнопку "-"
      if(btn.nextSibling.innerHTML == '0') { //если гостей 0
        btn.classList.add('dropdown-guest__btn--deactivate'); // то декативируем кнопку(меняем цвет кнопки)
      }
    }
  };
})();