const a=document.getElementById("add");
const b=document.getElementById("inp");
const c=document.getElementById("list");
a.onclick=function(){
  c.textContent=b.value;
}