const v=document.getElementById("visa");
const m=document.getElementById("master");
const u=document.getElementById("upi");
const s=document.getElementById("submit");
const h=document.getElementById("h2");
s.onclick=function(){
    if(v.checked){
        h.textContent="Pay via Visa";
    }
    else if(m.checked){
        h.textContent="Pay via MasterCard";
    }
    else if(u.checked){
        h.textContent="Pay via UPI";
    }
    else{
        h.textContent="Chose a payment Option";   
    }

}
