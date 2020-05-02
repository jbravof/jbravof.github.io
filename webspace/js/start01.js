function alerta01(){

console.log(window.innerHeight)
document.body.setAttribute("style" ,"height:" + (window.innerHeight - 5) + "px;margin:0px;overflow-y:scroll");
window.document.getElementById("dentro").style.left="4px";

}

var ii=0;

function mueve01(){

    for (i=0 ; i<5 ;i++){
        ii+=5;
        window.document.getElementById("dentro").style.left= ii + "px";
        console.log(window.document.getElementById("dentro").style.left)
      }


  
}

function rellena001(tag01,ind01,text01,repet01){

            for (i=0 ; i<repet01 ;i++){
                   

                    document.getElementsByTagName(tag01)[ind01].innerHTML+= i + "<br>";
           
                  }




}