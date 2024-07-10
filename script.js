var number = Math.floor(Math.random() * 30);

var win = false;
for(var tries = 1; tries <= 5; tries=tries+1){
  var ans = prompt("Guess the number");
  if(ans == number){
    win = true;
    break;
  }else if(ans > number){
    alert("A little less");
  }else{
    alert("A little more");
  }
}
if(win==true){
  alert("You won!");
}else{
  alert("You lost! The number was " + number);
}
var name = document.getElementById("num").innerHTML = number;


