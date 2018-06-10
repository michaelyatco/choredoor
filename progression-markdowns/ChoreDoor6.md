### Milestone Project: Avoid the ChoreBot! 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This __ACT__ Like a Game! - Part III (Building a Loser)

Your game is randomly hiding the ChoreBot behind one of the doors but the current logic doesn't care whether you find the ChoreBot in the first door you open or the last. Now you're going to work towards incorporating __game over__ logic - for losing! 

Task: You need to check if a door has the game-ending ChoreBot.

Create a new function called `isBot()` that takes `door` as its argument. Just like the `isClicked()` function, `isBot()` will return a __boolean__ value. Within this new function, write an `if-else` statement to check if the `door.src` value is equivalent to the `botDoorPath`. If they share the same value, that means that particular door has the ChoreBot and should return `true`. Otherwise, the `isBot()` function should return `false`.

Hint:

```js
const functionName = (argument) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
```

Task: Excellent! You've written a function to determine if a door's `src` contains the dreaded ChoreBot. Now you must apply this logic into currently existing __JavaScript__ functions.

The `playOver()` function now needs a `door` argument. After the `if` statement in this function, add an `else-if` condition that checks if the `isBot()` will equate to `true` if you pass the `door` as the `isBot()` argument.

```js
else if (isBot(door)) 
```

Task: If this `isBot()` function equates to true, call the `gameOver()` function, passing `'lose'` as its argument.

Task: Since the `playDoor()` function now needs an argument, look at the `door.onclick` events. Pass each `door` respectively as the argument for the `playOver()` function.

Hint:

```js
playDoor(door1);
```

Task: Now reexamine the `gameOver()` function. Beneath the current logic, write an `else` statement that will change the `innerHTML` of the `startButton` variable to 'Game over! Play again?'.

Hint: 

```js
else {
  startButton.innerHTML = 'Game over! Play again?'
}
```

Task: Great! The text changes to 'Game Over! Play again?' if you find the ChoreBot but notice that you can still open the other doors (and override a loss to victory!). Add a new global variable named `currentlyPlaying` and set its value to `true`. 

Hint: Global variables are set outside of a function

Task: At the bottom of the `gameOver()` function, set `currentlyPlaying` to `false`.

Hint: Set `currentlyPlaying` to `false` outside of the `if-else` statement

Task: Now looking at the `door.onlick` events, add to the current `if` statement that `currentlyPlaying` must be true AND the `isClicked(door)` function must return false.

Hint:

```js
if(currentlyPlaying && !isClicked(door))
```

Huzzah! You've made a game that can't be played once you've hit the losing __game over__ condition of finding the ChoreBot before `(numClosedDoors === 0)`. 

Task: Wow - the game works! It lets you know if you've opened all the doors to victory and it tells you if you've lost because you found the ChoreBot before all the doors were opened. There's one problem though - the only way to reset the values for a new round is to refresh the page. Your next task is to turn your `startButton` into exactly that - a start button for a new round! 

Directly underneath the `door.onclick` events, write the logic to turn the `startButton` into an `.onclick` event that will trigger a new function called `startRound()`.

Hint:

```js
object.onclick = () => {
  function();
}
```

Task: The `startRound()` function not only has to start a new game; it also has to reset the values from the previous rounds. 

Write this `startRound()` function so that the following variables are reset to their original values:

 * All `door.src` values
 * `numClosedDoors` variable
 * `startButton.innerHTML` variable

After all these variables are reset, call the `randomChoreDoorGenerator()` function.

Hint: The `numClosedDoors` variable is set to `3`, each `door.src` variable is set to the `closedDoorPath` variable, and the `startButton.innerHTML` is set to `'Good luck!'`

Task: Now that the `startRound()` function exists, the `randomChoreDoorGenerator()` function at the bottom of the `<script>` tag needs to be replaced by the `startRound()` function so that the game resets correctly for each new round.

Hint:

```js
<script>
  ...
  startRound();
</script>
```

Task: You're almost at the finish line! You just need to add some finishing touches. One minor bug is that the game can reset mid-round if the player clicks on the `startRound` button. 

Use the `currentlyPlaying` variable as a condition where the `startButton.onclick` event can only be clicked if the `currentlyPlaying` variable is `false`. 

Hint:

```js
if (!currentlyPlaying) 
```

Task: Finally, add the `currentlyPlaying` variable within the `startRound()` function and set it to `true`.

Congratulations! You've successfully built your first Milestone Project and created a fun interactive game utilizing your __HTML__, __CSS__, and __JavaScript__ knowledge. Be proud of how far you've come. If, however, you feel like taking this project to the next level (ie. adding more flourish to the __HTML__/__CSS__, score keeping, determining highest winning streak, etc.), we invite you to take on the challenges presented in the __Next Steps__ section of this Milestone Project.