function login_01() {
    //  alert("login-eCMS");
    window.location.assign("http://s104e7fd.dragados-usa.local:30000/ecms/login.faces")
}

function login_02() {
    //  alert("login-eCMS");
    document.getElementById("username").value = "jbravof";
}
//

function click01() {
    alert("sI");

}

function login_03() {

    for (i = 0; i < 13; i++) {
        //document.getElementsByClassName("Arbol")[1].getElementsByTagName("DIV")[0].addEventListener("click", function() {
        document.getElementById("OpcionesMenu").getElementsByTagName("DIV")[i].addEventListener("click", function() {


            alert(i);



        });
    }
}

function login_05(valvar) {
    //  alert(valvar);
    var var_02 = document.getElementsByClassName('Arbol')[valvar].getElementsByTagName('DIV');
    //alert(var_02.length);
    for (i = 0; i < var_02.length; i++) {
        var var_05 = document.getElementsByClassName('Arbol')[valvar].getElementsByTagName('UL')[i].getElementsByTagName('LI').length;

        document.getElementsByClassName('Arbol')[valvar].getElementsByTagName('DIV')[i].innerHTML = document.getElementsByClassName('Arbol')[valvar].getElementsByTagName('DIV')[i].innerHTML + " - " + var_05;
        var_03 = "    var var_02 = document.getElementsByClassName('Arbol')[" + valvar + "].getElementsByTagName('UL')[" + i + "];    if (var_02.style.display == 'none') { var_02.style.display = 'table-cell' } else { var_02.style.display = 'none'    }";

        var_02[i].setAttribute("onclick", var_03);
        var_02[i].click();



    }
}

function login_0545() {
    //  alert(valvar);
    for (p = 0; p < 13; p++) {
        var var_02 = document.getElementsByClassName('Arbol')[p].getElementsByTagName('DIV');
        //alert(var_02.length);
        x = 0;
        for (i = 0; i < var_02.length - 1; i++) {

            var var_05 = document.getElementsByClassName('Arbol')[p].getElementsByTagName('UL')[i].getElementsByTagName('LI').length;

            for (j = 0; j < var_05; j++) {

                var var_06 = document.getElementsByClassName('Arbol')[p].getElementsByTagName('UL')[i].getElementsByTagName('LI')[j];
                var_06.innerHTML += "<hr><br><button style='border-radius:50%;margin-left:15px;' onclick='runidi(this.id);' id='" + p + i + j + "'>" + p + "-" + (x - i) + "</button>";
                x = x + 1
            }

            //  document.getElementsByClassName('Arbol')[p].getElementsByTagName('DIV')[i].innerHTML = document.getElementsByClassName('Arbol')[p].getElementsByTagName('DIV')[i].innerHTML + " - " + var_05;
            //  var_03 = "    var var_02 = document.getElementsByClassName('Arbol')[" + valvar + "].getElementsByTagName('UL')[" + i + "];    if (var_02.style.display == 'none') { var_02.style.display = 'block' } else { var_02.style.display = 'none'    }";

            //  var_02[i].setAttribute("onclick", var_03);
            //  var_02[i].click();

            x = x + 1

        }
    }
}

function runidi(name01) {
    //   alert(document.getElementById(name01).parentElement.getElementsByTagName("A")[0].innerHTML);
    //  alert(document.getElementById(name01).innerHTML);
    var val00 = "|" + document.getElementById(name01).parentElement.getElementsByTagName("A")[0].innerHTML + ":" + document.getElementById(name01).innerHTML;
    var val01 = getCookie("Favoritos");

    document.cookie = "Favoritos" + '=' + val01 + val00;
}

function login_04() {
    for (i = 0; i < 13; i++) {

        var var_03 = "alert(" +
            i +
            ");var var_02 = document.getElementsByClassName('Arbol')[" +
            i +
            "].getElementsByTagName('DIV').length;alert(var_02);"
        var_03 = "login_05(" + i + ")" + ";";
        document.getElementById("OpcionesMenu").getElementsByTagName("DIV")[i].setAttribute("onclick", var_03);


    }

}

function crea_87(var_01) {
    var var_02 = document.getElementsByClassName("Arbol")[var_01].getElementsByTagName("DIV").length;

    for (i = 0; i < var_02; i++) {
        document.getElementsByClassName("Arbol")[var_01].getElementsByTagName("DIV")[i].addEventListener("click", function() {
            // document.getElementById("password").addEventListener("change", function() {


            var var01 = document.getElementsByClassName("Arbol")[var_01].getElementsByTagName("UL")[0];

            if (var01.style.display == "none") {
                var01.style.display = "block"
            } else {
                var01.style.display = "none"
            }

        });
    }
}

function login_09(valvar2) {
    var var_02 = document.getElementsByClassName('Arbol')[valvar2].getElementsByTagName('DIV');
    //alert(var_02.length);
    for (i = 0; i < var_02.length; i++) {

        //  var_03 = "    var var_02 = document.getElementsByClassName('Arbol')[" + valvar + "].getElementsByTagName('UL')[" + i + "];    if (var_02.style.display == 'none') { var_02.style.display = 'block' } else { var_02.style.display = 'none'    }";
        //var_02[i].setAttribute("onclick", var_03);
        var_02[i].click();



    }


}

function login_08(valvar2) {
    //  document.getElementsByClassName("Arbol")[valvar2].getElementsByTagName("NAV")[0].outerHTML = "";

    //    document.getElementById("form1").innerHTML = "<div class='divcl01'>hola</div>" + document.getElementById("form1").innerHTML;
    var cuenta01 = document.getElementsByClassName("Arbol")[valvar2].getElementsByTagName("LI").length;
    var var_04 = "<nav class='divcl01'><button onclick='login_09(" + valvar2 + ")' class='BotonGrupoInformes2'  style='width:80px;' >Toggle</button><button style='width:130px;' class='BotonGrupoInformes2' onclick='alert(this.parentElement.parentElement.getElementsByTagName('" + "LI" + "').length);'>" + cuenta01 + " - Reports</button><button class='boton_01' onclick='favorites_01()'>Favorites</button><br><hr></nav>";
    document.getElementsByClassName("Arbol")[valvar2].innerHTML = var_04 + document.getElementsByClassName("Arbol")[valvar2].innerHTML;
}

function login_07() {
    //   document.getElementsByClassName("Arbol")[1].getElementsByTagName("NAV")[0].outerHTML = "";
    //    document.getElementById("form1").innerHTML = "<div class='divcl01'>hola</div>" + document.getElementById("form1").innerHTML;
    //   var var_04 = "<nav class='divcl01'><button>Run</button><button>Run</button></nav>";
    //  document.getElementsByClassName("Arbol")[1].innerHTML = var_04 + document.getElementsByClassName("Arbol")[1].innerHTML;



    //  document.getElementsByClassName("Arbol")[1].getElementsByTagName("DIV")[0].addEventListener("click", function() {
    //  document.getElementById("NombreInforme").addEventListener("click", function() {


    ///   var var01 = document.getElementsByClassName("Arbol")[1].getElementsByTagName("UL")[0];
    //     var var01 = document.getElementById("NombreInforme").parentElement.getElementsByTagName("DIV")[0];

    //     if (var01.style.display == "none") {
    //        var01.style.display = "block"
    ////    } else {
    //         var01.style.display = "none"
    //     }

    //  });

}

function refresh_01() {

    location.assign("https://drt.dragados-usa.local/Menus/MenuReports.aspx");

}

function refresh_02() {
    //  document.getElementsByClassName("GrupoLanzamiento")[0].style = "zoom:0.8";
    document.getElementsByClassName("GrupoLanzamiento")[1].style = "display:inline-grid;width:49%;";
    document.getElementsByClassName("GrupoLanzamiento")[2].style = "display:inline-grid;margin-left:1%;width:49%;";

}

function refresh_03() {

    //  document.getElementsByClassName("GrupoLanzamiento")[1].style = "display:inline-grid;width:49%;height: 13vh;";
    //   document.getElementsByClassName("GrupoLanzamiento")[2].style = "display:inline-grid;width:49%;height: 13vh;";
    document.getElementById("ImagenDefecto").getElementsByTagName("IMG")[0].src = "https://drt.dragados-usa.local/Images/drt.png";

    var var01 = document.getElementById("parametros");

    if (var01.style.display == "none") {
        var01.style.display = "block"
    } else {
        var01.style.display = "none"
    }



}

function refresh_033() {


    var var01 = document.getElementById("cont01");

    if (var01.style.display == "none") {
        var01.style.display = "block"
    } else {
        var01.style.display = "none"
    }



}

function refresh_04() {
    var var_033 = "setTimeout(function(){ refresh_02()},400);"
    var conta01 = document.getElementsByClassName("Arbol").length;
    for (i = 0; i < conta01; i++) {
        var conta02 = document.getElementsByClassName("Arbol")[i].getElementsByTagName("UL").length;
        for (j = 0; j < conta02; j++) {
            document.getElementsByClassName("Arbol")[i].getElementsByTagName("UL")[j].setAttribute("onclick", var_033);
        }
        login_08(i);
    }
}

function run0455() {
    //vistaPrevia
    var_022 = document.getElementById('vistaPrevia');

    var_022.style = "border:outset;border-radius: 20px;background:black;position:absolute;right:3%;z-index:30000000;height:63.5%;width:72%; top:32vh;overflow-y: hidden; overflow-x: hidden;"
}

function dos(val88) {
    document.getElementById('div06').innerHTML = document.getElementsByClassName('Arbol')[val88].innerHTML;
    // run04();
}

function run03() {
    var var_01 = '';
    for (i = 0; i < 13; i++) {

        var_01 = document.getElementById('div02').getElementsByTagName('DIV')[i];

        var_01.setAttribute("onclick", "dos(" + i + ");setTimeout(function() {run04477();},100);");

    }
    //setTimeout(function() {run04();},2000);
}

function change01() {

    var val_55 = document.getElementById("select_01").value;
    var val_56 = val_55.split(";")[0];
    var val_57 = val_55.split(";")[1];


    if (document.getElementById('check01').checked == true) {
        document.getElementsByClassName('Arbol')[val_56].getElementsByTagName("LI")[val_57].click();
        setTimeout(function() {
            run05();
            run06();
            run08();
            run07();
        }, 900);
    } else {
        document.getElementsByClassName('Arbol')[val_56].getElementsByTagName("LI")[val_57].click();
    }
    //setTimeout(function(){tool04()},3000);
}


function run05() {

    var conta8 = document.getElementsByClassName("Parametro").length;
    console.log(conta8);
    for (i = 1; i < conta8 - 1; i++) {
        var nome01 = document.getElementsByClassName("Parametro")[i].getAttribute('data-literalparametro');
        console.log(nome01);
        var x = "";
        x = "Month";
        if (x == nome01) {
            console.log(i);
            document.getElementsByClassName("Parametro")[i].getElementsByTagName("DIV")[1].getElementsByTagName("INPUT")[0].value = mon01.value;
            document.getElementsByClassName("Parametro")[i].getElementsByTagName("DIV")[1].getElementsByTagName("INPUT")[0].onchange();
        } else {}
    }
}

function run06() {

    var conta8 = document.getElementsByClassName("Parametro").length;
    console.log(conta8);
    for (i = 1; i < conta8; i++) {
        var nome01 = document.getElementsByClassName("Parametro")[i].getAttribute('data-literalparametro');
        console.log(nome01);
        var x = "";
        x = "Year";
        if (x == nome01) {
            console.log(i);
            document.getElementsByClassName("Parametro")[i].getElementsByTagName("DIV")[1].getElementsByTagName("INPUT")[0].value = year01.value;
            document.getElementsByClassName("Parametro")[i].getElementsByTagName("DIV")[1].getElementsByTagName("INPUT")[0].onchange();
        } else {}
    }
}

function run08() {
    try {



        var mon01 = document.getElementById("input_co").value;
        document.getElementById("Parametro1ParametroEmpresas").value = mon01;
        console.log(document.getElementById("Parametro1ParametroEmpresas").selectedIndex);

        document.getElementById("Parametro1ParametroEmpresas").onchange();
        var year01 = document.getElementById("input_div").value;
        document.getElementById("Parametro2ParametroObras").value = year01;
        document.getElementById("Parametro2ParametroObras").onchange();

    } catch (err) {

        document.getElementsByClassName('jqx-input jqx-rc-l jqx-input-group-addon jqx-widget jqx-widget-content')[0].value = document.getElementById('sel_01').value;

        document.getElementsByClassName('jqx-fill-state-normal jqx-rc-r jqx-input-group-addon')[0].click();
        document.getElementById("tablejqxCheckBox").getElementsByTagName("SPAN")[17].click();

    }

}

function run07() {

    document.getElementById("btnRunReport").click();
}

function pon01() {
    var nome06 = "";

    nome06 += "<h2>" + document.getElementById('NombreInforme').innerHTML + "</h2>";
    //nome06+="";
    nome06 += "<div onclick='hide02();' class='border_01' style='overflow: auto;height: 70px; text-align: initial; margin: 0;padding-top: 5px; padding-bottom: 20px;padding-left:10px;'>" + document.getElementsByClassName('DescripcionInforme')[0].innerHTML + "</div>";
    setTimeout(function() { document.getElementById('col02').innerHTML = nome06 }, 500);
    //DescripcionInforme
}

function tool04() {

    var nome03 = document.getElementsByClassName('GrupoLanzamiento')[1];
    nome03.className += " cl02";
    console.log(nome03.className);
    nome03 = document.getElementsByClassName('GrupoLanzamiento')[2];
    nome03.className += " cl03";
    console.log(nome03.className);

    nome03 = document.getElementsByClassName('GrupoLanzamiento')[0];
    nome03.style.height = "75%";
    nome03.style.background = " #dbd6d6";
    console.log(nome03.className);
}

function hide01() {

    var val98 = document.getElementById('col02').getElementsByTagName("DIV")[0].style.display;

    if (val98 == "block") {
        document.getElementById('col02').getElementsByTagName("DIV")[0].style.display = "none";
        //  run04()
    } else {
        document.getElementById('col02').getElementsByTagName("DIV")[0].style.display = "block";
        //  document.getElementsByClassName('VistaPrevia')[0].style.top = '41vh';
        // document.getElementsByClassName('VistaPrevia')[0].style.height = "56vh"
    };

    //document.getElementsByClassName('VistaPrevia')[0].style.top='25vh';document.getElementsByClassName('VistaPrevia')[0].style.height="72.5vh"

}

function hide02() {
    alert(document.getElementById('col02').getElementsByTagName("DIV")[0].style.display);
    //this.style.display='none';
    document.getElementById('col02').getElementsByTagName("DIV")[0].style.display = "none";
    alert(document.getElementById('col02').getElementsByTagName("DIV")[0].style.display);
}

function hide03(valid) {

    var val98 = document.getElementById(valid).style.display;

    if (val98 == "block") {
        document.getElementById(valid).style.display = "none";
        // run04();
    } else {
        document.getElementById(valid).style.display = "block";
        //  document.getElementsByClassName('VistaPrevia')[0].style.top = '40vh';
        //  document.getElementsByClassName('VistaPrevia')[0].style.height = "50vh"
    };

    //document.getElementsByClassName('VistaPrevia')[0].style.top='31vh' - document.getElementsByClassName('VistaPrevia')[0].style.height="65vh"

}

function func01() {
    //document.getElementsByClassName('master')[0].style.display="block";
    document.getElementById('parametros').style.display = "block";
    //run04();
}

function func02() {
    //document.getElementsByClassName('master')[0].style.display="none";
    document.getElementById('parametros').style.display = "none";

}

function func05() {
    window.location = '/Inicio.aspx';
}

function tool06() {

    document.body.innerHTML = "<div class='div55'><button onclick='func05()' class='btn01'>Back</button><button class='btn01' onclick='func01()'><img width='30' height='30'  src='https://drt.dragados-usa.local/Images/drt.png'></button></div>" + document.body.innerHTML;
    document.body.innerHTML = "<style>.div55{border:outset;width:100%}.btn01{border:outset;margin:1%;border-radius:8px;}</style>" + document.body.innerHTML;

}

function get_01() {
    sel01.innerHTML = "";
    var getting = document.cookie;
    console.log(getting);
    var num01 = getting.split(";").length;

    for (i = 0; i < num01; i++) {

        console.log(getting.split(';')[i])
        sel01.innerHTML += "<option onclick='option01(this.innerHTML)'>" + getting.split(';')[i] + "</option>"
    }

}

function option01(text03) {
    //   alert(text03);
    texto01.value = text03.split("=")[0];
    texto02.value = text03.split("=")[1];

}

function crea01() {

    var getting = document.cookie;
    var num01 = getting.split(";").length;
    var nome07 = "";

    nome07 += "<table id='table1'><thead style='z-index: 30000000000000;    background: black;position: fixed;  margin-top: -70px;'><tr><td class='td01'>Name</td><td class='td02'>Value</td><td class='td01'>Campo3</td><td class='td01'>Campo4</td></tr></thead><br><br><tbody>";
    for (i = 0; i < num01; i++) {

        //     console.log(getting.split(';')[i])
        //   "<option onclick='option01(this.innerHTML)'>"+getting.split(';')[i]+"</option>"

        nome07 += "<tr><td class='td01'>" + getting.split(';')[i].split('=')[0] + "</td><td class='td02'>" + getting.split(';')[i].split('=')[1] + "</td><td class='td01'></td><td class='td01'></td></tr>"

    }
    nome07 += "</tbody></table>";

    div_07.innerHTML = nome07;

}

function crea02() {

    window.location.assign('http://127.0.0.1:8887/Site01/carga03.html')
}

function crea03() {

    document.getElementsByTagName("H2")[0].setAttribute("onclick", "crea04(0)");
    document.getElementsByTagName("H2")[1].setAttribute("onclick", "crea04(1)");

    document.getElementsByTagName("H2")[2].setAttribute("onclick", "crea04(2)");

}

function crea04(val_i) {

    alert(document.getElementsByTagName("H2")[val_i].parentElement.getElementsByTagName("*")[1].innerHTML);



}

function crea05(val_i) {

    //alert(document.getElementsByTagName("H2")[val_i].parentElement.getElementsByTagName("*")[1].innerHTML);
    var nombre01 = document.getElementsByTagName("H2")[val_i].parentElement.style.display;

    if (nombre01 == "block") { document.getElementsByTagName("H2")[val_i].parentElement.style.display = 'none' } else { document.getElementsByTagName("H2")[val_i].parentElement.style.display = 'block' }

}

function get_cookies() {

    //  document.cookie = texto01.value + '=' + texto02.value;get_01();
    // alert(getCookie('Month'));
    mon01.value = getCookie('Month');
    year01.value = getCookie('Year');
    input_co.value = getCookie('Co');
    input_div.value = getCookie('Div');
}

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

function favorites_01() {
    var val98 = document.getElementById('favorites').style.display;

    if (val98 == "block") {
        document.getElementById('favorites').style.display = "none";
        //  run04()
    } else {
        document.getElementById('favorites').style.display = "block";
        //  document.getElementsByClassName('VistaPrevia')[0].style.top = '41vh';
        // document.getElementsByClassName('VistaPrevia')[0].style.height = "56vh"
    };

}

function settings_01() {
    document.getElementById('select_01').innerHTML = "";
    var set_01 = getCookie("Favoritos");
    var conta03 = set_01.split("|");

    for (i = 0; i < conta03.length; i++) {

        var set_02 = conta03[i];
        var set_03 = set_02.split(":")[0];
        var set_04 = set_02.split(":")[1];

        var set_05 = set_04.split("-")[0];
        var set_06 = set_04.split("-")[1];
        document.getElementById('select_01').innerHTML += "<option value='" + set_05 + ";" + set_06 + "'>" + set_03 + "</option>";

    }


}

function hidediv(val01) {
    document.getElementById("style_01").innerHTML = "body * { box-shadow: 1px 0px 19px 0px " + val01 + "}"; //rgb(163, 163, 172)";
    document.getElementById("favcolor").style.background = val01;

}

function change02(val01) {

    //box-shadow: 1px 0px 19px 0px rgb(175, 202, 135);
    //body, #vistaPrevia, body *, #vistaPrevia * {
    var val02 = "1px 0px 19px 0px " + val01;
    alert(val02);
    var val03 = document.body.getElementsByTagName("*").length;
    alert(val03);
    var val04 = prompt();
    document.body.getElementsByTagName("*")[val04].style.boxshadow = val02; // setAttribute("box-shadow", val02);

    for (i = 0; i < val03 - 1; i++) {
        document.body.getElementsByTagName("*")[i].style.boxshadow = val02;

    }
}

function runclick(valrunclick) {


    var val_55 = valrunclick;
    document.getElementById("select_01").value;
    var val_56 = val_55.split(";")[0];
    var val_57 = val_55.split(";")[1];



    document.getElementsByClassName('Arbol')[val_56].getElementsByTagName("LI")[val_57].click();
}

function select_01run() {
    favorites.getElementsByTagName("DIV")[0].innerHTML = "";
    for (i = 0; i < select_01.getElementsByTagName("OPTION").length; i++) {
        //        var val05 = 'alert("' + select_01.getElementsByTagName("OPTION")[i].value + '");' + 'runclick("' + select_01.getElementsByTagName("OPTION")[i].value + '");';
        var val05 = 'runclick("' + select_01.getElementsByTagName("OPTION")[i].value + '");';

        favorites.getElementsByTagName("DIV")[0].innerHTML += "<div onclick=" + val05 + " class='divcl02'><input type='checkbox'><br>" + select_01.getElementsByTagName("OPTION")[i].innerHTML + "</div>"; //+ favorites.innerHTML;

        document.getElementById("LanzamientoInforme").innerHTML = "<div onclick=" + val05 + " class='divcl02'><input type='checkbox'><br>" + select_01.getElementsByTagName("OPTION")[i].innerHTML + "</div>" + document.getElementById("LanzamientoInforme").innerHTML; //+ favorites.innerHTML;
    }

    document.getElementById('select_01').parentElement.style.display = "none";
}

login_04();
//crea_87(1);
document.getElementById("OpcionesMenu").getElementsByTagName("DIV")[0].click();
refresh_03();
//var var_033 = "setTimeout(function(){ refresh_02()},500);"
//document.getElementsByClassName("Arbol")[1].getElementsByTagName("UL")[0].setAttribute("onclick", var_033);
refresh_04();
get_cookies();
settings_01();
login_0545();