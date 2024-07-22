const pi=3.14;
let radius;
let area;
document.getElementById("submit").onclick =function() {
    radius=document.getElementById("tex").value;
    radius=Number(radius);
    area=pi*radius*radius;
    document.getElementById("myh4").textContent=area;
}