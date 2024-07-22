const inp=document.getElementById("tem");
const cel=document.getElementById("cel");
const far=document.getElementById("far");
const answer=document.getElementById("ans");
const sub=document.getElementById("sub");
let tem=0;
sub.onclick = function (){
    if(!cel.checked && !far.checked){
        window.alert("Select the Conversion units");
    }
    if(cel.checked){  
        tem=((9/5)*tem)+32;
        answer.textContent=tem;
    }
    else{
        tem=(tem-32)*5/9;
        answer.textContent=tem;
       
    }
}

