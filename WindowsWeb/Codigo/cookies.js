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