function tool01(id01) {
    //alert(this.outerHTML);
    var j = 0;
    var main01 = "";
    var crea01 = "";
    var main02 = "";
    main01 = document.getElementById("menu");

    // cuenta01 = main01

    //  div_box.innerHTML = "";
    for (i = 0; i < document.getElementById("menu").getElementsByTagName("LI").length; i++) {
        main02 = document.getElementById("menu").getElementsByTagName("LI")[i].getElementsByTagName("SPAN")[0].innerHTML;
        if (main02 == "") {




        } else {

            if (document.getElementById("menu").getElementsByTagName("LI")[i].getElementsByTagName("SPAN")[0].getElementsByTagName("SPAN").length == 1) {
                //document.getElementById("div_box").innerHTML+="<div>"+i+"</div>"
                j = j + 1;
                crea01 += " <div onmousemove='tool03(" + i + "," + j + ")' class='border01'> " + //      document.getElementById("menu").getElementsByTagName("LI")[i].className + 
                    //   " - Items: " +
                    "<p class='cl10-1'>" + j + "</p><p class='cl11-1'>" +
                    document.getElementById("menu").getElementsByTagName("LI")[i].getElementsByTagName("SPAN")[0].innerHTML + "</p>" + //   document.getElementById("menu").getElementsByTagName("LI")[i].getElementsByTagName("SPAN")[0].getElementsByTagName("*")[0].className +
                    "</div>";
            } else {






            }
        }
    }
    div_box.innerHTML = crea01;
    document.getElementById("btn01").innerHTML =
        '         <img src="/ecms/images/4.1/settings.png" title="Applications" class="handcursor k-image" alt=""> <p class="cl11">  Modules</p>' +
        "<p class='cl10'>" + j + "</p>";

}

function tool03(cuenta01, jota) {
    div_box25.innerHTML = "";
    div_box4.innerHTML = "";
    div_box_2.innerHTML = "";
    //  div_box.getElementsByTagName('div')[cuenta01].style.background = "red";
    //alert(document.getElementById("menu").getElementsByTagName("LI")[cuenta01].innerHTML);
    div_box2.innerHTML = document.getElementById("menu").getElementsByTagName("LI")[cuenta01].innerHTML;

    //  div_box2.getElementsByTagName("UL")[0].style.display = "block";
    // div_box2.getElementsByTagName('UL')[0].childNodes[0].getElementsByTagName('UL')[0].style.display = 'block';
    div_box_2.innerHTML += "<div>Menu</div><hr>";
    //  setTimeout(function() {
    for (i = 0; i < div_box2.getElementsByTagName('UL')[0].childNodes.length; i++) {

        div_box2.getElementsByTagName('UL')[0].childNodes[i].getElementsByTagName('UL')[0].style.display = 'none';
        var code01 = 'div_box2.getElementsByTagName("UL")[0].childNodes[' + i + '].getElementsByTagName("UL")[0].style.display="block";';
        var code02 = 'cambia01(' + i + ');';
        div_box25.innerHTML += "<div onclick='" + code01 + code02 + "' class='cl05'>" + div_box2.getElementsByTagName('UL')[0].childNodes[i].getElementsByTagName('span')[0].innerHTML + "</div>";


        div_box_2.innerHTML +=
            "<div onmousemove='" +
            code01 + code02 +
            "' class='cl08'>" +
            "<p class='cl14'>" +
            (i + 1) + "</p>" +
            "<div onclick='alert(55)' class='cl15'>" +
            div_box2.getElementsByTagName('UL')[0].childNodes[i].getElementsByTagName('span')[0].innerHTML +


            "<p class='cl16'>" +
            div_box2.getElementsByTagName('UL')[0].childNodes[i].getElementsByTagName("li").length +

            "</p>" +
            "</div>" +
            "</div>";


    }
    // }, 200);
    //  var var01 = "div_box2.getElementsByTagName('UL')[0].childNodes[" + i + "].getElementsByTagName('UL')[0].style.display='none';"
    div_box2.getElementsByTagName('span')[0].setAttribute("onmousemove", "    for (i = 0; i < div_box2.getElementsByTagName('UL')[0].childNodes.length; i++) {  div_box2.getElementsByTagName('UL')[0].childNodes[i].getElementsByTagName('UL')[0].style.display = 'none'; }");

    setTimeout(function() {
        for (i = 0; i < document.getElementById("div_box").getElementsByTagName("div").length; i++) {

            document.getElementById("div_box").getElementsByTagName("div")[i].style.background = "white"
            document.getElementById("div_box").getElementsByTagName("div")[i].style.color = "black";

        }
        document.getElementById("div_box").getElementsByTagName("div")[jota - 1].style.background = "red";
        document.getElementById("div_box").getElementsByTagName("div")[jota - 1].style.color = "yellow";

        document.getElementById("div_box2bis").innerHTML =
            "<p class='cl12'>" +
            div_box.getElementsByTagName("div")[jota - 1].getElementsByTagName("p")[0].innerHTML +
            "</p> " +
            "<p class='clmodule'>Modules</p><p class='cl13'>" +
            div_box.getElementsByTagName("div")[jota - 1].getElementsByTagName("p")[1].innerHTML +
            "</p>  " +
            "<p class='cl09'>" + div_box2.getElementsByTagName('UL')[0].childNodes.length + " </p>";


    }, 100)
}

function cuenta02() {


}

function hide02() {

    //div_box2.getElementsByTagName("UL")[0].getElementsByTagName("LI")[1].getElementsByTagName("UL")[0].style.display="block";
    //div_box2.getElementsByTagName('UL')[0].getElementsByTagName('UL')[2].style.display='block';
    //   div_box2.getElementsByTagName("UL")[0].getElementsByTagName("LI")[0].setAttribute("onclick", "div_box2.getElementsByTagName('UL')[0].getElementsByTagName('UL')//[2].style.display='block';");

    for (i = 0; i < div_box2.getElementsByTagName('UL')[0].childNodes.length; i++) {
        var var01 = "div_box2.getElementsByTagName('UL')[0].childNodes[" + i + "].getElementsByTagName('UL')[0].style.display='block';"
        div_box2.getElementsByTagName('UL')[0].childNodes[i].setAttribute("onclick", var01);

    }
    //alert(div_box2.getElementsByTagName('UL')[0].childNodes.length);//.getElementsByTagName('LI').length);
}

function tool02() {

    if (document.getElementById("mnu_header").style.display == "none") {
        document.getElementById("mnu_header").style.display = "block"
    } else {
        document.getElementById("mnu_header").style.display = "none"
    }

}


function switch01(valor) {

    //  alert(sw01.checked);
    if (sw01.checked == 0) {
        document.getElementById("mnu_header").style.display = "none";
        document.getElementById("isc_2I").style.top = "32px";
        //alert("true")

    } else {
        document.getElementById("mnu_header").style.display = "block"
        document.getElementById("isc_2I").style.top = "0";

        //    alert("fLSE")

    }
    tool01();

    document.getElementById(valor).blur();
}

function switch05(valor) {

    //  alert(sw011.checked);
    if (sw011.checked == 0) {
        document.getElementById("master").style.display = "none";
        document.getElementById("mnu_header").style.display = "block"

        //   document.getElementById("isc_2I").style.top = "32px";
        //alert("true")
        document.getElementById("css_id").href = "http://127.0.0.1:8887/eCMSScripts/test2.csss";
        div_hide02();
    } else {
        document.getElementById("master").style.display = "block"
            //  document.getElementById("isc_2I").style.top = "0";
        document.getElementById("mnu_header").style.display = "none";
        //    alert("fLSE")
        document.getElementById("css_id").href = "http://127.0.0.1:8887/eCMSScripts/test2.css";

    }
    //  tool01();

    document.getElementById(valor).blur();
}

function iframe_01() {
    if (document.getElementById("row02").style.display == "none") {
        document.getElementById("row02").style.display = "block"
    } else {
        document.getElementById("row02").style.display = "none"
    }
}

function iframe_02() {
    //   var a = function() { open_popup('/utilities/logon.do?SYSTEMID=10.10.13.28&USERID=JBRAVOF&PWD=jbravof&spoolfile=true', 'ifr01');; return false; };
    //  var b = function() { if (typeof jsfcljs == 'function') { jsfcljs(document.forms['form1'], { 'form1:j_id_jsp_46654178_15:8:j_id_jsp_46654178_17': 'form1:j_id_jsp_46654178_15:8:j_id_jsp_46654178_17' }, ''); } return false };
    //  return (a() == false) ? false : b();
    //  document.getElementById("ifr01").src = "http://s104e7fd.dragados-usa.local:30000/utilities/logon.do?SYSTEMID=10.10.13.28&USERID=JBRAVOF&PWD=jbravof&spoolfile=true";
    document.getElementById("ifr01").src = "http://s104e7fd.dragados-usa.local:30000/utilities/spool/list.do?method=loadListFrame";

    // return a();/utilities/spool/list.do?method=loadListFrame
}

function iframe_03() {
    if (document.getElementById("row04").style.display == "none") {
        document.getElementById("row04").style.display = "block"
    } else {
        document.getElementById("row04").style.display = "none"
    }
}

function cambia01(valorc) {
    //  document.getElementsByClassName("cl20")[0].innerHTML = "";
    // alert(div_box2.getElementsByTagName("UL")[0].childNodes[valorc].getElementsByTagName("UL")[0].innerHTML);

    div_box4.innerHTML = div_box2.getElementsByTagName("UL")[0].childNodes[valorc].getElementsByTagName("UL")[0].innerHTML;

    // setTimeout(function() {
    var valor10 = div_box4.getElementsByTagName("li");
    for (i = 0; i < valor10.length; i++) {
        valor10[i].innerHTML =

            "<div class='cl20'>" +

            /*  document.getElementsByClassName("cl10")[0].innerHTML +
             " - " + */

            document.getElementsByClassName("cl12")[0].innerHTML +
            " : " +
            /* 
                        document.getElementsByClassName("cl09")[0].innerHTML +
                        " - " + */
            document.getElementsByClassName("cl13")[0].innerHTML +
            " - " +

            document.getElementsByClassName("cl14")[valorc].innerHTML +
            " : " +
            document.getElementsByClassName("cl15")[valorc].innerHTML +
            //   document.getElementsByClassName("cl16")[i].innerHTML +

            // 
            "</div><hr>" +
            "<p class='cl21'>" +
            (i + 1) +
            "</p>" +
            valor10[i].innerHTML

    }
    //  div_box4.outerHTML = "<div> Menu items" + div_box4.outerHTML + "</div><hr>"


    // }, 100)
}

//k-animation-container

function crea04() {
    var text001 = "";
    document.getElementById("div_favorites2").innerHTML = document.getElementById("favorite").innerHTML;
    //document.getElementsByClassName("k-animation-container")[0].innerHTML;
    document.getElementById("div_favorites2").getElementsByTagName("ul")[0].style.display = "block";
    document.getElementById("div_favorites2").getElementsByTagName("ul")[0].style.position = "";

    for (i = 1; i < document.getElementById("div_favorites2").getElementsByTagName("li").length; i++) {
        text001 += "<div class='cl07'><p>Fav</p><hr><a href='";
        text001 += document.getElementById("div_favorites2").getElementsByTagName("li")[i].getElementsByTagName("a")[0].href;
        text001 += "'>"
        text001 += document.getElementById("div_favorites2").getElementsByTagName("li")[i].getElementsByTagName("span")[1].innerHTML
        text001 += "</a></div>";

    }
    //   alert(text001);
    document.getElementById("div_favorites2").innerHTML = text001;
}

function lee01() {
    document.getElementById("ifr02").src = document.getElementById("ifr02").src;
    div_box33.innerHTML = "";
    var brow01 = document.getElementById("ifr02").contentWindow;
    //  alert(brow01.document.body.innerHTML);
    //  alert(brow01.document.getElementsByTagName("tr").length)
    var crea05 = "";
    for (i = 0; i < brow01.document.getElementsByTagName("a").length; i++) {

        /*    div_box33.innerHTML += "<div class='cl05'><a target='ifr01' href='" +
               brow01.document.getElementsByTagName("a")[i].href +
               "'>" + i + "</a></div>" */
        crea05 += "<div class='cl06'><a target='ifr01' href='" +
            brow01.document.getElementsByTagName("a")[i].href +
            "'><iframe src='" +
            brow01.document.getElementsByTagName("a")[i].href +
            "'></iframe>Report " + i + "</a><hr><div>" +
            brow01.document.getElementsByTagName("a")[i].href.split("&")[0] + "<br>" +

            brow01.document.getElementsByTagName("a")[i].href.split("&")[1] + "<br>" +
            brow01.document.getElementsByTagName("a")[i].href.split("&")[2] + "<br>" +
            brow01.document.getElementsByTagName("a")[i].href.split("&")[3] + "<br>" +
            brow01.document.getElementsByTagName("a")[i].href.split("&")[4] + "<br>" +


            "</div></div>"

        i = i + 1

    }

    div_box33.innerHTML += crea05;

}
document.getElementById("mnu_header").style.display = "none";
tool01();

function div_hide01(id01) {

    for (i = 0; i < document.getElementsByClassName("div_hide").length; i++) {

        document.getElementsByClassName("div_hide")[i].style.display = "none";

    }
    document.getElementById(id01).style.display = "block";
    document.getElementById("mnu_container").style.display = "none";
    //document.getElementById("mnu_container").style.position = "absolute";
    // show01();
}

function div_hide02() {

    for (i = 0; i < document.getElementsByClassName("div_hide").length; i++) {

        document.getElementsByClassName("div_hide")[i].style.display = "none";

    }
    document.getElementById("mnu_container").style.display = "block";
    show01();

}

function show01() {


    document.getElementById("mnu_container").style.display = "block";
    //document.getElementsByClassName("div_content")[0].style.position = "relative";
    document.getElementById("mnu_container").style.position = "absolute";
}

function uno() {

    //  alert(document.getElementsByClassName("k-window")[2].outerHTML);
    //  alert(document.getElementsByClassName("k-window").length);
    document.getElementsByClassName("k-window")[0].style.border = "solid 12px black";
    //  document.getElementsByClassName("k-window")[1].style.border = "solid 12px black";
    //  document.getElementsByClassName("k-window")[2].style.border = "solid 12px black";
    document.getElementsByClassName("k-window")[3].style.border = "solid 12px black"

}


///////////////////////////

///////////////////////////

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

function get_02() {
    document.getElementById("sel0111").innerHTML = "";
    var crea06 = "";
    var log01 = document.getElementById("contentFrame").contentWindow.document.getElementById("content").getElementsByTagName("*");
    console.log(log01.length)
    for (i = 0; i < log01.length; i++) {

        console.log("TagName" + log01[i].tagName + "Nodes" + log01[i].childNodes.length + "ID" + log01[i].id);
        crea06 += "<div>" +
            "TagName" + log01[i].tagName + "Nodes" + log01[i].childNodes.length + "ID" + log01[i].id +

            "</div>"


    }
    document.getElementById("sel0111").innerHTML = crea06;
}