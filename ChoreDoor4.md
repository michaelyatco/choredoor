##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**! 

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how HTML, CSS, and JavaScript interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 4. Let's Make This ACT Like a Game! - Part I

1. [ ] Our game looks like a game thanks to your HTML & CSS skills, but what good is a game if we always know where the ChoreBot is hiding? Time to put our JavaScript to work and randomly generate the door that hides the ChoreBot! Beneath our global variables, create a `randomChoreDoorGenerator()` function using arrow syntax. 

    >Hint - the format for arrow function syntax is:
    
    ```
    const newFunction = () => {
    newFunctionLogic;
    }
    ```
2. [ ] This function will require many new variables in order for the game's logic to work. Create the global variable `doors` and set its value to the amount of doors in the game. Create the global variables `openDoor1`, `openDoor2`, and `openDoor3` but do not assign any value to them at this point (You'll see why soon).

3. [ ] In the `randomChoreDoorGenerator()` function, create a local variable called `choreDoor` and set its value to a Math function that will randomly a whole number between 0 and 2. 
 
    >Hint - The `Math.floor()` and `Math.random()` functions will be used as well as the global variable `doors`.

4. [ ] Inside the `randomChoreDoorGenerator()` and directly beneath the Math function, write an "if-else" statement where each possible `choreDoor` value is a different condition for the "if-else" statement. Use the `openDoor1`, `openDoor2`, and `openDoor3` variables after each `choreDoor` condition to assign the `doorBot` variable to a different door. If an `openDoor` variable is not assigned the `doorBot` variable, it should be assigned either the `beachDoor` or `spaceDoor` variable instead.

    >Hint - The syntax for this "if-else" statement follows:
    
     ``` 
      if(choreDoor === x) {
	     openDoor1 = valueA;
	     openDoor2 = valueB;
	     openDoor3 = valueC;
	   } else if (choreDoor === y) {
	   	  openDoor2 = valueA;
	   	  openDoor1 = valueB;
	   	  openDoor3 = valueC;
	   } ...
    ```
		
5. [ ] Now let's look at our three `doorImage.onclick` events. Right now the logic states what image will replace the original `src`. Replace a variable in each `doorImage.onclick` event with one that we recently created so that each `doorImage` `src` will be assigned to a variable that holds three possible values.

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

```

```
Solution Code - JavaScript

<script>
    let doorImage1 = document.getElementById('door1');
    let doorImage2 = document.getElementById('door2');
    let doorImage3 = document.getElementById('door3');
    let botDoor = "images/Robot_open_door.svg";
    let beachDoor = "images/beach_open_door.svg";
    let spaceDoor = "images/space_open_door.svg";
    let doors = 3;
    let openDoor1;
    let openDoor2;
    let openDoor3;

    const randomChoreDoorGenerator = () => {
      choreDoor = Math.floor(Math.random() * doors);
      if (choreDoor === 0) {
        openDoor1 = botDoor;
        openDoor2 = beachDoor;
        openDoor3 = spaceDoor;
      } else if (choreDoor === 1) {
        openDoor2 = botDoor;
        openDoor1 = beachDoor;
        openDoor3 = spaceDoor;
      } else {
        openDoor3 = botDoor;
        openDoor1 = beachDoor;
        openDoor2 = spaceDoor;
      }
    }

    doorImage1.onclick = () => {
      doorImage1.src = openDoor1;
    }

    doorImage2.onclick = () => {
      doorImage2.src = openDoor2;
    }

    doorImage3.onclick = () => {
      doorImage3.src = openDoor3;
    }

    randomChoreDoorGenerator();
</script>

