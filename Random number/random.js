const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min)+1)+min;
run=true;
let t=0;
while(run){
 let a=window.prompt("Guess a number between "+min +" - "+ max);
 a=Number(a);
 if(isNaN(a)){
    window.alert("Please enter a valid number");
 }
 if(a<min || a>max){
    window.alert("Please enter a valid number");
 }
 if(a<ans){
    window.alert("Guess is Too Low");
 }
 else if(a>ans){
     window.alert("Guess is too high");
 }
 else{
     run=false;
    }
    t++;
}
window.alert("You have guessed it in "+t+  " attempts");