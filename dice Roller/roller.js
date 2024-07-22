const t=document.getElementById("roll");
t.onclick= function(){
    const a=document.getElementById("inp").value;
    const b=document.getElementById("ig");
    const d=document.getElementById("val");
    const ig=[];
    const val=[];
    for(let i=0;i<a;i++){
        const c=Math.floor(Math.random()*6)+1;
        ig.push(`<img src="images/${c}.svg" alt="Dice ${c}">`);
        val.push(c);
    }
    d.textContent=val.join(" ");
    b.innerHTML=ig.join(" ");
}