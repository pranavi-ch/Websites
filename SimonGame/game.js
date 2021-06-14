//when game hasn't started yet
var level = 0;
var started = false;

//starts the game when user enters any key
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level 0");
    nextSequence();
    started = true;
  }
});




var buttonColors = ["green", "yellow", "blue", "red"];
//the sequence given by the game
var gamePattern = [];
//sequence entered by user
var userClickedPattern = [];


//generates the next button randomly and adds it to game sequence
function nextSequence() {
  //fresh pattern
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}



//checks which button is pressed by user and added to userClickedPattern
$(".btn").click(function() {
  //get the color clicked from the id
  var userChosenColor = $(this).attr("id");
  // console.log(userChosenColor);
  //add it to the user clicked pattern array
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);

  // console.log(userClickedPattern);

});

//plays the sound of the respective colored button
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//shadows the button which is pressed for 180 ms
function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 180);

}


//checks at every entry if the sequence is matching
function checkAnswer(currentLevel) {
  //console.log(userClickedPattern);
  var flag = 0;
  console.log(gamePattern);
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    console.log('Success');
  else
    flag = 1;

  if (userClickedPattern.length === gamePattern.length && flag === 0) {
    setTimeout(nextSequence(), 500);


  }

  if (flag === 1) {
    console.log(userClickedPattern);
    gameOver();
  }

}

// displays game over to the player and restarts the game
function gameOver() {
  var wrongAudio = new Audio('sounds/wrong.mp3');
  wrongAudio.play();
  $("body").addClass("game-over");
  //remove game over in 500 ms
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 300);

  //change h1 to say GAME OVER
  $("#level-title").text('GAME OVER! Press any key to restart');
  startOver();
}


//reloads and starts a new game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
