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
    // alert(document.getElementById(id_01).contentWindow.document.body.innerHTML);

    //   var node = document.createElement("LI");                 // Create a <li> node
    //var textnode = document.createTextNode("Water");         // Create a text node
    //node.appendChild(textnode);                              // Append the text to <li>
    document.body.innerHTML += "<div class='master-window-open' id='window" + numero_01 + "'>" +
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
        '<button onclick="' +
        "for(i=0;i<document.body.getElementsByTagName('button').length-1;i++){this.parentElement.innerHTML+=document.body.getElementsByTagName('button')[i].outerHTML}     " +
        '">carga</button>' +

        '</div>' +
        '</div> ' //.contentWindow.document.body.outerHTML + "</div>"; // appendChild(node);     // Append <li> to <ul> with id="myList"'+
        //  start01();
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
                    minimize_01(this.parentElement.parentElement.parentElement.id)
                    break;
                case "max":
                    maximize_01(this.parentElement.parentElement.parentElement.id)
                    break;
                case "down":
                    down_01(this.parentElement.parentElement.parentElement.id)
                    break;
                case "div_brand":
                    this.parentElement.parentElement.className = "master-window-closed"
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