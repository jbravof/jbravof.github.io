var array_01 = ["Plantillas/WW/spool.html", "Plantillas/WW/favorites.html", "Plantillas/WW/menus.html", "Plantillas/WW/menus.html"];

//var contador_02 = 1;
var contador_02 = 0;

function uno(index01) {
    //    document.getElementById("imp_exp").src = "http://127.0.0.1:8887/WindowsWeb/" + array_01[1];

    document.getElementById("imp_exp").srcdoc =

        '<iframe onload="" name="import_export" id="imp_exp" src="http://about:blank"></iframe>' +
        '<div class="toolbar">' +
        '<button onclick="start00()">load</button>' +

        ' <button onclick="var promp01=prompt();uno(promp01)">load2</button>' +
        '<button onclick="location.assign(location.href);">Refresh</button>' +
        '<button onclick="muestra01();">Musetra</button>' +



        '</div>' +
        '<div class="footbar"></div>'


    setTimeout(function() {

        load_01("imp_exp", index01);
        // start00();
        start01();
    }, 400)
}

function start00() {


    //   alert(document.getElementsByClassName("master_window").length)

    if (document.getElementsByClassName("master-window-open").length == array_01.length) { start01(); } else {
        contador_02 = contador_02 + 1;
        alert("http://127.0.0.1:8887/WindowsWeb/" + array_01[contador_02 - 1]);

        //  document.getElementById("imp_exp").src = "http://127.0.0.1:8887/WindowsWeb/" + array_01[contador_02 - 1];

        document.getElementById("imp_exp").srcdoc =

            '<iframe onload="" name="import_export" id="imp_exp" src="http://about:blank"></iframe>' +
            '<div class="toolbar">' +
            '<button onclick="start00()">load</button>' +

            ' <button onclick="var promp01=prompt();uno(promp01)">load2</button>' +
            '<button onclick="location.assign(location.href);">Refresh</button>' +
            '<button onclick="muestra01();">Musetra</button>' +



            '</div>' +
            '<div class="footbar"></div>'
        setTimeout(function() {

            load_01("imp_exp", contador_02);
            start00();

        }, 300)

        var boton = "";
        boton += "<button onclick='oculta_01(" + (contador_02 - 1) + ")'> "
        boton += array_01[contador_02 - 1].split("/")[2].split(".")[0]; // ; //array_01[contador_02]
        boton += "</button> "

        document.getElementsByClassName("footbar")[0].innerHTML += boton;



        //  contador_02 = 0;
    }


}

function load_01(id_01, numero_01) {

    document.body.innerHTML += "<div class='master-window-open' id='window" + numero_01 + "'>" +

        '<div class="  div_type01 border_01 style_02">' +
        '<div class="div_brand">' +
        '   Spool' +
        '</div>' +

        '<div class="div_tool01 border_01">' +
        '<button class="down" onclick="">_</button>' +

        '<button class="max">[]</button>' +
        '<button class="min" onclick="">X</button>' +
        '</div>' +
        '<div class="div_type02 border_02">' +
        '<button onclick="' +
        "for(i=0;i<document.body.getElementsByTagName('button').length-1;i++){this.parentElement.innerHTML+=document.body.getElementsByTagName('button')[i].outerHTML}     " +
        '">carga</button>' +

        '</div>' +
        '</div> '
}

function start01() {
    setTimeout(function() {
        //  oir_01();
        add_listener_to_class_01("max")
        add_listener_to_class_01("min")
        add_listener_to_class_01("down")
        add_listener_to_class_01("div_brand")
    }, 1000);

}

function add_listener_to_class_01(class_01) {
    var class_data = document.getElementsByClassName(class_01)

    for (i = 0; i < class_data.length; i++) {

        class_data[i].addEventListener("click", function() {
            switch (class_01) {
                case "min":
                    //  minimize_01(this.parentElement.parentElement.parentElement.id)
                    this.parentElement.parentElement.parentElement.className = "master-window-open"

                    break;
                case "max":
                    //  maximize_01(this.parentElement.parentElement.parentElement.id)
                    this.parentElement.parentElement.parentElement.className = "master-window-max"
                    break;
                case "down":
                    //  down_01(this.parentElement.parentElement.parentElement.id)
                    this.parentElement.parentElement.parentElement.className = "master-window-closed cerrado"
                    break;
                case "div_brand":
                    this.parentElement.parentElement.className = "master-window-open"
                    break;
                default:
                    // code block
            }
        });

    }


}

function start02() {
    setTimeout(function() {
        //  oir_01();
        add_listener_to_class_02("max")
        add_listener_to_class_02("min")
        add_listener_to_class_02("down")
        add_listener_to_class_02("div_brand")
    }, 1000);

}

function add_listener_to_class_02(class_01) {
    var class_data = document.getElementsByClassName(class_01)

    for (i = 0; i < class_data.length; i++) {

        class_data[i].addEventListener("click", function() {
            switch (class_01) {
                case "min":
                    //  minimize_01(this.parentElement.parentElement.parentElement.id)
                    this.parentElement.parentElement.parentElement.className = "master_window-open"

                    break;
                case "max":
                    //  maximize_01(this.parentElement.parentElement.parentElement.id)
                    this.parentElement.parentElement.parentElement.className = "master_window-max"
                    break;
                case "down":
                    //  down_01(this.parentElement.parentElement.parentElement.id)
                    this.parentElement.parentElement.parentElement.className = "master_window-closed cerrado"
                    break;
                case "div_brand":
                    this.parentElement.parentElement.className = "master_window-open"
                    break;
                default:
                    // code block
            }
        });

    }


}

function muestra01() {
    var valor1 = document.getElementsByClassName('master-window-closed').length;
    for (i = 0; i < valor1; i++) {

        document.getElementsByClassName('master-window-closed')[i].className = 'master-window-open'
    }
}

function minimize_01(texto_01) {
    document.getElementById(texto_01).style = ``
}

function down_01(texto_01) {
    document.getElementById(texto_01).style = `display:none;`
}

function maximize_01(texto_01) {
    document.getElementById(texto_01).style = `position:absolute;top:0;left:0;right:0;bottom:0;margin-top:10px;margin-left:10px;margin-right:0;width:98%;height:97%;z-index:10;`
}

function oculta_01(indice_01) {
    var control01 = document.getElementsByClassName("div_type01")[indice_01].parentElement.style.display;
    if (control01 == "none") {
        document.getElementsByClassName("div_type01")[indice_01].parentElement.style.display = "block";
    } else {
        document.getElementsByClassName("div_type01")[indice_01].parentElement.style.display = "none";

    }
}

function refresh01() {
    var origen01 = this.parentElement.getElementsByTagName('input')[0].value;
    alert(origen01);
}

function load_window01() {
    // alert(document.getElementById(id_01).contentWindow.document.body.innerHTML);
    var numero_01 = document.getElementsByClassName("master-window-open").length + document.getElementsByClassName("master-window-closed").length
        //   var node = document.createElement("LI");                 // Create a <li> node
        //var textnode = document.createTextNode("Water");         // Create a text node
        //node.appendChild(textnode);                              // Append the text to <li>
    document.body.innerHTML +=

        ///"<div class='master-window-open' id='window" + (numero_01 + 1) + "'>" +

        '<div  onmouseleave="leave01(this.id)" onmouseenter="mueve01(this.id)"  class="master-window-open" id="window' +
        (numero_01 + 1) +
        '">' +
        //   document.getElementById(id_01).srcdoc +
        //document.getElementById("imp_exp").srcdoc =

        '<div class="  div_type01 border_01 style_02">' +
        '<div class="div_brand">' +
        '   Spool' +
        '</div>' +

        '<div class="div_tool01 border_01">' +
        '<button class="down" onclick="">_</button>' +

        '<button class="max">[]</button>' +
        '<button class="min" onclick="">X</button>' +
        '</div>' +
        '<div class="div_type02 border_02">' +
        '<button id="' +
        numero_01 +
        '" class="btn01" onclick="' +
        // "for(i=0;i<document.body.getElementsByTagName('div')[1].getElementsByTagName('div').length;i++){this.parentElement.innerHTML+=document.body.getElementsByTagName('div')[1].getElementsByTagName('*')[i].outerHTML}     " +


        'tool_001(this.id)">carga</button><hr>' +
        '<div class="cl32"></div>'

    '</div>' +
    '</div> ' //.contentWindow.document.body.outerHTML + "</div>"; // appendChild(node);     // Append <li> to <ul> with id="myList"'+
    start01();
}

function tool_001(id_03) {
    //   document.getElementById(id_03).parentElement.innerHTML =
    //     '<button id="' +
    //   id_03 +
    // '" onclick="tool_001(this.id)">carga</button>';
    var text03 = "";
    // alert(document.getElementsByTagName("*").length)

    for (i = 0; i < document.getElementsByTagName("*").length; i++) {
        text03 +=
            "<div class='cl30'>" +
            document.getElementsByTagName("*")[i].tagName +
            "</div><div class='cl31'></div>"
    }
    document.getElementById(id_03).parentElement.getElementsByClassName('cl32')[0].innerHTML = text03
}