### Milestone Project: Avoid the ChoreBot! 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This __ACT__ Like a Game! - Part II (Building a Winner)

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

Task: The all-important `playDoor()` function has been written but the question now is where in our `script.js` file should this function be called? If the `numClosedDoors` variable decreases, that means that a door has been opened. The three `door.onclick` events is where a door is opened. At the bottom of each event, call the `playDoor()` function.

Hint:

```js
door1.src = openDoor1;
playDoor();
```

Task: One common complaint about poorly-built games is when there's a flaw in the game's logic which a player can exploit to win easily. If `(numClosedDoors===0)` is the winning condition, a player can click the same door (even if it's opened) multiple times to decrease the `numClosedDoors` value down to `0` and "cheat" his/her way to victory. Don't let your players exploit your game! 

You need logic to make each door clickable only once. Create a new function called `isClicked()` that takes `door` as its argument.

Hint:

```js
const functionName = (argument) => {
  function();
}
```

Task: An important global variable must be created at this point since it will be very useful for your `isClicked()` function and as well as other __JavaScript__ functions in this game.

Create another global variable called `closedDoorPath` and assign this url as its value:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg
```

Hint: Global variables are declared outside of     	functions.

Task: The `isClicked()` function will return a boolean value. Since you're passing a `door` as an argument, write an `if-else` statement to check if the door's `src` shares the same value as the `closedDoorPath`. If they share the same value, then the `door` hasn't been opened yet (meaning it has not been clicked) and should return `false`. Otherwise, the door must be open already (meaning it has been clicked) so the function should instead return `true`.

Hint:

```js
if(door.src == closedDoorPath) {
  return true;
} else {
  return false;
}
```

Task: Good work! You've written a function to determine if a closed door image has been clicked. Now examining the three `door.onclick` events, encapsulate the logic within an `if` statement to determine if the `isClicked()` function has __not__ yet happened for that particular door. 

Hint:

```js
if(!isClicked(door1))
```

Your logic now protects your game from shortcut victories by making each closed door clickable only once! 

Task: There's one global variable that still needs to be created before we can expand our `gameOver()` function. Create a `startButton` global variable that accepts the `id` value of `start` from your __index.html__ file.
    
Hint: Use the DOM method: 

```js
let object = document.getElementById('id');
```

Task: Now that we have the `startButton` variable and your game is protected from 'cheap' wins, let's expand the `gameOver()` function! 

Add `str` as its argument and write an `if` statement where the condition checks if `str` is equivalent to `'win'`.  If this condition equates to true, then the `innerHTML` of the `startButton` will change to `'You win! Play again?'`. 

Hint:

```js
if (str === 'win') {
  startButton.innerHTML = 'You win! Play again?';
}
```

Task: Remember to also add `win` as the argument when you call the `gameOver()` function within your `playDoor()` function.

Refresh the page and open all three doors and look what happens to your 'Good luck' string in the `startButton`! Your winning condition has been reached. The only problem is that the current logic will always have you "win" as long as all the doors are open - regardless of when you find the ChoreBot!
