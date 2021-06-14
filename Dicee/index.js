//generate a random number between 1 to 6
function valid(name) {
  return (name != null);
}


var player1 = prompt('Enter player1 name: ');
var player2 = prompt('Enter player2 name: ');

if (player1 != '' && player2 != '') {

  randomNumber1 = Math.random();
  randomNumber1 = Math.random() * 6;
  randomNumber1 = Math.floor(randomNumber1) + 1;

  //generate a string

  var diceImgString1 = "images/dice" + randomNumber1 + ".png";

  //we're using query selector all so that only the first one won't get selcted, instead all of them can be selected

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", diceImgString1);

  randomNumber2 = (Math.floor(Math.random() * 6) + 1)

  var diceImgString2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", diceImgString2);

  if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = player1 + " wins! 🏆";
  else if (randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = player2 + " wins! 🏆";
  else
    document.querySelector("h1").innerHTML = "It's a draw ! 🏆";
} else {
  alert('Please refresh page and enter valid name');

}
