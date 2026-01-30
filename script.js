const lamp = document.getElementById("lamp")
const slideOpacita = document.getElementById("slider")
const rosso = document.getElementById("rosso")
const verde = document.getElementById("verde")
const blu = document.getElementById("blu")
let opacita = 0;


function luceCaldaFn(){
    lamp.classList.toggle("lampada")
    lamp.classList.toggle("luceCalda")
    lamp.classList.remove("luceFredda")
    lamp.classList.remove("rosso")
    lamp.classList.remove("verde")
    lamp.classList.remove("blu")
}

function luceFreddaFn(){
    lamp.classList.toggle("lampada")
    lamp.classList.toggle("luceFredda")
    lamp.classList.remove("luceCalda")
    lamp.classList.remove("rosso")
    lamp.classList.remove("verde")
    lamp.classList.remove("blu")
}

function luceRGBFn(){
    // lamp.classList.toggle("lampada")
    // lamp.classList.toggle("luceRGB")
    // lamp.classList.remove("luceCalda")
    // lamp.classList.remove("luceFredda")
    
    rosso.style.display = "inline-block";
    verde.style.display = "inline-block";
    blu.style.display = "inline-block";
}

function sliderFn(){
    slideOpacita.addEventListener('input', function() {
    lamp.style.opacity = this.value;
  });
}

function changeThemeFn(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        lamp.style.boxShadow = "0 0 20px 5px rgba(255, 255, 255, 0.5)";
    }

}

function setRossoFn(){
    lamp.classList.remove("luceCalda")
    lamp.classList.remove("luceFredda")
    lamp.classList.remove("verde")
    lamp.classList.remove("blu")
    lamp.classList.add("rosso")

}
function setVerdeFn(){
    lamp.classList.remove("luceCalda")
    lamp.classList.remove("luceFredda")
    lamp.classList.remove("rosso")
    lamp.classList.remove("blu")
    lamp.classList.add("verde")
}
function setBluFn(){
    lamp.classList.remove("luceCalda")
    lamp.classList.remove("luceFredda")
    lamp.classList.remove("rosso")
    lamp.classList.remove("verde")
    lamp.classList.add("blu")

}
let timer;
function setTimerFn(){
    timer = document.getElementById("timer").value;
    document.getElementById("timerDisplay").innerText = `La lampada si spegnerà tra ${timer} minuti`;
}
