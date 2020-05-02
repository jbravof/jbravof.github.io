function uno(){
var iframe1 = document.getElementById('ifr01');
 // iframe1.contentWindow.document.domain="//marydell/Users/Jota/Desktop/Programming/Page001/"

  var frameDocument = iframe1.contentDocument ? iframe1.contentDocument : iframe1.contentWindow.document;


var title = frameDocument.getElementsByTagName("h1")[0];
alert(title.textContent);
//var iframe = window.frameElement;
//var width = iframe.style.width;
//alert(width);
var oldName = iframe1.contentWindow.name;
var checkName = function() {
  if(iframe1.contentWindow.name != oldName) {
    alert("window name changed to "+iframe1.contentWindow.name);
    oldName = iframe1.contentWindow.name;
  }
}
setInterval(checkName, 1000);


  alert(99);
  var src01=document.getElementById("ifr01").src;

var src02=document.getElementById("ifr01").contentWindow;

  alert("SRC01:"+src01);
  alert("SRC02:"+src02.document.body.innerHTML);
}

function myFunction() {
 // var x = document.getElementById("ifr01");
 // var y = x.contentWindow;
 // alert(y.document.body.innerHTML)
 // y.document.body.style.backgroundColor = "red";

  //tool01div01
  var tool01_01 = document.getElementById("ifr01").contentWindow;
  var tool01_02 = document.getElementById("tool01div01");

//tool01_02.innerHTML=tool01_01.document.body.innerHTML

var quest01=prompt("TAG Name","DIV");

//alert(tool01_01.document.getElementsByTagName(quest01).length);

var i;
for (i = 0; i < tool01_01.document.getElementsByTagName(quest01).length; i++) {
 // text += cars[i] + "<br>";

  document.getElementById("tool01div01").innerHTML +="<div class='cl09'>  TagName: "+tool01_01.document.getElementsByTagName(quest01)[i].tagName + "<br>  id: "+tool01_01.document.getElementsByTagName(quest01)[i].id + "<br><div class='cl08'>" + tool01_01.document.getElementsByTagName(quest01)[i].innerHTML + "<br></div></div><br>";
}

}
function dosold() {
  var x = document.getElementById("ifr01");
  var y = x.contentWindow;
  alert(y.document.innerHTML)
  y.body.style.backgroundColor = "red";
}
function dos() {
//alert(document.getElementById("ifr01").getAttribute("display"));
document.getElementById("central01").style.display="none";
//document.getElementById("central01").style.display="none";

//document.getElementById("central02").style.display="contents";
//document.getElementById("central02").style.flex="1 0 85%";
//flex: 1 0 85%;max-width: fit-content;
//document.getElementById("central02").style="max-width:fit content";
}

function dosdos() {

//document.getElementById("central02").style.display="table";
document.getElementById("central01").style.display="block";
//document.getElementById("central01").class="col-sm-7";
//document.getElementById("central02").class="col-sm-3";
}
function clear01(){
  document.getElementById("tool01div01").innerHTML ="";

}