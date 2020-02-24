var checkboxOverlay = document.querySelector('.checkbox-list__overlay');
var checkboxIcon = document.querySelectorAll('.checkbox-list__icon');
var checkboxItem = document.querySelector('.checkbox-list__item');

document.querySelectorAll('.checkbox-list__wrap').forEach(function(event){
  event.addEventListener('click', function(el){
    checkboxItem.classList.add('checkbox-list__item--visible');
    checkboxIcon[1].classList.add('checkbox-list__icon--rotate');
    checkboxOverlay.classList.add('checkbox-list__overlay--open');
  });
  
  checkboxOverlay.addEventListener('click', function(elem){
    checkboxItem.classList.remove('checkbox-list__item--visible');
    checkboxIcon[1].classList.remove('checkbox-list__icon--rotate');
    checkboxOverlay.classList.remove('checkbox-list__overlay--open');
    elem.stopPropagation();
  });
});