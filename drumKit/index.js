// to detect button presses

var numberOfButtonPresses= document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtonPresses;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonFlash(buttonInnerHTML);
  });
}


// var audio= new Audio('sounds/tom-1.mp3');
// audio.play();
document.addEventListener("keypress",function(event){

   makeSound(event.key);
   buttonFlash(event.key);

});


function makeSound(key) {
  switch(key) {
    case 'w' : var snareAudio= new Audio('sounds/snare.mp3');
                   snareAudio.play();
                   break;
    case 'a' : var tom3Audio= new Audio('sounds/tom-3.mp3');
                   tom3Audio.play();
                   break;
    case 's' : var tom1Audio= new Audio('sounds/tom-1.mp3');
                tom1Audio.play();
                break;
    case 'd' : var bassAudio= new Audio('sounds/kick-bass.mp3');
                 bassAudio.play();
                 break;
    case 'j' : var tom2Audio= new Audio('sounds/tom-2.mp3');
                  tom2Audio.play();
                  break;
    case 'k' : var tom4Audio= new Audio('sounds/tom-4.mp3');
                 tom4Audio.play();
                 break;
    case 'l' : var crashAudio = new Audio('sounds/crash.mp3');
                  crashAudio.play();
                  break;

    default : console.log('Wrong button');
  }
    }

function buttonFlash(button)
{
  var flashButton= document.querySelector("."+ button);
  flashButton.classList.add("pressed");

  //to reset the shadow
  setTimeout(function(){
    flashButton.classList.remove("pressed");
  },150);

}
