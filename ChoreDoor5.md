### Milestone Project: Avoid the ChoreBot! 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This __ACT__ Like a Game! - Part II - Building a Winner

How exactly do you determine the winner in your game? Think about the winning condition (ie. you find the ChoreBot when you open the *last* door). If there are no more closed doors left, that means you've opened them all and won the game! So your winning condition must be `if(numClosedDoors===0)`. The question now is where to implement this game-winning condition into your code.

Task: You'll need to create a function called `playDoor()` that serves two important roles:

1. It decreases the `numClosedDoors` variable.
2. It checks if the game-winning condition has been met and if so, calls a `gameOver()` function (which hasn't been written yet).

In the `script.js` file, create a new function called `playDoor()`.

Hint:

```js
const functionName = () => {
  function();
}
```

Task: Within this `playDoor()` function, write the logic to decrease the `numClosedDoors` variable every time its called.

Hint:

```js
numClosedDoors--;
``` 

Task: Now that the `numClosedDoors` variable decreases by 1 with each call to `playOver()`, write an `if-else` statement that determines if the game-winning condition has been reached. If so, call a `gameOver()` function (again - a function that hasn't been created yet).

Hint:

```js
if(numClosedDoors === 0) {
  gameOver();
}
```

Task: The all-important `playDoor()` function has been written but the question now is where should this function be called? If the `numClosedDoors` variable decreases, that means that a door has been opened. The three `door.onclick` events is where a door is opened. At the bottom of each event, call the `playDoor()` function.

Hint:

```js
door1.src = openDoor1;
playDoor();
```

Task: One common complaint about poorly-built games is that many have flawed logic which a player can exploit to win easily. If `(numClosedDoors===0)` is the winning condition, a player can click the same door (even if it's opened) multiple times to decrease the `numClosedDoors` value down to `0` and win the game. Don't let your players exploit your game! Add logic to make each door clickable only once. Place `doorClicked = true;` in the correct line of your three`.onclick` events.

Hint:

```JavaScript
doorImage.onclick = () => {
  if(!doorClicked) {
    doorClicked = true;
    ...
  }
}
```


Your game is randomly hiding the ChoreBot behind one of the doors but the current logic doesn't care whether you find the ChoreBot in the first door you open or the last. Now you're going to work towards incorporating __game over__ logic - win or lose! 

Task: First, navigate to the __index.html__ file where you'll build a button that will respond to the status of the game. 

Beneath the `<door-row>` element create a new `<div>` element with the class name `"start-row"` and an `id` of `"start"`. Type `Good luck!` in between the `<div></div>`.

Hint: Make sure to wrap your `class` and `id` values are wrapped in quotation marks:

```html
<div class = "class-name" id = "id-name"></div>
```

Refresh the page to see your positive text appear below the doors!

Task: In the __style.css__ file, create a `start-row` CSS selector assign the following properties and values:

* margin - auto
* width - 120px
* height - 43px
* background-color - #eb6536
* padding-top - 18px
* font-family - 'Work Sans'
* font-size - 18px
* text-align - center
* color - #010165
* margin-bottom - 21px
* cursor - pointer

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `start-row`!

Task: __JavaScript__ is going to manipulate the text within this new button. Move to the `script.js` file and create a `startButton` global variable that accepts the `id` value of `start`.
    
Hint: Use the DOM method: 

```JavaScript
let object = document.getElementById('id');
```

Task: 


Task: With each new round, the `botDoor` (which holds the URL path for the robot image) is assigned to one of the `openDoor` variables. This is the __game over__ boolean value.

Hint: The three boolean variables should follow this pattern:

```JavaScript
if (choreDoor === #) {
  doorDoom = true;
  openDoor = botDoor;
  openDoor = beachDoor;
  openDoor = spaceDoor;
} ...
```

Task: Now you have the __game over__ boolean value attached to one random door. The next step is having this value act as a condition in an `if-else` statement within the `doorImage.onclick` event. Beneath the current logic, write an `if` statement that will change the text in the `startButton` variable to `'Game over!'`.

Hint: The syntax for this `if-else` statement follows:

```JavaScript
if(doorDoom) {
  startButton.innerHTML = 'New text';
} ...
```

Task: Great! The text changes to 'Game Over!' but notice that you can still open the other doors and play the game. Add three new global variables: `door1Clicked`, `door2Clicked`, and `door3Clicked` and set their value to `false`. Now add an `if` statement to the beginning of each `doorImage.onclick` event so that the function within is only executed if the door was never clicked. Then determine how to use these boolean values to prevent clicking the other doors once the game is over.

Hint: The syntax for this `if-else` statement follows:

```JavaScript
if(!door1Clicked) {
  (execute function();)
if(gameOver) {
  startButton.innerHTML = 'Game over';
  door2Clicked = true;
  ...
  }
}
```

Huzzah! You've made a game that can't be played once you've hit the losing __game over__ condition. __JavaScript__ has helped you establish the losing conditions. But games aren't much fun if they just point out when you lose; they're much more exciting when they point out that you've won, as well! Next, you'll be using __JavaScript__ to give your game winning conditons.

