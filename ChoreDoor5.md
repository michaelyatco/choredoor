##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**! 

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how HTML, CSS, and JavaScript interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 5. Let's Make This ACT Like a Game! - Part II

1. [ ] Our game is randomly hiding the ChoreBot behind one of the doors but it currently doesn't care whether you find the ChoreBot behind the first door you open or the last. Let's work towards incorporating **game over** logic - win or lose! First, let's build a button that will respond to the status of the game. Beneath the `<door-row>` `<div>` create a new `<div>` element with the class name `"start-row"` and an `id` of `"start"`. Type `Good luck!` in between the `<div></div>`. Finally, create a `startButton` global variable that accepts `start` as its value.  

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
		
5. [ ] Great! The text changes to 'Game Over!' but notice that you can still open the other doors and play the game.

    >Hint - Each `doorImage.onclick` event will have a different variable. `openDoor1` could hold three different values depending on what the `randomChoreDoorGenerator()` returns so it should be assigned to `doorImage1.src`.
    
6. [ ] To see if the `randomChoreDoorGenerator()` is working, we should call it! Call the function at the very end of the `<script>` tag. 

   Wonderful! Your work with JavaScript has not only made every door clickable but has hidden the ChoreBot behind a random door with every page reload! The gaming logic isn't there yet but you've made significant progress in creating a dynamic webpage that responds to user-interactions!

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

