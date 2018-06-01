##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**! 

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how HTML, CSS, and JavaScript interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 6. Let's Build a Winner

1. [ ] But what about winning? How do we determine the winner in this game? Think about the winning condition - find the ChoreBot in the *last* door. If there are no more `doors` left, that means you opened them all and won the game! So our winning condition must be `if(doors===0)`. If that condition is fulfilled, a `winnerGameOver()` function is carried out. Let's focus for now on writing the logic to bring `doors` to `0`.  

    >Hint - Make sure to wrap your `class` and `id` values are wrapped in quotation marks.
    >Hint - Use the DOM method: `document.getElementById('id')`
    
2. [ ] In the **style.css** file, create a `start-row` selector and paste in the following:

    ```
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
    ```
    
    >Hint - A class attribute is constructed with:
`.class { property: value;}`

3. [ ] Create three new global variables, `door1Doom`, `door2Doom`, and `door3Doom` but do not assign any value to these global variables.  In the `randomChoreDoorGenerator()` function, however, insert each `doorDoom` variable in each "if-else" statement and set each `doorDoom` variable to `true`. This is the **game over** boolean value. 
 
    >Hint - The `door1Doom` should be with the logic that has `openDoor1` having the `botDoor` value. The other two boolean variables should follow the same pattern.

4. [ ] Now we have the **game over** boolean value attached to one random door. The next step is having this value act as a condition in an "if-else" statement within the `doorImage.onclick` event. Beneath the current logic, write an "if" statement that will change the text in the `startButton` variable to `'Game over!'`. 

    >Hint - The syntax for this "if-else" statement follows:
    
     ``` 
      if(doorDoom) {
	     startButton.innerHTML = 'New text'
	   } ...
    ```
		
5. [ ] Great! The text changes to 'Game Over!' but notice that you can still open the other doors and play the game. Add three new global variables: `door1Clicked`, `door2Clicked`, and `door3Clicked` and set their value to `false`. Now add an `if` statement to the beginning of each `doorImage.onclick` event so that the function within is only executed if the door was never clicked. Then determine how to use these boolean values to prevent clicking the other doors once the game is over. 

    >Hint - The syntax for this "if-else" statement follows:
    
     ``` 
      if(!door1Clicked) {
	     (execute function)
	     if(gameOver) {
	     	startButton.innerHTML = 'Game over'
	     	door2Clicked = true;
	     	...
	     }
	   } 
     ```

  Huzzah! You've made a game that can't be played once you've hit the losing **game over** condition. But games aren't much fun if they just point out when we lose; they're much more fun when they point out that we've won! JavaScript has helped us establish the losing conditions. Soon, JavaScript will help us establish winning conditions, as well.

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
  let doors = 3;
  let openDoor1;
  let openDoor2;
  let openDoor3;
  let door1Doom;
  let door2Doom;
  let door3Doom;

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
    doorImage1.src = openDoor1;
    if (door1Doom) {
      startButton.innerHTML = 'Game Over!';
    }
  }

  doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
    if (door2Doom) {
      startButton.innerHTML = 'Game Over!';
    }
  }

  doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
    if (door3Doom) {
      startButton.innerHTML = 'Game Over!';
    }
  }

  randomChoreDoorGenerator();

</script>
