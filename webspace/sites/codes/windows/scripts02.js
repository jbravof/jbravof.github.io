$("#btn01").click(function() {
    $("#icons").toggle();

});

$("#btn02").click(function() {
   alert($(".wincontent ui-resizable").length);

   
alert(document.getElementsByClassName("wincontent ui-resizable").length);

alert(document.getElementsByClassName("wincontent ui-resizable")[3].innerHTML);
alert(document.getElementsByClassName("wincontent ui-resizable")[3].id);
});
