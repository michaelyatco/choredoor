##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**! 

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how **HTML**, **CSS**, and **JavaScript** interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### Next Steps - HTML & CSS Styling

1. [ ] Welcome to the the **Next Steps** section of the Milestone Project! This is an extra opportunity to improve the view and functionality of your ChoreBot game! First, let's focus on making the numbers larger and brighter, like this picture illustrates:

    ![Instructions-list](images/instructions_list.png)

    Inside each `each-direction` `<div>` in your **index.html* page, create a new `<p>` element with the class name `'instructions-list'` and number them accordingly.
    
2. [ ] In the **style.css** file, create an `instructions-list` selector and add the following properties and values:
 
    ````
    display: inline;
    margin-top: 11px;
    margin-right: 23px;
    font-family: 'Work Sans';
    font-size: 36px;
    font-weight: 600;
    color: #00ffff;
    ````

### Next Steps - Creating Winning Streaks & High Scores

1. [ ] Wouldn't it be great to play this game with the opportunity to record consecutive victories and establish a high score for all challengers to beat? You can build that feature using **HTML**, **CSS**, and **JavaScript**! First in the **index.html** page beneath the `<div class="start-two">`, add a `<div>` element with the class name `"score-row"` and nested inside this new `<div>`, add two `<p>` elements with the class name `"score-text"`. Type `Current streak` in the first `<p>` element and `Best streak` in the second `<p>` element. 

    >Hint - Make sure that your HTML elements are properly nested to make your 	code more readable.
    
    ```
    <div class="parent">
    	<div class="child>
    		<p></p>
    	</div>
    </div>
    ```
		
2. [ ] Wow - the game works! It lets you know when you opened all the doors to victory and when the ChoreBot found you and served you defeat. But refreshing the page to reset the values is annoying and games that annoy players will lose them quickly. So let's turn our `startButton` into exactly that - a start button for a new round! Directly underneath the global variables, write the logic to turn the `startButton` into an `.onclick` event that will trigger a new `startRound()` function.

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

8. [ ] We're almost at the finish line! We just need to add some finishing touches. Add the text `Play again?` to the end of the current `startButton.innerHTML` so players are guided to click on that button to reset the game. 

    >Hint - 'Game over! Play again?' / 'You win! Play again?'

8. [ ] One minor bug is that the game can reset mid-round if the player clicks on the door. Create a global variable called `currentlyPlaying` and set its value to `false`. Then use that variable as a condition where the `startButton.onClick` event can only be clicked if the `currentlyPlaying` variable is `false`. The variable must be set to `true` during the round and reset back to `false` when the game is over - win or lose.

    > Hint - Anytime you see `startButton.innerHTML` asking to 'Play again?', that's where `currentlyPlaying` should be set to `false`.
    
9. [ ] In an effort to DRY up the code, the logic in the `else if (doorDoom)` in each `doorImage.onclick` event should be condensed. Create one last function called `gameOver()` directly above the `winnerGameOver()` function. The `gameOver()` function should change the `startButton.innerHTML` to `Game over! Play again?`, prevent any door from being clicked, and set the `currentlyPlaying` variable to `false`.

    >Hint - `doorClicked = true;`

Congratulations! You completed your first Milestone Project and created a fun interactive game utilizing your HTML, CSS, and JavaScript knowledge. Be proud of how far you've come. If you feel like taking this project to the next level (ie. adding more flourish to the HTML/CSS, score keeping, determining highest winning streak, etc.), we invite you to take on the challenges presented in the **Next Steps** section of this Milestone Project.

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
        <p class="instructions-list">1</p>
        <p class="instructions">Hiding behind one of these doors is the ChoreBot.</p>
      </div>
      <div class="each-direction">
        <p class="instructions-list">2</p>
        <p class="instructions">Your mission is to open all of the doors without running into the ChoreBot.</p>
      </div>
      <div class="each-direction">
        <p class="instructions-list">3</p>
        <p class="instructions">If you manage to avoid the ChoreBot until the very last door, you win!</p>
      </div>
      <div class="each-direction">
        <p class="instructions-list">4</p>
        <p class="instructions">See if you can score a winning streak!</p>
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

.instructions-list {
  display: inline;
  margin-top: 11px;
  margin-right: 23px;
  font-family: 'Work Sans';
  font-size: 36px;
  font-weight: 600;
  color: #00ffff;
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

