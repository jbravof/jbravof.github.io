  function uno(txt001){
 //alert(txt001);
 getCookie(txt001)
// WshShell = new ActiveXObject("WScript.Shell");
//WshShell.Run (cmd,0,true);
//var objShell = new ActiveXObject("Shell.Application");
   //    objShell.ShellExecute("cmd.exe", "C: cd C:\\pr main.exe blablafile.txt auto", "C:\\WINDOWS\\system32", "open", "1");
 //var objShell = new ActiveXObject("Shell.Application");
   //   objShell.ShellExecute("cmd.exe", "cd c:\\", "C:\\WINDOWS\\system32", "open", "1");
 }
    function dos(){
  //alert(document.getElementById("ifr001").contentDocument.getElementsByTagName("*").length);
  var cuadro01=document.getElementById("ifr001").contentDocument;
var lista002=cuadro01.getElementsByTagName("*").length;
var elem003=cuadro01.getElementsByTagName("*")[0];
var val004=elem003.innerHTML;
alert(val004);
  }
    function dos3(){
  //alert(document.getElementById("ifr001").contentDocument.getElementsByTagName("*").length);
  var cuadro01=document.getElementById("ifr001").contentDocument;
var lista002=cuadro01.body.getElementsByTagName("*").length;
//alert(lista002);
var elem003=cuadro01.getElementsByTagName("*")[6];
var val004=elem003.innerHTML;
//alert(val004);
//alert(elem003.getElementsByTagName("A").length);
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";var text2 = "";
var i;
for (i = 1; i < elem003.getElementsByTagName("A").length; i++) { 
  text += elem003.getElementsByTagName("A")[i].innerHTML + "<br>";
  text2 += "   <style>.fakeimg {height: auto; background: #aaa;padding: 5px;border:solid 1px blue;border-radius:10px;}</style><p class='fakeimg'><a class='nav-link btn btn-primary' href='" + elem003.getElementsByTagName("A")[i].href  + "'>" + elem003.getElementsByTagName("A")[i].innerHTML +"</a></p>";
}

//alert(text2);
 document.getElementById("ifr002").contentDocument.body.innerHTML= ("<base href='http://localhost/webspace/' target='ifr001'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>" + text2) ;
 // document.getElementById("div003").style="display:block";
  }
    function tres(){
      window.domain="file:///G:/My%20Drive/WebSites/webspace"
       alert(window.domain)


  //alert(document.getElementById("ifr001").contentDocument.getElementsByTagName("*").length);
  var cuadro01=document.getElementById("ifr001").contentWindow;

 // cuadro01.domain="file:///G:/My%20Drive/WebSites/webspace"
     //  alert(cuadro01.domain)

var lista002=cuadro01.document.getElementsByTagName("*").length;
var elem003=cuadro01.getElementsByTagName("*")[0];
var val004=elem003.innerHTML;
//alert(val004);
  }

  function load003() {
 //   alert("si");

    var browser01 = document.getElementById("ifr001");

    var content01 = browser01.contentWindow.document;

    var suma01 = content01.getElementsByTagName("A").length;
  //alert(suma01);
  if(suma01==0){  }else{dos3();}

}
var i=1;

function span01(textspan){
//	alert(textspan);
	if(i==1){document.getElementById(textspan).setAttribute("style", "border:solid 3px red;border-radius:10px");i=2}else{document.getElementById(textspan).setAttribute("style", "border:solid 1px rgb(204, 204, 204)");i=1}
	
	//alert(document.getElementById("div004").getAttribute("style"));
	if(document.getElementById('div004').getAttribute("style")=='display: none;'){document.getElementById('div004').setAttribute("style", "display: block;");}else{document.getElementById('div004').setAttribute("style", "display: none;")}
//var styleSheetList = document.styleSheets;
///var first_rule = styleSheetList[0].cssRules[0];
//console.log( first_rule.selectorText);  //should print "div"
//console.log( first_rule.style.position);  

}
function span011(){
if(document.getElementById('ifr002').getAttribute("style")=='display: none;'){document.getElementById('ifr002').setAttribute("style", "display: block;");}else{document.getElementById('ifr002').setAttribute("style", "display: none;")}

}
function span012(){
if(document.getElementById('div006').getAttribute("style")=='display: none;'){document.getElementById('div006').setAttribute("style", "display: block;");}else{document.getElementById('div006').setAttribute("style", "display: none;")}

}
function span02(){
	 var  cuadro01=document.getElementById("ifr001").contentDocument.body;
 
	 cuadro01.innerHTML=cuadro01.innerHTML + document.getElementById("divspan").innerHTML;
}
function span03(){
	 

	var cuadro01=document.getElementById("ifr001").contentDocument;
 
	cuadro01.head.innerHTML=document.head.innerHTML;

}
function span04(){
	var cname2=document.getElementById("name01").value;
	//alert(cname2)
var valnome012=document.getElementById("value01").value;
var expires2=document.getElementById("expires01").value;
setCookie(cname2, valnome012, expires2)
var x = document.cookie;

	var cuadro01=document.getElementById("ifr001").contentDocument;
 
cuadro01.body.innerHTML=x;

}
	function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=";
}
//function span05(){
		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
				for(var i = 0; i <ca.length; i++) {
					var c = ca[i];
						while (c.charAt(0) == ' ') {
							c = c.substring(1);
			}
    if (c.indexOf(name) == 0) {
		  	var cuadro01=document.getElementById("ifr002").contentDocument;
 var split02=(c.substring(name.length, c.length)).split('=');		
 document.getElementById("name01").value= cname;
  document.getElementById("value01").value= split02[0]
//cuadro01.body.innerHTML=c.substring(name.length, c.length);	
		
     // return c.substring(name.length, c.length);

    }
  }
  return "";
}
//getCookie("nome01")

//	var	newCookie="username=John Doe";
//	 document.cookie = newCookie
//document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
//var	newCookie="username=John Doe; expires=2018-12-8T00:07:59.000Z; path=/"
	// document.cookie = newCookie

//	var cuadro01=document.getElementById("ifr001").contentDocument;
 
//	cuadro01.body.innerHTML=x;
//getcoklist()
//}

function getcoklist(){
	var text2="";
	var cuadro01=document.getElementById("ifr002").contentDocument;
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length ; i++) {
				var c = ca[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					}
 //   if (c.indexOf(name) == 0) {
		
var split02=(c.substring(name.length, c.length)).split('=');		
 //alert(split02[0]);
 ///for(var i = 0; i <split02.length; i++) {
	  //  var c2 = split02[i];
  // while (c2.charAt(0) == ' ') {
  //    c2 = c2.substring(1);
	    text2 += "   <style>.fakeimg {height: auto; background: #aaa;padding: 5px;border:solid 1px blue;border-radius:10px;}</style><p class='fakeimg'><a class='nav-link btn btn-primary' href=' javascript:void(0) ' onclick='javascript:parent.uno(this.innerHTML)'>" + split02[0] +"</a></p>";

	//  cuadro01.body.innerHTML=cuadro01.body.innerHTML + split02[0] + "<br>";	

 //  }
		
 //   return c.substring(name.length, c.length);

    }
 // cuadro01.body.innerHTML=text2 + "<br>";	
 document.getElementById("ifr002").contentDocument.body.innerHTML= ("<base href='/webspace/' target='ifr001'><script src='/webspace/js/jsc01.js'></script><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>" + text2) ;
   return "";
}
