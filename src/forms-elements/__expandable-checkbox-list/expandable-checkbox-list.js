(function(){
  document.querySelectorAll('.checkbox-list__wrap').forEach(function(event){
    let checkboxList = event.lastElementChild;
    let checkboxIcon = event.firstElementChild.nextElementSibling; 
    let checkboxOverlay = checkboxList.previousElementSibling;
    event.addEventListener('click', function(){
      // let checkboxList = event.lastElementChild;
      // let checkboxIcon = event.firstElementChild.nextElementSibling; 
      // let checkboxOverlay = checkboxList.previousElementSibling;
      checkboxList.classList.add('checkbox-list__list--visible');
      checkboxIcon.classList.add('checkbox-list__icon--rotate');
      checkboxOverlay.classList.add('checkbox-list__overlay--open');
    });
    
    checkboxOverlay.addEventListener('click', function(elem){
      checkboxList.classList.remove('checkbox-list__list--visible');
      checkboxIcon.classList.remove('checkbox-list__icon--rotate');
      checkboxOverlay.classList.remove('checkbox-list__overlay--open');
      elem.stopPropagation();
    });
  });
}) ();