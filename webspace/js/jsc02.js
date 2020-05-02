 window.domain = "http://localhost/";
function search01() {

    var elem01 = document.getElementsByTagName("TITLE")[0];
    var elem02 = document.getElementsByTagName("A")[0];

    elem02.innerHTML = elem01.innerHTML;

    //alert(99977777);
}
function load001() {
    alert("si");

    var browser01 = document.getElementsByTagName("IFRAME")[2];

    var content01 = browser01.contentWindow.document;

    var suma01 = content01.getElementsByTagName("*").length;
    alert(suma01);

}
function load002() {
    window.domain = "http://localhost/";
    //if we remove this line then the below line will not work and throw a same origin policy exception.
    window.parent.document.body.style.backgroundColor = "blue";

    //window.document.domain = "http://localhost/";//you also need to set the parent's document.domain variable
    window.document.getElementById("myIFrame").contentWindow.document.body.style.backgroundColor = "red";
 load001();

}
function boton2(text001) {
    //alert("botonuuuuu");
    //alert(text001);

    switch (text001) {
    case 'boton01':
        document.write("Good job<br />" + text001);
        break;

    case 'boton02':
        document.write("Pretty good<br />");
        document.write("Good job<br />" + text001);
        break;

    case 'C':
        document.write("Passed<br />");
        break;

    case 'D':
        document.write("Not so good<br />");
        break;

    case 'F':
        document.write("Failed<br />");
        break;

    default:
        document.write("Unknown grade<br />")
    }

}
function boton() {
    alert("botonuuuiiiiiiuu");

}

