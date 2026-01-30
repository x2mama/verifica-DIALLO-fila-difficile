const lamp = document.getElementById("lamp")
const slideOpacita = document.getElementById("slider")
let opacita = 0;

function luceCaldaFn(){
    lamp.classList.toggle("lampada")
    lamp.classList.toggle("luceCalda")
    lamp.classList.remove("luceFredda")
}

function luceFreddaFn(){
    lamp.classList.toggle("lampada")
    lamp.classList.toggle("luceFredda")
    lamp.classList.remove("luceCalda")
}

function sliderFn(){
    slideOpacita.addEventListener('input', function() {
    lamp.style.opacity = this.value;
  });
}