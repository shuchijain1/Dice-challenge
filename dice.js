var randomNumber1=Math.floor(Math.random()*6)+1;
var diceImage1="dice"+randomNumber1+".png";
var diceSource1="images/"+diceImage1;
document.querySelectorAll("img ")[0].setAttribute("src",diceSource1);


var randomNumber2=Math.floor(Math.random()*6)+1;
var diceImage2="dice"+randomNumber2+".png";
var diceSource2="images/"+diceImage2;
document.querySelectorAll("img ")[1].setAttribute("src",diceSource2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
