### Project: Chore Door | chore-door 

Assessment: Let's Make This ACT Like a Game! - Part III (Building a Loser)

Your game is randomly hiding the ChoreBot behind one of the doors but the current logic doesn't care whether you find the ChoreBot in the first door you open or the last. Now you're going to work towards incorporating __game over__ logic for losing! 

Task: You need to check if a door has the game-ending ChoreBot.

Above the `isClicked()` function, create a new function called `isBot()` that takes `door` as its argument. Just like the `isClicked()` function, `isBot()` will return a __boolean__ value. Within this new function, write an `if/else` statement to check if the `door.src` value is equivalent to the `botDoorPath`. If they share the same value, that means that particular door has the ChoreBot and should return `true`. Otherwise, the `isBot()` function should return `false`.

Hint:
```js
const functionName = (argument) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
```

Task: You've written a function to determine if a door's `src` contains the game-ending ChoreBot image. Now you must apply this logic into currently existing __JavaScript__ functions.

The `playOver()` function now needs a `door` argument. After the `if` statement in this function, add an `else if` condition that checks if the `isBot()` will equate to `true` if you pass the `door` as the `isBot()` argument.

Hint:
```js
else if (isBot(door)) {
  // Function code...;
} 
```

Task: If this `isBot()` function equates to true, call the `gameOver()` function with no argument.

Task: Since the `playDoor()` function now needs an argument, look at the `door.onclick` functions. Pass each `door1`, `door2`, and `door3`, respectively, as the arguments for the `playOver()` function within each `door.onclick` function.

Hint:
```js
playDoor(door1);
```

Task: Now reexamine the `gameOver()` function. Beneath the current logic, write an `else` statement that will change the `innerHTML` of the `startButton` variable to 'Game over! Play again?'.

Refresh the page and notice how the text changes to 'Game Over! Play again?' if you find the ChoreBot behind the first door or second door that you open.

Hint: 
```js
else {
  startButton.innerHTML = 'Game over! Play again?'
}
```

Task: There's a problem with the current gaming logic. Notice that even if you find the ChoreBot behind the first door or second door that you open, you can still open the remaining doors and override a loss to victory (See what happens to the `startButton` text once all the doors are open). Adding more logic will fix this gaming flaw.

Add a new global variable named `currentlyPlaying` and set its value to `true`. 

Hint: Global variables are declared outside of     	functions and are listed before all functions.

Task: At the bottom of the `gameOver()` function, set `currentlyPlaying` to `false`.

Hint: Set `currentlyPlaying` to `false` outside of the `if/else` statement

Task: Now looking at the `door.onlick` functions, add to the current `if` statement a condition that checks whether `currentlyPlaying` returns true AND that the `isClicked(door)` function returns false.

Well done - you've made a game that can't be played once you've hit the losing __game over__ condition of finding the ChoreBot before `(numClosedDoors === 0)`. 

Hint:
```js
if(currentlyPlaying && !isClicked(door))
```

Task: The game is now functioning as it should. It lets you know if you've opened all the doors to victory and it tells you if you've lost because you found the ChoreBot before all the doors were opened. There's one problem though - the only way to reset the values for a new round is to refresh the page. Your next task is to turn your `startButton` into exactly that - a start button for a new round. 

Directly underneath the `door.onclick` functions, write the logic to turn the `startButton` into an `.onclick` arrow function that will trigger a `startRound()` function (which hasn't been written yet).

Hint:
```js
startButton.onclick = () => {
  // Function code...;
}
```

Task: The `startRound()` function not only has to start a new game; it also has to reset the values from the previous rounds. 

Create this new `startRound()` function after the `.onclick` functions which resets the following variables back to their original values:

 * All `doorImage.src` values
 * `numClosedDoors` variable
 * `startButton.innerHTML` variable
 * `currentlyPlaying` variable

Hint: The `numClosedDoors` variable is set to `3`, each `doorImage.src` variable is set to the `closedDoorPath` variable, the `startButton.innerHTML` is set to `'Good luck!'`, and the `currentlyPlaying` variable is set to true.

Task: After all these variables are reset, call the `randomChoreDoorGenerator()` function at the bottom of the `startRound()` function.

Task: Now that the `startRound()` function exists, the `randomChoreDoorGenerator()` function at the bottom of the `<script>` element needs to be replaced by the `startRound()` function so that the game's variables are set to their original values when the game is initially loaded.

Hint:
```js
<script>
  ...
  startRound();
</script>
```

Task: Currently, the game can reset mid-round if the player clicks on the `startRound` button. This bug results in every `doorImage.src` becoming a closed door again before the winning or losing condition is reached.

Wrap the `startButton.onclick` function in an `if` statement where the condition checks if the `currentlyPlaying` variable is `false` so that a player cannot reset the game mid-round. 

Hint:
```js
if(!currentlyPlaying) 
```

Congratulations! You've successfully built your first Milestone Project and created a fun interactive game utilizing your __HTML__, __CSS__, and __JavaScript__ knowledge. Be proud of how far you've come. If you feel like taking this project to the next level (ie. adding more flourish to the __HTML__ and __CSS__, score keeping, determining highest winning streak, etc.), you're invited to take on the challenges presented in the __Next Steps__ section of this Milestone Project.