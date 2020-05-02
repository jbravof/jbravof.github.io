function uno(){
var iframe1 = document.getElementById('ifr01');
  iframe1.contentWindow.document.domain="//marydell/Users/Jota/Desktop/Programming/Page001/"

  var frameDocument = iframe1.contentDocument ? iframe1.contentDocument : iframe1.contentWindow.document;


var title = frameDocument.getElementsByTagName("h1")[0];
alert(title.textContent);
var iframe = window.frameElement;
var width = iframe.style.width;
alert(width);
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

var src02=document.getElementById("ifr01").contentDocument;

  alert("SRC01:"+src01);
  alert("SRC02:"+src02.document.body.innerHTML);
}

function myFunction() {
  var x = document.getElementById("ifr01");
  var y = x.contentWindow;
  alert(y.document.innerHTML)
  y.body.style.backgroundColor = "red";
}

function dos() {
  var x = document.getElementById("ifr01");
  var y = x.contentWindow;
  alert(y.document.innerHTML)
  y.body.style.backgroundColor = "red";
}