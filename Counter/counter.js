let a=0;
 
document.getElementById("decrease").onclick=function(){
    a--;
    document.getElementById("count").textContent=a;
}
document.getElementById("reset").onclick=function (){
    a=0;
    document.getElementById("count").textContent=a;
}
document.getElementById("increase").onclick=function (){
    a++;
    document.getElementById("count").textContent =a;
}



