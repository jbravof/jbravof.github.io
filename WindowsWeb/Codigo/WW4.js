function load_window02() {
    // alert(document.getElementById(id_01).contentWindow.document.body.innerHTML);
    var numero_01 = document.getElementsByClassName("master-window-open").length + document.getElementsByClassName("master-window-closed").length
        //   var node = document.createElement("LI");                 // Create a <li> node
        //var textnode = document.createTextNode("Water");         // Create a text node
        //node.appendChild(textnode);                              // Append the text to <li>
    document.body.innerHTML +=
        '<div onmouseleave="leave01(this.id)" onmouseenter="mueve01(this.id)" class="master-window-open" id="window' +
        (numero_01 + 1) + '">' +
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
        '<select>' +
        '<option value=""></option>' +
        '<option value="*">All</option>' +

        '<option value="DIV">Div</option>' +
        '<option value="BUTTON">Button</option>' +
        '<option value="SPAN">span</option>' +
        '<option value="IMG">Image</option>' +
        '<option value="TABLE">Table</option>' +
        '<option value="TR">Table R</option>' +
        '<option value="TD">Table C</option>' +
        '<option value="A">Link</option>' +

        '<option value="NAV">Nav</option>' +
        '<option value="UL">Unordered List</option>' +
        '<option value="OL">Ordered List</option>' +

        '<option value="LI">List Item</option>' +


        '</select>' +
        '<button id="' +
        numero_01 +
        '" class="btn01" onclick="' +


        'tool_002(this.id)">carga</button>' +

        '<select id="btn' +
        numero_01 +
        '" onclick="' +
        'tool_10222(this.id)' +
        '"></select>' +
        '<button id="btn' +
        numero_01 +
        '" class="btn01" >boton</button>' +
        '<hr>' +
        '<div class="cl33"></div>' +
        '<div class="cl34"></div>'


    '</div>' +
    '</div> ' //.contentWindow.document.body.outerHTML + "</div>"; // appendChild(node);     // Append <li> to <ul> with id="myList"'+
    start01();
}

function mueve01(id_04) {

    document.getElementById(id_04).className = document.getElementById(id_04).className + " select";
}

function leave01(id_05) {
    //  alert(document.getElementById(id_05).className.split(" ")[0])
    document.getElementById(id_05).className = document.getElementById(id_05).className.split(" ")[0];

}

function tool_002(id_03) {
    //   document.getElementById(id_03).parentElement.innerHTML =
    //     '<button id="' +
    //   id_03 +
    // '" onclick="tool_001(this.id)">carga</button>';
    var text03 = "";
    // alert(document.getElementsByTagName("*").length)
    var text04 = document.getElementById(id_03).parentElement.getElementsByTagName("SELECT")[0].value;
    for (i = 0; i < document.getElementsByTagName(text04).length; i++) {
        var text05 = document.getElementsByTagName(text04)[i];
        if (text05.id == "") { id01 = "none" } else { id01 = text05.id }
        if (text05.className == "") { class01 = "none" } else { class01 = text05.className }
        if (text05.onclick == "") { oncl01 = "none" } else { oncl01 = "yes" }


        text03 +=

            '<div  onclick="' +
            "this.parentElement.parentElement.getElementsByClassName('cl34')[0].innerHTML=document.getElementsByTagName('" + text04 + "')[" + i + "].outerHTML;" +
            '" class="cl30">' +
            document.getElementsByTagName(text04)[i].tagName +

            '<div>' +
            '<div>ID:' + id01 + '</div>' +
            '<div>Class:' + class01 + '</div>' +
            '<div>onClick:' + oncl01 + '</div>' +
            '</div>' +

            '</div>';
    }
    document.getElementById(id_03).parentElement.getElementsByClassName('cl33')[0].innerHTML = text03
    tool_102(id_03);
}

function tool_102(id_03) {
    document.getElementById(id_03).parentElement.getElementsByTagName("SELECT")[1].innerHTML = "";
    var text04 = document.getElementById(id_03).parentElement.getElementsByTagName("SELECT")[0].value;

    var text03 = "";
    for (i = 0; i < document.getElementsByTagName(text04).length; i++) {

        if (document.getElementsByTagName(text04)[i].className == "") {} else {
            text03 +=

                '<option>' +


                document.getElementsByTagName(text04)[i].className +
                '</option>'

        }

    }

    document.getElementById(id_03).parentElement.getElementsByTagName("SELECT")[1].innerHTML = text03;

}