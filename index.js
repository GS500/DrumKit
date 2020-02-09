//detecting button clicks
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML.toUpperCase();
      Keypress(buttonInnerHTML);
  });
}

//detecting key press
document.addEventListener("keydown", function(event){
  Keypress(event.key.toUpperCase());
});


function Keypress(key) {
  switch (key) {
    case "W":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "A":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "S":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "D":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "J":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "K":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "L":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttoninnerHTML);
      break;
  }
};