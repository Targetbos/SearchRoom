//Блок управления выбора колличества гостей  

var btnClearSt; // Статус кнопки "очистить"
var inputGuest; // поле вывода и передачи данных о гостях
var stringGuest;// Строка данных о гостях передаваемая в input value
// Управление появлением и скрытием списка при клике
document.querySelectorAll('.dropdown-guest__form').forEach(function(event){
  let formExpanded = event.parentElement.lastChild; // выпадающая форма выбора гостей
  let overlay = event.parentElement.lastChild.previousSibling; // Поле, закрывающее документ, кроме выпадающей формы
  let btnClear = formExpanded.lastElementChild.firstChild; // кнопка очистки
  
  // при клике по форме выбора гостей
  event.addEventListener('click', function(el){
    let form = el.srcElement.parentElement;
    formExpanded = form.parentElement.lastChild; // выпадающая форма выбора гостей
    overlay = form.parentElement.lastChild.previousSibling; // Поле, закрывающее документ, кроме выпадающей формы
    btnClear = formExpanded.lastElementChild.firstChild; // кнопка очистки

    formExpanded.classList.remove('dropdown-guest__form-expanded--hide'); // Показываем всплывающую форму
    overlay.classList.add('dropdown-guest__overlay--open');               // добавляем overlay форме, при клике по overlay форма закрывается
    event.classList.add('dropdown-guest__form--border-bottom-90deg');     // делаем нижний угол у input 90 градусов
    if(!btnClearSt) btnClear.classList.add('dropdown-guest__btn-clear--hide'); // если статус кнопки false, скрываем её
    btnControl(formExpanded);                                             // запускаем функцию обработки нажатий на кнопки внутри всплывающей формы
  });
  
  // При клике за пределами формы
  overlay.addEventListener('click',function(el){
    formExpanded.classList.add('dropdown-guest__form-expanded--hide');  // скрываем всплывающую форму с кнопками
    overlay.classList.remove('dropdown-guest__overlay--open');          // Скрываем Overlay
    event.classList.remove('dropdown-guest__form--border-bottom-90deg');// закругляем углы у input
    el.stopPropagation();                                               // останавливаем всплытие события
  });
});

// управление блоком кнопок 
function btnControl(formEx){
  // при клике по кнопке "Очистить"
  btnClear = formEx.lastElementChild.firstChild // Кнопка "Очистить"
  btnClear.onclick = function(){
    inputGuest = formEx.parentElement.firstChild.firstChild;
    var itemNumber = formEx.querySelectorAll('.dropdown-guest__number');
    for(let i=0; i<itemNumber.length;i++){
      itemNumber[i].innerHTML = '0'; //обнуляем значения количества гостей
    }
    //Обнуляем значения переменных, input.value и скрываем кнопку "Очистить"
    adults = "0";
    children = "0";
    babies = "0";
    inputGuest.value = 'Сколько гостей'; 
    btnClear.classList.add('dropdown-guest__btn-clear--hide');
    for(i=0;i<btnForm.length;i++){
      deactivateBtn(btnForm[i]);  
    }
  }

  // при клике по кнопке "Применить"
  btnApple = btnClear.nextSibling // Кнопка "Применить"
  formExpanded = formEx;
  overlay = formEx.previousSibling;
  let formDiv = overlay.previousSibling;

  btnApple.onclick = function(){
    formExpanded.classList.add('dropdown-guest__form-expanded--hide');
    overlay.classList.remove('dropdown-guest__overlay--open');
    formDiv.classList.remove('dropdown-guest__form--border-bottom-90deg');
  }

  //Обработка событий при клике по кнопкам "+" и "-"
  var btnForm = formEx.querySelectorAll('.dropdown-guest__btn');
  btnForm.forEach(function(el){
    deactivateBtn(el); // Если ноль, то меняем цвет кнопки и отменяем уменьшение значения
    
    //Вешаем события на на все кнопки "+" и "-"
    el.onclick = function(){ 
      inputGuest = formEx.parentElement.firstChild.firstChild;
      let btn = this; 
      clickBtn(btn); // Увеличение или уменьшения значения при клике по кнопке "+" или "-"

      //Заполнение input Data и Value данными
      itemNumber = formEx.querySelectorAll('.dropdown-guest__number');
      var adults = itemNumber[0].innerHTML;
      var children = itemNumber[1].innerHTML;
      var babies = itemNumber[2].innerHTML;
      stringGuest = ''; // Строка вывода данных в INPUT

      if(adults > 0) {stringGuest += adults + ((adults < 2)?' взрослый, ':' взрослых, ');}
      if(children > 0) {stringGuest += children + ((children < 2) ? ' ребенок, ': (children < 5) ? ' ребенка, ' : ' детей, ');}
      if(babies > 0) {stringGuest += babies + ((babies < 2) ? ' младенец ': (babies < 5) ? ' младенца ' : ' младенцев ');}
      
      // скрытие и отображение кнопки "Очистить"
      if(babies == '0' &&  children == '0' && adults == '0') {
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

// Функция увеличения или уменьшения значения при клике по кнопке "+" или "-"
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

// Проверяет состояние счётчика и если он "0", то меняет цвет кнопки 
function deactivateBtn(btn){
  if(btn.name == 'minus'){ //При нажатии на кнопку "-"
    if(btn.nextSibling.innerHTML == '0') { //если гостей 0
      btn.classList.add('dropdown-guest__btn--deactivate'); // то декативируем кнопку(меняем цвет кнопки)
    }
  }
};

// Конец блока управления выбора количества гостей