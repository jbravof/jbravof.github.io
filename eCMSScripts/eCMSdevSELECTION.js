setTimeout(function() {
    document.getElementById("form1:companyDiv").setAttribute("size", "6");
    document.getElementById("form1:companyDiv").setAttribute("style", "margin-left:10px;font-size:2vw");

    document.getElementById("form1:lbccDiv").setAttribute("size", "2");
    document.getElementById("form1:lbccDiv").setAttribute("style", "margin-left:10px;border:outset");
    carga01();

}, 500);
//document.getElementsByTagName("table")form1:lbccDiv



function carga01() {
    document.getElementById("div_content").innerHTML = "";
    var sel01 = document.getElementsByTagName("SELECT")[0];
    var opt01 = sel01.getElementsByTagName("OPTION");

    console.log(opt01.length)
    var sel02 = document.getElementById("div_content");
    var div_crea01 = "";
    for (i = 1; i < opt01.length; i++) {
        var opt02 = opt01[i].innerHTML;
        console.log(opt02.split(" ").length);
        console.log(opt02.substr(0, 8));
        var opt03 = opt02.split(" ")[0];
        var opt04 = opt02.substr(0, 8);

        var opt05 = opt04.split(" ")[0]; //.split(" ")[0];
        var opt06 = opt02.substr(4, 4);
        div_crea01 += "<div class='cl01 border_01'>";
        div_crea01 += "<h3 onclick='check04(" + i + ")' class='border_01 cl04'>" + opt02 + "<div class='cl05'>" + opt01[i].value + "</div></h3>";
        div_crea01 += "<div style='display:block' class='cl02'><hr>";

        div_crea01 += "<br>Co: <p class='co'>" + opt05 + "</p>";
        div_crea01 += "<br>";
        div_crea01 += "Div: <p class='co'>" + opt06 + "</p>";
        div_crea01 += "<br>";
        var opt07 = check01(opt06.trim(), i);
        div_crea01 += "Type : <div class='cl03'>" + opt07 + "</div>";

        div_crea01 += "<br>";
        var opt08 = check02(opt05.trim());
        div_crea01 += "<br><hr><br></div><h3 class='border_01 title01'>Affiliate :<img onclick='uno(" + i + ");dos3(" + i + ");" + "' class='img01' src='" + opt08 + "'> " + "</h3>";

        div_crea01 += "</div>";



    }
    sel02.innerHTML += div_crea01;
    //  logo01();
    show01();
}

//document.getElementById("content")

function uno(valori) {
    //  alert(this.parentElement.parentElement.parentElement.outerHTML)
    //   alert(document.getElementsByClassName("cl05")[valori - 1].innerHTML)
    document.getElementById("form1:companyDiv").value = document.getElementsByClassName("cl05")[valori - 1].innerHTML;
    //   document.getElementsByClassName("cl01")[valori - 1].showModal();

}

function check04(valori) {
    //  alert(document.getElementById("div_content").getElementsByTagName("DIV")[valori - 1].getElementsByTagName("H3")[0].innerHTML);
    //  document.getElementById("div_content").getElementsByTagName("DIV")[valori - 1].getElementsByTagName("H3")[0].style.background = "red";
    // document.getElementById("div_content").getElementsByTagName("DIV")[valori].getElementsByTagName("DIV")[0].style.display = "none";

    var display01 = document.getElementsByClassName("cl02")[valori - 1].style.display; // = "none";

    if (display01 == "block") {
        document.getElementsByClassName("cl02")[valori - 1].style.display = "none";
        //   document.getElementsByClassName("cl01")[valori - 1].getElementsByTagName("h3")[1].style.display = "none";
    } else {
        document.getElementsByClassName("cl02")[valori - 1].style.display = "block";
        //  document.getElementsByClassName("cl01")[valori - 1].getElementsByTagName("h3")[1].style.display = "block";

    }

}

function check01(valori, valori2) {
    var valor6 = "";
    if (valori == "1") {
        valor6 = "Branch";
        //  valor08 = check04(valori2);
    } else {
        if (valori.substr(0, 1) < "300") {
            valor6 = "Own Job";
            //  valor08 = check04(valori2);
        } else {
            valor6 = "Other"
        }

        // check04(valori2);
    }
    return valor6;
}

function check03(valori2) {
    document.getElementById("div_tool").getElementsByTagName("DIV")[valori2].style.background = "red";
    //    getElementsByTagName("OPTION")


}

function check02(valori) {
    //https://www.dragados.com/images/client_logo4.png
    var valor6 = "";
    var valor7 = "";

    if (valori == "50") {
        valor6 = "https://www.dragados.com/images/client_logo4.png";
        valor7 = "Prince"
    } else {
        if (valori == "45") {

            valor6 = "https://www.dragados.com/images/JWhite.jpg"
        } else {

            if (valori == "75") {

                valor6 = "https://www.dragados.com/images/client_logo1.png"
            } else {

                if (valori == "80") {

                    valor6 = "https://www.dragados.com/images/client_logo2.png"
                } else {

                    if (valori == "9") {

                        valor6 = "https://www.dragados.com/images/oc_logo10.jpg"
                    } else {

                        if (valori == "10") {

                            valor6 = "https://www.dragados.com/images/oc_logo10.jpg"
                        } else {

                            if (valori == "96") {

                                valor6 = "https://www.dragados.com/images/oc_logo10.jpg"
                            } else {

                                if (valori == "11") {

                                    valor6 = "https://www.dragados.com/images/oc_logo10.jpg"
                                } else {

                                    if (valori == "60") {

                                        valor6 = "https://www.dragados.com/images/client_logo3.png"
                                    } else {

                                        if (valori == "61") {

                                            valor6 = "https://www.dragados.com/images/client_logo3.png"
                                        } else {

                                            if (valori == "62") {

                                                valor6 = "https://www.dragados.com/images/client_logo3.png"
                                            } else {

                                                valor6 = "https://www.dragados.com/images/oc_logo11.jpg"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }










    return valor6;
}

function logo01() {
    var logo01 = "";
    logo01 += "<button onclick='dos00()'>";
    logo01 += "<img class='img01'  src='";
    logo01 += "https://www.dragados.com/images/client_logo4.png"
    logo01 += "'></button>";



    document.getElementById("div_tool").innerHTML += logo01;


}

function dos(valori) {

    document.getElementById("content").innerHTML += document.getElementsByClassName("cl01")[valori].innerHTML;
}

function show01() {
    for (i = 0; i < document.getElementsByClassName("cl01").length; i++) {
        if (document.getElementsByClassName("cl03")[i].innerHTML == "Branch") {
            console.log(document.getElementsByClassName("cl03")[i].innerHTML);
            document.getElementsByClassName("cl03")[i].style.background = "red";
            document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].style.border = "outset 4px red";
        } else {

            if (document.getElementsByClassName("cl03")[i].innerHTML == "Own Job") {
                document.getElementsByClassName("cl03")[i].style.background = "blue";
                document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].style.border = "outset 4px blue";

            } else {
                document.getElementsByClassName("cl03")[i].style.background = "green";
                document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].style.border = "outset 4px green";
                //  document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].click();
            }
        }
    }


}

function show02() {
    for (i = 0; i < document.getElementsByClassName("cl03").length; i++) {
        document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("div")[1].style.display = "none";
        //   document.getElementsByClassName("cl01")[i].getElementsByTagName("h3")[1].style.display = "none";

    }

}

function show03() {
    for (i = 0; i < document.getElementsByClassName("cl03").length; i++) {
        document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("div")[1].style.display = "block";
        //  document.getElementsByClassName("cl01")[i].getElementsByTagName("h3")[1].style.display = "block";

    }

}

function number_01() {

    for (i = 0; i < document.getElementsByClassName("cl01").length; i++) {

        var zoom01 = numb01.value;
        document.getElementsByClassName("cl01")[i].style.zoom = zoom01;
        document.getElementsByClassName("cl01")[i].style.height = "auto";



    }

}

function submit01() {

    document.getElementById("form1:submit").click();
}
var cons_01 = 1;

function dos00(tipo01) {
    // document.getElementById("div_content").innerHTML = "";
    var sel01 = document.getElementsByClassName("cl01");
    //  document.getElementById(tipo01).id = "2";

    // var prompt01 = prompt("valor", "50");

    //  var sel02 = document.getElementById("div_content");
    var div_crea01 = "";
    for (i = 0; i < sel01.length; i++) {
        var opt01 = sel01[i].getElementsByClassName("co");
        //  dos2(opt01[0].innerHTML);

        var get01 = inp01.value;
        if (opt01[0].innerHTML == get01) { // "45") {
            document.getElementsByClassName("cl01")[i].style.display = "block";

        } else {
            //  if (tipo01 = "1") {
            document.getElementsByClassName("cl01")[i].style.display = "none";

            //    } else {
            //     document.getElementsByClassName("cl01")[i].style.display = "block";
            //  document.getElementById("2").id = "1";

            //   }
        }


    }


}

function dos001(tipo01) {
    // document.getElementById("div_content").innerHTML = "";
    var sel01 = document.getElementsByClassName("cl01");
    //  document.getElementById(tipo01).id = "2";

    // var prompt01 = prompt("valor", "50");

    //  var sel02 = document.getElementById("div_content");
    var div_crea01 = "";
    for (i = 0; i < sel01.length; i++) {
        var opt01 = sel01[i].getElementsByClassName("co");
        //  dos2(opt01[0].innerHTML);

        var get01 = tipo01; // inp01.value;
        if (opt01[0].innerHTML == get01) { // "45") {
            document.getElementsByClassName("cl01")[i].style.display = "block";

        } else {
            //  if (tipo01 = "1") {
            document.getElementsByClassName("cl01")[i].style.display = "none";

            //    } else {
            //     document.getElementsByClassName("cl01")[i].style.display = "block";
            //  document.getElementById("2").id = "1";

            //   }
        }


    }


}

function dos2(valori) {

    var valor6 = "";
    var valor7 = "";

    if (valori == "50") {


        //   valor6 = "https://www.dragados.com/images/client_logo4.png";
        valor7 = "Prince"
    } else {
        // valor6 = "https://www.dragados.com/images/oc_logo11.jpg" 
        document.getElementsByClassName("cl01")[valori].style.display = "none";
    }
    //  return valor6;
}

function esconde01() {
    var sel01 = document.getElementsByClassName("cl01");



    for (i = 0; i < sel01.length; i++) {
        document.getElementsByClassName("cl01")[i].style.display = "none";
    }


}

function muestra01() {
    var sel01 = document.getElementsByClassName("cl01");



    for (i = 0; i < sel01.length; i++) {
        document.getElementsByClassName("cl01")[i].style.display = "block";
    }

}

function type_01() {
    for (i = 0; i < document.getElementsByClassName("cl01").length; i++) {
        if (document.getElementsByClassName("cl03")[i].innerHTML == "Branch") {
            //  console.log(document.getElementsByClassName("cl03")[i].innerHTML);
            document.getElementsByClassName("cl01")[i].style.display = "block";

            //   document.getElementsByClassName("cl03")[i].style.background = "red";
            //   document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].style.border = "outset 4px red";
        } else {

            document.getElementsByClassName("cl01")[i].style.display = "none";

            // if (document.getElementsByClassName("cl03")[i].innerHTML == "Own Job") {
            //   document.getElementsByClassName("cl03")[i].style.background = "blue";
            //   document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].style.border = "outset 4px blue";

            //   } else {
            //   document.getElementsByClassName("cl03")[i].style.background = "green";
            //   document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].style.border = "outset 4px green";
            //   document.getElementsByClassName("cl03")[i].parentElement.parentElement.getElementsByTagName("h3")[0].click();
            //   }
        }
    }


}

function type_02() {
    for (i = 0; i < document.getElementsByClassName("cl01").length; i++) {
        if (document.getElementsByClassName("cl03")[i].innerHTML == "Own Job") {

            if (document.getElementsByClassName("cl01")[i].style.display == "none") {} else {
                document.getElementsByClassName("cl01")[i].style.display = "block";

            }

        } else {

            document.getElementsByClassName("cl01")[i].style.display = "none";

        }
    }


}

function type_04() {
    for (i = 0; i < document.getElementsByClassName("cl01").length; i++) {
        if (document.getElementsByClassName("cl03")[i].innerHTML == "Other") {

            if (document.getElementsByClassName("cl01")[i].style.display == "none") {} else {
                document.getElementsByClassName("cl01")[i].style.display = "block";

            }

        } else {

            document.getElementsByClassName("cl01")[i].style.display = "none";

        }
    }


}

function switch01(valor) {

    //  alert(sw01.checked);
    if (sw01.checked == 0) {
        esconde01();
        //alert("true")

    } else {
        muestra01();
        //    alert("fLSE")

    }
    document.getElementById(valor).blur();
}

function switch02(valor) {

    //  alert(sw01.checked);
    if (sw02.checked == 0) {
        show02();
        //alert("true")

    } else {
        show03();
        //    alert("fLSE")


    }
    document.getElementById(valor).blur();

}

function type_03() {


    for (i = 0; i < document.getElementById("form1:companyDiv").getElementsByTagName("option").length; i++) {
        document.getElementById("form1:companyDiv").getElementsByTagName("option")[i].outerHTML = document.getElementById("form1:companyDiv").getElementsByTagName("option")[i].outerHTML +
            "<div>" +
            " - " + i +
            "</div><img src='" + check02('50') + "'></div>"

        // document.getElementById("form1:companyDiv").getElementsByTagName("option")[i].innerHTML += "<img src='" + check02('50') + "'>";

    }

}