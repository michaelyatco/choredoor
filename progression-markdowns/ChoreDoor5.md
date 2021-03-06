### Project: Chore Door | chore-door 

Assessment: Let's Make This ACT Like a Game! - Part II (Building a Winner)

How exactly do you determine the winner in your game? Think about the winning condition (ie. you find the ChoreBot when you open the *last* door). If there are no more closed doors left, that means you've opened them all and won the game! So your winning condition must be `if (numClosedDoors === 0)`. The question now is where to implement this game-winning condition into your code.

Task: You'll need to create a function called `playDoor()` that serves two important roles:

1. It decreases the `numClosedDoors` variable.
2. It checks if the game-winning condition (`numClosedDoors === 0`) has been met and if so, calls a `gameOver()` function (which hasn't been written yet).

In the __script.js__ file, right below your list of global variables, create a new empty function called `playDoor()`.

Hint:
```js
const functionName = () => {
  // Function code...;
}
```

Task: Within this `playDoor()` function, write the logic to decrease the `numClosedDoors` variable every time its called.

Hint:
```js
numClosedDoors--;
``` 

Task: Under the logic that decreases the `numClosedDoors` variable by 1, write an `if/else` statement that determines if the game-winning condition has been reached. If so, call a `gameOver()` function (again - this `gameOver()` function hasn't been created yet).

Hint:
```js
if(numClosedDoors === 0) {
  gameOver();
}
```

Task: The all-important `playDoor()` function has been written but the question now is where in your __script.js__ file should this function be called? If the `numClosedDoors` variable decreases, that means that a door has been opened. The three `door.onclick` functions are where a door is opened. At the bottom of each event, call the `playDoor()` function.

Hint:
```js
doorImage1.src = openDoor1;
playDoor();
```

Task: One common complaint about poorly-built games is when there's a flaw in the game's logic which a player can exploit to win easily. If `(numClosedDoors===0)` is the winning condition, a player can click the same door (even if it's opened) multiple times to decrease the `numClosedDoors` value down to `0` and "cheat" his/her way to victory. You worked hard to build your game - don't let your players exploit the current logic! 

You need logic to make each door clickable only once. Above your `playDoor()` function, create a new empty function called `isClicked()` that takes `door` as its argument.

Hint:
```js
const functionName = (argument) => {
  function();
}
```

Task: An important global variable must be created at this point since it will be very useful for your `isClicked()` function as well as other __JavaScript__ functions in this game.

Create another global variable called `closedDoorPath` and assign this url as its value:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg
```

Hint: Global variables are declared outside of     	functions and are listed before all functions.

Task: The `isClicked()` function will return a __boolean__ value. Since you're passing a `door` as an argument, write an `if/else` statement where the condition checks if the door's `src` is equivalent to the `closedDoorPath`. If they share the same value, then the `door` hasn't been opened yet (meaning it has not been clicked) and should return `false`. Otherwise, the door must be open already (meaning it has been clicked) so the function should instead return `true`.

Hint:
```js
if(door.src === closedDoorPath) {
  return false;
} else {
  return true;
}
```

Task: Now that you've written the `isClicked()` function, put it to use.

Navigate to the three `door.onclick` function and within each function, wrap the current logic within an `if` statement to determine if the `isClicked()` function has __not__ yet happened for that particular `doorImage`. 

Adding this logic now protects your game from shortcut victories by making each closed door clickable only once. 

Hint:
```js
if(!isClicked(doorImage1)) {
  // Function code...;
}
```

Task: The time has come to create a `gameOver()` function so that your `playDoor()` function can actually end the game when `numClosedDoors` is equivalent to `0`.

Under your `door.onclick` functions, write an empty function called `gameOver()`.

Task: Now there's one global variable that still needs to be created before we can expand our `gameOver()` function. 

Create a `startButton` global variable and use a __JavaScript__ DOM method to assign its value to the __HTML__ element with the `id` of `start`.
    
Hint: Use the DOM method: 
```js
let variable = document.getElementById('id');
```

Task: Now that you have the `startButton` variable, let's expand the `gameOver()` function. 

Add `str` (an abbreviation for string) as its argument and write an `if` statement where the condition checks if `str` is equivalent to `'win'`.  If this condition equates to true, then the `innerHTML` of the `startButton` will change to 'You win! Play again?'. 

Hint:
```js
if (str === 'win') {
  startButton.innerHTML = 'You win! Play again?';
}
```

Task: Within your `playDoor()` function, the `gameOver()` function is called but without passing in an argument. Without an argument, the `startButton` text will not change when you open all three doors.

Add the string `'win'` as the argument for the `gameOver()` function within your `playDoor()` function.

Hint:
```js
gameOver('win');
```

Refresh the page and open all three doors and look what happens to your 'Good luck' string in the `startButton`. Your winning condition (`numClosedDoors === 0`) has been reached. The only problem is that the current logic will always have you "win" as long as all the doors are open - regardless of when you find the ChoreBot.