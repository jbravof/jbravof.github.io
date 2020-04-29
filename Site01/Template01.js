function check01(valor_id) {
    var check01 = document.getElementById(valor_id).style.display;
    // alert(check01);
    if (check01 == "block") {
        document.getElementById(valor_id).style.display = "none";
    } else {

        document.getElementById(valor_id).style.display = "block";
    }


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

function carga_01() {

    console.log(window.innerWidth)
    console.log(window.innerHeight)

}

function get_02() {
    //    document.getElementById("sel0111").innerHTML = "";
    var crea06 = "";
    var log01 = document.getElementById("contentFrame").contentWindow.document.getElementById("content").getElementsByTagName("*");
    console.log(log01.length)
    for (i = 0; i < log01.length; i++) {

        console.log("TagName" + log01[i].tagName + "Nodes" + log01[i].childNodes.length + "ID" + log01[i].id);
        crea06 += "<div>" +
            "TagName" + log01[i].tagName + "Nodes" + log01[i].childNodes.length + "ID" + log01[i].id +

            "</div>"


    }

    console.log(crea06);
    document.getElementById("sel0111").innerHTML = "<div class='addin'>" + crea06 + "</div>"
}

function get_03() {
    //    document.getElementById("sel0111").innerHTML = "";
    var crea07 = "";
    var log01 = document.getElementById("contentFrame").contentWindow.document.getElementById("content").getElementsByTagName("*");
    console.log(log01.length)
    crea07 += "<table>"
    crea07 += "<thead>"
    crea07 += "<tr>"
    crea07 += "<td>"
    crea07 += "TagName"
    crea07 += "</td>"
    crea07 += "<td>"
    crea07 += "Nodes"
    crea07 += "</td>"

    crea07 += "<td>"
    crea07 += "ID"
    crea07 += "</td>"

    crea07 += "</tr>"
    crea07 += "</thead>"
    crea07 += "<tbody>"


    for (i = 0; i < log01.length; i++) {

        //  console.log("TagName" + log01[i].tagName + "Nodes" + log01[i].childNodes.length + "ID" + log01[i].id);
        crea07 += "<tr>"
        crea07 += "<td>"
        crea07 += log01[i].tagName
        crea07 += "</td>"
        crea07 += "<td>"
        crea07 += log01[i].childNodes.length
        crea07 += "</td>"

        crea07 += "<td>"
        crea07 += log01[i].id
        crea07 += "</td>"

        crea07 += "</tr>"




    }
    crea07 += "</tbody>"

    crea07 += "</table>"
    console.log(crea07);
    //  document.getElementById("sel0111").innerHTML = "<div class='addin'>" + crea06 + "</div>"
}