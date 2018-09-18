var a = (Math.round(Math.random()*30));


var mesure = document.getElementById("measure");

a = a*5;
mesure.innerHTML="<img src='./img/measure.png' id='measure' alt='thermo basis' width='30px' height='"+a+"'>";


if (a<=10) {
 document.write("the weather is cold");
} else {
  document.write("the weather is moderate");
}