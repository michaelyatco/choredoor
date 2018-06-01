//Default global values:
let highScore = 0;
let score = 0;
let doors;
let door1Clicked;
let door2Clicked;
let door3Clicked;
let currentlyPlaying = false;
let door1Doom;
let door2Doom;
let door3Doom;
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById("start");
let scoreDisplay = document.getElementById('score-number');
let highScoreDisplay = document.getElementById('high-score-number');
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoor = "images/closed_door.svg";
let botDoor = "images/Robot_open_door.svg";
let beachDoor = "images/beach_open_door.svg";
let spaceDoor = "images/space_open_door.svg";
scoreDisplay.innerHTML = score;
highScoreDisplay.innerHTML = highScore;

//Prevents mid-round reset
startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  }
}

//Reset values for extra rounds and call new chore door function:
const startRound = () => {
  currentlyPlaying = true;
  door1Clicked = false;
  door2Clicked = false;
  door3Clicked = false;
  door1Doom = false;
  door2Doom = false;
  door3Doom = false;
  doors = 3;
  doorImage1.src = closedDoor;
  doorImage2.src = closedDoor;
  doorImage3.src = closedDoor;
  randomChoreDoorGenerator();
  startButton.innerHTML = 'Good luck!';
}

//One door is assigned the game-ending boolean value of doorDoom.
//The door variables are assigned appropriate src values.
const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * doors);
  if (choreDoor === 0) {
    door1Doom = true;
    openDoor1 = botDoor;
    openDoor2 = beachDoor;
    openDoor3 = spaceDoor;
  } else if (choreDoor === 1) {
    door2Doom = true;
    openDoor2 = botDoor;
    openDoor1 = beachDoor;
    openDoor3 = spaceDoor;
  } else {
    door3Doom = true;
    openDoor3 = botDoor;
    openDoor1 = beachDoor;
    openDoor2 = spaceDoor;
  }
}

//Doors variable decreases by 1, clicked door cannot be clicked again, check to see if winning or losing condition met.
//The doorImage variable receives the correct src value obtained from randomChoreDoorGenerator().
//If neither condition is met, play continues.
doorImage1.onclick = () => {
  if (!door1Clicked) {
    door1Clicked = true;
    doors--;
    doorImage1.src = openDoor1;
    if (doors === 0) {
      winnerGameOver();
    } else if (door1Doom) {
      gameOver();
    }
  }
}
doorImage2.onclick = () => {
  if (!door2Clicked) {
    door2Clicked = true;
    doors--;
    doorImage2.src = openDoor2;
    if (doors === 0) {
      winnerGameOver();
    } else if (door2Doom) {
      gameOver();
    }
  }
}
doorImage3.onclick = () => {
  if (!door3Clicked) {
    door3Clicked = true;
    doors--;
    doorImage3.src = openDoor3;
    if (doors === 0) {
      winnerGameOver();
    } else if (door3Doom) {
      gameOver();
    }
  }
}

//gameOver function for losers
const gameOver = () => {
  score = 0;
  scoreDisplay.innerHTML = score;
  startButton.innerHTML = 'Game Over! Play again?';
  door1Clicked = true; //Prevents user from clicking unopened doors and overriding the loss
  door2Clicked = true;
  door3Clicked = true;
  currentlyPlaying = false;
}

//gameOver function for winners
const winnerGameOver = () => {
  score++;
  scoreDisplay.innerHTML = score;
  startButton.innerHTML = 'You win! Play again?';
  currentlyPlaying = false;
  determineHighScore();
}

//Sets new high score if condition met
const determineHighScore = () => {
  if (score > highScore) {
    highScore = score;
    highScoreDisplay.innerHTML = highScore;
  }
}

startRound();
