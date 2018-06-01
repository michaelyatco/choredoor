##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**! 

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how **HTML**, **CSS**, and **JavaScript** interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 6. Let's Build a Winner

1. [ ] So far, the game tells you when you lost - but what about when you win? How *do* you determine the winner in your game? Think about the winning condition (ie. finding the ChoreBot in the *last* door). If there are no more `doors` left, that means you've opened them all and won the game! So your winning condition must be `if(doors===0)`. If that condition is fulfilled, a `winnerGameOver()` function is carried out. Focus for now on writing the logic to bring `doors` to `0`. If a door is clicked, that door is open so add logic to the `doorImage.onclick` event to decrease the `doors` value. 

    >Hint - `doors--;`
    
2. [ ] One common complaint about poorly-built games is that many have flawed logic which a player can exploit to win easily. If `(doors===0)` is the winning condition, a player can click the same door (even if it's opened) multiple times to decrease the `doors` count down to `0` and win the game. Don't let your players exploit your game! Add logic to make each door clickable only once.

	>Hint - Place `clickDoor = true;` in the correct line of your three`.onclick` events.


3. [ ] Now you have the logic and failsafe in place for an honest game. Modify your `if` statement in the three `.onclick` events so that `if` `(doors===0)`, the code will execute a new function called `winnerGameOver()`. Otherwise, the logic should check if the `doorDoom` game over boolean is `true`.
 
    >Hint - the current `if` logic should be moved to the `else if` section of the statement.

4. [ ] What does the `winnerGameOver()` function do? It should let us know that we won the game! Write the logic to change the `startButton` innerHTML to `'You win!`

    >Hint - obj.innerHTML = 'New text'
		
5. [ ] Wow - the game works! It lets you know if you've opened all the doors to victory and it tells you if you've lost because you found the ChoreBot before all the doors were opened. There's one problem though - the only way to reset the values for a new round is to refresh the page. Your next task is to turn your `startButton` into exactly that - a start button for a new round! Directly underneath the global variables, write the logic to turn the `startButton` into an `.onclick` event that will trigger a new `startRound()` function.

    >Hint - obj.onclick = () => {}
    
6. [ ] The `startRound()` function not only has to start a new game; it also has to reset the values from the previous rounds. Add a new global variable named `closedDoor` and set its value to the path in the **images** folder. Then write the function so that the following variables are reset: 
 * All `doorClick` variables
 * All `doorDoom` variables
 * `doors` variable
 * `doorImage.src` variable
 * `startButton.innerHTML` variable
 
 After all these variables are reset, call the `randomChoreDoorGenerator()` function.

    >Hint - the `doorClick` and `doorDoom` variables are set to `false`, the `doors` variable is set to `3`, the `doorImage.src` variable is set to the `closedDoor` variable, and the `startButton.innerHTML` is set to 'Good luck!`

7. [ ] Now that the `startRound()` function exists, the `randomChoreDoorGenerator()` function at the bottom of the `<script>` tag needs to be replaced by the `startRound()` function so that the game resets correctly for each new round.

8. [ ] You're almost at the finish line! You just need to add some finishing touches. Add the text `Play again?` to the end of the current `startButton.innerHTML` so players are guided to click on that button to reset the game. 

    >Hint - 'Game over! Play again?' / 'You win! Play again?'

8. [ ] One minor bug is that the game can reset mid-round if the player clicks on the `startRound` button. Create a global variable called `currentlyPlaying` and set its value to `false`. Then use that variable as a condition where the `startButton.onclick` event can only be clicked if the `currentlyPlaying` variable is `false`. The variable must be set to `true` during the round and reset back to `false` when the game is over - win or lose.

    > Hint - Anytime you see `startButton.innerHTML` asking to 'Play again?', that's where `currentlyPlaying` should be set to `false`.
    
9. [ ] In an effort to DRY up the code, the logic in the `else if (doorDoom)` in each `doorImage.onclick` event should be condensed. Create one last function called `gameOver()` directly above the `winnerGameOver()` function. The `gameOver()` function should change the `startButton.innerHTML` to `Game over! Play again?`, prevent any door from being clicked, and set the `currentlyPlaying` variable to `false`. Then replace all the logic within each `else if (doorDoom)` statement to `gameOver()`.

    >Hint - `doorClicked = true;`

Congratulations! You've successfully built your first Milestone Project and created a fun interactive game utilizing your **HTML**, **CSS**, and **JavaScript** knowledge. Be proud of how far you've come. If, however, you feel like taking this project to the next level (ie. adding more flourish to the **HTML**/**CSS**, score keeping, determining highest winning streak, etc.), we invite you to take on the challenges presented in the **Next Steps** section of this Milestone Project.

```
Solution Code - HTML

  <head>
    <title>Chore Door!</title>
    <link href='./style.css' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type='text/css'>
  </head>

  <body>

    <div class="header">
      <img src="images/logo.svg">
    </div>

    <div class="first-row">
      <img src="images/Star.svg">
      <p class="instructions-title">Instructions</p>
      <img src="images/Star.svg">
    </div>

    <div class="second-row">
      <div class="each-direction">
        <p class="instructions">1. Hiding behind one of these doors is the ChoreBot.</p>
      </div>
      <div class="each-direction">
        <p class="instructions">2. Your mission is to open all of the doors without running into the ChoreBot.</p>
      </div>
      <div class="each-direction">
        <p class="instructions">3. If you manage to avoid the ChoreBot until the very last door, you win!</p>
      </div>
      <div class="each-direction">
        <p class="instructions">4. See if you can score a winning streak!</p>
      </div>
    </div>

    <div class="door-row">
      <img class="door-frame" src="images/closed_door.svg" id="door1">
      <img class="door-frame" src="images/closed_door.svg" id="door2">
      <img class="door-frame" src="images/closed_door.svg" id="door3">
    </div>
    
    <div class="start-row" id="start">Good luck!</div>
    
  </body>
  <script></script>
</html>
```
```
Solution Code - CSS

body {
  background-color: #010165;
  margin: 0px;
}

.header {
  background-color: #00ffff;
  text-align: center;
}

.first-row {
  margin-top: 42px;
  text-align: center;
}

.instructions-title {
  display: inline;
  font-family: 'Work Sans';
  font-size: 18px;
  color: #00ffff;
}

.second-row {
  position: absolute;
  margin-top: 17px;
  right: 25%;
}

.each-direction {
  margin-top: 15px;
}

.instructions {
  display: inline;
  font-family: 'Work Sans';
  font-size: 14px;
  color: #ffffff;
}

.door-row {
  margin-top: 305px;
  text-align: center;
}

.door-frame {
  cursor: pointer;
}

.start-row {
  margin: auto;
  width: 120px;
  height: 43px;
  background-color: #eb6536;
  padding-top: 18px;
  font-family: 'Work Sans';
  font-size: 18px;
  text-align: center;
  color: #010165;
  margin-bottom: 21px;
  cursor: pointer;
}

```

```
Solution Code - JavaScript

<script>
  let doorImage1 = document.getElementById('door1');
  let doorImage2 = document.getElementById('door2');
  let doorImage3 = document.getElementById('door3');
  let startButton = document.getElementById("start");
  let botDoor = "images/Robot_open_door.svg";
  let beachDoor = "images/beach_open_door.svg";
  let spaceDoor = "images/space_open_door.svg";
  let closedDoor = "images/closed_door.svg";
  let doors = 3;
  let openDoor1;
  let openDoor2;
  let openDoor3;
  let door1Doom;
  let door2Doom;
  let door3Doom;
  let door1Clicked = false;
  let door2Clicked = false;
  let door3Clicked = false;
  let currentlyPlaying = false;

  startButton.onclick = () => {
    if (!currentlyPlaying) {
      startRound();
    }
  }

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
    startButton.innerHTML = 'Good luck!';
    randomChoreDoorGenerator();
  }

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

  doorImage1.onclick = () => {
    if (!door1Clicked) {
      door1Clicked = true;
      doorImage1.src = openDoor1;
      doors--;
      if (doors===0) {
        winnerGameOver();
      } else if (door1Doom) {
        gameOver();
      }
    }
  }

  doorImage2.onclick = () => {
    if (!door2Clicked) {
      door2Clicked = true;
      doorImage2.src = openDoor2;
      doors--;
      if (doors===0) {
        winnerGameOver();
      } else if (door2Doom) {
        gameOver();
      }
    }
  }

  doorImage3.onclick = () => {
    if (!door3Clicked) {
      door3Clicked = true;
      doorImage3.src = openDoor3;
      doors--;
      if (doors===0) {
        winnerGameOver();
      } else if (door3Doom) {
        gameOver();
     }
    }
  }

  const gameOver = () {
    startButton.innerHTML = 'Game Over! Play again?';
    door1Clicked = true;
    door2Clicked = true;
    door3Clicked = true;
    currentlyPlaying = false;
  }

  const winnerGameOver = () => {
    startButton.innerHTML = 'You win! Play again?';
    currentlyPlaying = false;
  }

  startRound();

</script>

