function load_window03() {
    // alert(document.getElementById(id_01).contentWindow.document.body.innerHTML);
    var numero_01 = document.getElementsByClassName("master-window-open").length + document.getElementsByClassName("master-window-closed").length
        //   var node = document.createElement("LI");                 // Create a <li> node
        //var textnode = document.createTextNode("Water");         // Create a text node
        //node.appendChild(textnode);                              // Append the text to <li>
    document.body.innerHTML +=
        '<div  onmouseleave="leave01(this.id)" onmouseenter="mueve01(this.id)"  class="master-window-open" id="window' +
        (numero_01 + 1) +
        '">' +
        //   document.getElementById(id_01).srcdoc +
        //document.getElementById("imp_exp").srcdoc =

        '<div class="  div_type01 border_01 style_02">' +
        '<div class="div_brand">' +
        '   Window02' +
        '</div>' +

        '<div class="div_tool01 border_01">' +
        '<button class="down" onclick="">_</button>' +

        '<button class="max">[]</button>' +
        '<button class="min" onclick="">X</button>' +
        '</div>' +
        '<div class="div_type02 border_02">' +
        '<div class="div_browser">' +
        '<div><button onclick="' +
        "var origen01 = this.parentElement.getElementsByTagName('input')[0].value;this.parentElement.parentElement.getElementsByTagName('iframe')[0].src=origen01" +
        '">Refresh</button>' +
        '<input type="text" value="chrome-extension://plcnnpdmhobdfbponjpedobekiogmbco/options/options.html"/>' +
        '</div>' +
        '<nav>' +
        '<iframe></iframe>' +
        '</nav>' +
        '</div>' +


        '</div>' +
        '</div> ' //.contentWindow.document.body.outerHTML + "</div>"; // appendChild(node);     // Append <li> to <ul> with id="myList"'+
    start01();
}

function tool_003(id_03) {
    //   document.getElementById(id_03).parentElement.innerHTML =
    //     '<button id="' +
    //   id_03 +
    // '" onclick="tool_001(this.id)">carga</button>';
    var text03 = "";
    // alert(document.getElementsByTagName("*").length)

    for (i = 0; i < document.getElementsByTagName("*").length; i++) {
        text03 +=

            '<div onclick="' +
            "this.parentElement.parentElement.getElementsByClassName('cl34')[0].innerHTML=document.getElementsByTagName('*')[" + i + "].outerHTML;" +
            '" class="cl30">' +
            document.getElementsByTagName("*")[i].tagName +
            '</div>';
    }
    document.getElementById(id_03).parentElement.getElementsByClassName('cl33')[0].innerHTML = text03
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}