let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Some helper functions:
const isBot = (door) => {
  // console.log(door.src);
  if (door.src === 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg') {
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if (door.src == closedDoor) {
    return false;
  } else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }
}

//on click functions:
door1.onclick = () => {
  if (currentlyPlaying && !isClicked(door1)) {
    door1.src = openDoor1;
    playDoor(door1);
  }
}

door2.onclick = () => {
  if (currentlyPlaying && !isClicked(door2)) {
    door2.src = openDoor2;
    playDoor(door2);
  }
}

door3.onclick = () => {
  if (currentlyPlaying && !isClicked(door3)) {
    door3.src = openDoor3;
    playDoor(door3);
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

// Game functionality:
const startRound = () => {
  // Reset all the doors to be closed
  door1.src = closedDoor;
  door2.src = closedDoor;
  door3.src = closedDoor;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}

const randomChoreDoorGenerator = () => {
  // Consider making this a switch/case
  // This only has 3 scenarios it should be 6...
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoor;
    openDoor2 = beachDoor;
    openDoor3 = spaceDoor;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoor;
    openDoor2 = botDoor;
    openDoor3 = spaceDoor;
  } else {
    openDoor1 = beachDoor;
    openDoor2 = spaceDoor;
    openDoor3 = botDoor;
  }
}

const gameOver = (str) => {
  if (str === 'win') {
      startButton.innerHTML = 'You win! Play again?';
  } else {
      startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();
