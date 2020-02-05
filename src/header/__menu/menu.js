var link = document.querySelectorAll(".menu__link");
link.forEach(function(el){
    el.onclick = function(){
        for(let i=0; i<link.length; i++){
            link[i].classList.remove("menu__link--active");
        }
        this.classList.add("menu__link--active");
    }
});

