// function turnon() {
// var a=document.querySelector("img");
// a.src="on.jpg";
// var b=document.querySelector("button");
// b.innerHTML="Turn Off";
// }




var a=document.querySelector("img");
    var b=document.querySelector("button");
    b.addEventListener("click",turnon);

function turnon() {
    
    if(a.src.match("off.jpg")) {
        var c= a.src="on.jpg";
        b.innerHTML="Turn Off";
    }
    else{
        var d= a.src="off.jpg";
        b.innerHTML="Turn On";
    }
    
    }