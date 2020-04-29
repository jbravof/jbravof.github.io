function uno() {
    document.head.innerHTML += "<style>#div_body{position:absolute; top: 66px;    left: 0;    right: 0;    bottom: 0;}.div_01{position: relative;    border: outset;    height: 4%;    border-radius: 20px;    color: blue;    padding: 10px;}</style>";
    //   document.body.innerHTML = "<div id='div_body'>" + document.body.innerHTML + "</div>"
    document.body.innerHTML = "<div id='div_01' class='div_01'>" +
        "<button onclick='boton_01()'>boton</button><hr>" +
        "</div>" +
        document.body.innerHTML;
}

function boton_00() {
    location.assign("https://mail.dragados-usa.com/owa/auth.owa")
}

function boton_01() {
    //  alert(44);
    other();
    boton_02();
}
var win00 = "";

function boton_02() {
    //  window.open('about:blank', 'win01', 'location=yes,directories=yes,status=yes,resizable=yes,scrollbars=yes,height=48,width=64', false);
    //divVLVIL
    var dato04 = 0;
    var i = 0;


    //var doc01 = document.getElementById("divVLVIL").getElementsByTagName("DIV");
    var doc01 = document.getElementsByClassName("r1"); //.getElementById("SR");
    var doc02 = document.getElementsByClassName("r2");
    console.log(doc01.length);
    console.log(doc01);


    //  win01.innerHTML = document.getElementById("div_01").outerHTML;
    //  boton_03()
    dato04 = doc01.length;
    for (i = 0; i < dato04; i++) {
        console.log(doc01[i].tagName);
        // document.getElementById("div_01").innerHTML += "<div class='div_02'>" + dato01[i].parentElement.innerHTML + "</div>";
        var inner01 = doc01[i].getElementsByClassName("c2")[0].innerHTML; //divSenderList  .getElementsByClassName("*")[0].innerHTML; //.getElementById("divSubject").innerHTML;
        var inner02 = doc02[i].getElementsByClassName("c2")[0].innerHTML;
        // dato013[i].innerHTML; //.parentElement.getElementsByClassName("*")[1].innerHTML;
        document.getElementsByClassName("div_011")[0].innerHTML += "<div class='div_02'><h3 onclick='crea_011(" + i + ")'>" + inner01 + "</h3><hr><p>" + inner02 + "<p></div>";

        //divSubject

    }
}

function click01(valori) {
    alert(valori);

}

function boton_03() {
    //  window.open('about:blank', 'win01', 'location=yes,directories=yes,status=yes,resizable=yes,scrollbars=yes,height=48,width=64', false); 

    // alert(win00.document.innerHTML);
    //  setTimeout(function() { win00.document.write(document.getElementById("div_01").innerHTML) }, 4000);
    // win00.document.write("<script type='text/javascript' src='http://127.0.0.1:8887/DRTfiles/owa.js'></script><style>.div_02{        border-radius:20px;        border: outset;        float:left;        width:200px;        height:300px;        margin: 10px;            overflow: auto;        padding:1%;        }</style>" + document.getElementById("div_01").innerHTML);
    win00.document.write("<script type='text/javascript' src='http://127.0.0.1:8887/DRTfiles/owa.js'></script><link type='text/css' rel='stylesheet' href='http://127.0.0.1:8887/DRTfiles/owa.css'>" + document.getElementsByClassName("div_01")[0].outerHTML);

}

function boton_04() {
    setTimeout(function() { boton_03() }, 1000);
    win00 = window.open('about:blank', 'win01', 'location=yes,directories=yes,status=yes,resizable=yes,scrollbars=yes,height=48,width=64', false);


    // setTimeout(function() { win01.document.write(document.getElementById("div_01").innerHTML) }, 4000);
}

function other() {
    var i = 0;
    var dato01 = "";
    var dato02 = "";
    var dato03 = "";
    var dato04 = 0;
    dato01 = document.getElementsByClassName("cData");
    dato012 = document.getElementsByClassName("r2");
    dato013 = document.getElementsByClassName("r1");


    dato02 = dato01.length;

    //  alert(dato02);

    //  dato03 = dato01[0].parentElement.innerHTML;

    //  alert(dato03);

    dato04 = dato02.length; // '30'; // prompt("Index NO?", 0);

    //  dato03 = dato01[dato04].parentElement.innerHTML;

    for (i = 0; i < dato04; i++) {
        console.log(dato01[i].tagName);
        // document.getElementById("div_01").innerHTML += "<div class='div_02'>" + dato01[i].parentElement.innerHTML + "</div>";
        var inner01 = dato012[i].innerHTML; //.getElementsByClassName("*")[0].innerHTML; //.getElementById("divSubject").innerHTML;
        var inner02 = dato013[i].innerHTML; //.parentElement.getElementsByClassName("*")[1].innerHTML;
        document.getElementsByClassName("div_011")[0].innerHTML += "<div class='div_02'><h3>" + inner01 + "</h3><hr>" + inner02 + "</div>";

        //divSubject

    }

}
//setTimeout(function() { uno() }, 3000);
function resize_01() {
    //  alert(document.getElementsByClassName("div_02").length);///resize_01

    // for (i = 0; i < document.getElementsByClassName("div_02").length; i++) {

    //  document.getElementsByClassName("div_02")[i].style.width = "100px";
    // document.getElementsByClassName("div_02")[i].style.height = "150px";
    // document.getElementsByClassName("div_02")[i].style.zoom = ".5";



    //}

    alert(document.getElementById("ifBdy").contentWindow.document.body.innerHTML);
}

function resize_02() {
    //  alert(document.getElementsByClassName("div_02").length);

    for (i = 0; i < document.getElementsByClassName("div_02").length; i++) {

        //  document.getElementsByClassName("div_02")[i].style.width = "100px";
        // document.getElementsByClassName("div_02")[i].style.height = "150px";
        document.getElementsByClassName("div_02")[i].style.zoom = "1";



    }


}

function number_01() {

    for (i = 0; i < document.getElementsByClassName("div_02").length; i++) {

        var zoom01 = "." + numb01.value;
        document.getElementsByClassName("div_02")[i].style.zoom = zoom01;



    }

}

function crea_01() {

    for (i = 0; i < document.getElementsByTagName("p").length; i++) {
        document.getElementsByTagName("p")[i].style.display = "none";
        document.getElementsByTagName("p")[i].parentElement.style.height = "auto";

    }
}

function crea_011(valori) {

    // for (i = 0; i < document.getElementsByTagName("p").length; i++) {
    if (document.getElementsByClassName("div_02")[valori].getElementsByTagName("p")[0].style.display == "none") {
        document.getElementsByClassName("div_02")[valori].getElementsByTagName("p")[0].style.display = "block";
        document.getElementsByClassName("div_02")[valori].getElementsByTagName("p")[0].parentElement.style.height = "300px";
    } else {


        document.getElementsByClassName("div_02")[valori].getElementsByTagName("p")[0].style.display = "none";
        document.getElementsByClassName("div_02")[valori].getElementsByTagName("p")[0].parentElement.style.height = "auto";
    }
    //  }
    //  alert(valori);
    win00.opener.document.getElementsByClassName("r2")[valori].click();
}

function crea_02() {

    for (i = 0; i < document.getElementsByTagName("p").length; i++) {
        document.getElementsByTagName("p")[i].style.display = "block";
        document.getElementsByTagName("p")[i].parentElement.style.height = "300px";

    }
}

function crea_021(valori) {

    // for (i = 0; i < document.getElementsByTagName("p").length; i++) {
    document.getElementsByTagName("p")[valori].style.display = "block";
    document.getElementsByTagName("p")[valori].parentElement.style.height = "300px";

    //  }
}