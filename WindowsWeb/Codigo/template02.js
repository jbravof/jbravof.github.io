/* function cambia01(texto_01) {
    //   alert(texto_01);
    //   alert(document.getElementsByClassName(texto_01)[0].outerHTML)
    document.getElementsByClassName(texto_01)[0].style = `position:absolute;top:0;left:0;right:0;bottom:0;margin-top:0;margin-left:0;margin-right:0;width:100%;height:98%;z-index:10;`
} */

function minimize_01(texto_01) {
    document.getElementById(texto_01).style = ``
}

function down_01(texto_01) {
    document.getElementById(texto_01).style = `display:none;`
}

function maximize_01(texto_01) {
    document.getElementById(texto_01).style = `position:absolute;top:0;left:0;right:0;bottom:0;margin-top:0;margin-left:0;margin-right:0;width:100%;height:98%;z-index:10;`
}


/* function cambia02(texto_01) {
    //   alert(texto_01);
    //   alert(document.getElementsByClassName(texto_01)[0].outerHTML)
    document.getElementsByClassName(texto_01)[0].style = ``
}
 */
function mueve_01(className_01) {
    //  alert(document.getElementsByClassName(className_01)[0].className.split(" ")[0]);
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
                default:
                    // code block
            }
        });

    }


}

function oir11_01() {
    document.getElementById("over_01").addEventListener("click", function() {

        auto_01("over_01");


    });

    document.getElementsByClassName("min")[0].addEventListener("click", function() {

        alert("over_01");
        cambia01(this.parentElement.parentElement.className);

    });
    document.getElementsByClassName("min")[1].addEventListener("click", function() {

        alert("over_01");
        cambia01(this.parentElement.parentElement.className);

    });
}

var contador_01 = 0;

function auto_01(valor_id2) {
    var css01 = "width: auto;position: absolute;padding: 1px;z-index: 100;background: transparent;box-shadow: -1px 1px 13px red;top: 3;left: 3;width:20px;height:20px;border:solid 1px white"
    var css02 = "width: auto;position: absolute;padding: 1px;z-index: 100;background: transparent; /*box-shadow: -1px 1px 13px red*/;top: 3;left: 3;width:20px;height:20px;border:none"

    if (contador_01 < 2) {
        document.getElementById(valor_id2).style = css01;
        contador_01 = contador_01 + 1;
        // document.getElementById(valor_id2).innerHTML = contador_01;
        setTimeout(function() {
            document.getElementById(valor_id2).style = css02;
            setTimeout(function() {

                auto_01(valor_id2);

            }, 500)


        }, 500)
    } else {
        document.getElementById(valor_id2).style = "";
        contador_01 = 0;
    }

}

function load_01(id_01, numero_01) {
    // alert(document.getElementById(id_01).contentWindow.document.body.innerHTML);

    //   var node = document.createElement("LI");                 // Create a <li> node
    //var textnode = document.createTextNode("Water");         // Create a text node
    //node.appendChild(textnode);                              // Append the text to <li>
    document.body.innerHTML += "<div id='window" + numero_01 + "'>" + document.getElementById(id_01).contentWindow.document.body.outerHTML + "</div>"; // appendChild(node);     // Append <li> to <ul> with id="myList"
    //  start01();
}

function start01() {
    setTimeout(function() {
        //  oir_01();
        add_listener_to_class_01("max")
        add_listener_to_class_01("min")
        add_listener_to_class_01("down")
    }, 1000);

}


function start02(url_01) {
    setTimeout(function() {
        document.getElementById("imp_exp").src = url_01;

    }, 500);

    setTimeout(function() { load_01("imp_exp"); }, 1000);
}

var array_01 = ["Plantillas/spool.html", "Plantillas/template04.html", "Plantillas/favorites.html", "Plantillas/menus.html"]; //, "template04.html", "template03.html"];

var contador_02 = 0;

function start00() {


    if (contador_02 < array_01.length) {
        document.getElementById("imp_exp").src = array_01[contador_02];
        setTimeout(function() {

            load_01("imp_exp", contador_02);
            start00();
        }, 100)

        var boton = "";
        boton += "<button onclick='oculta_01(" + contador_02 + ")'> "
        boton += array_01[contador_02]
        boton += "</button> "

        contador_02 = contador_02 + 1;
        document.getElementsByClassName("toolbar")[0].innerHTML += boton;
    } else {

        //  contador_02 = 0;
    }

}

function oculta_01(indice_01) {
    var control01 = document.getElementsByClassName("master0")[indice_01].parentElement.style.display;
    if (control01 == "none") {
        document.getElementsByClassName("master0")[indice_01].parentElement.style.display = "block";
    } else {
        document.getElementsByClassName("master0")[indice_01].parentElement.style.display = "none";

    }
}