function trestres(){

//alert(88);
$( "#mainNav" ).load( "topcontent/hoja.html", function() {
  console.log( "Loaded" );
 $("#siteAds").append("<div style='margin-top:5px;border:solid 2px black;border-radius:5px;overflow:auto'>Loaded.</div>");

 $(".cl025").attr("target", "ifr10");
});

 


}

function trestres2(){

//alert(88);
$( "#editor" ).load( "../topcontent/hoja.html", function() {
  console.log( "Loaded" );
  		        var x = document.getElementsByClassName("ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred");
//class="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred" 
alert(x[0].innerHTML);
alert($( "#editor" ).val);
x[0].innerHTML="222222222";
});

 


}

