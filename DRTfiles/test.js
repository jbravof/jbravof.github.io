var dato01 = "";
var dato02 = "";
var dato03 = "";
var dato04 = "";
dato01 = document.getElementsByClassName("cData");
dato02 = dato01.length;

console.log(dato02);

dato03 = dato01[0].innerHTML;

console.log(dato03);

dato04 = prompt("Index NO?", 0);

dato03 = dato01[dato04].parentElement.innerHTML;


document.body.innerHTML = "<div id='div_body'>" + document.body.innerHTML + "</div>"
document.body.innerHTML = "<style>#div_body{position:absolute; top: 66px;    left: 0;    right: 0;    bottom: 0;}.div_01{position: relative;    border: outset;    height: 4%;    border-radius: 20px;    color: white;    padding: 10px;}</style><div class='div_01'>hola</div>" + document.body.innerHTML;