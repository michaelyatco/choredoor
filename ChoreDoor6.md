### Milestone Project: Avoid the ChoreBot! | Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your __Web Development Path__!

### Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment - Let's Build a Winner

Task: So far, the game tells you when you lost - but what about when you win? How *do* you determine the winner in your game? Think about the winning condition (ie. finding the ChoreBot in the *last* door). If there are no more `doors` left, that means you've opened them all and won the game! So your winning condition must be `if(doors===0)`. If that condition is fulfilled, a `winnerGameOver()` function is carried out. Focus for now on writing the logic to bring `doors` to `0`. If a door is clicked, that door is open so add logic to the `doorImage.onclick` event to decrease the `doors` value.

Hint:

```JavaScript
doors--;
```

Task: One common complaint about poorly-built games is that many have flawed logic which a player can exploit to win easily. If `(doors===0)` is the winning condition, a player can click the same door (even if it's opened) multiple times to decrease the `doors` count down to `0` and win the game. Don't let your players exploit your game! Add logic to make each door clickable only once. Place `doorClicked = true;` in the correct line of your three`.onclick` events.

Hint:

```JavaScript
doorImage.onclick = () => {
  if(!doorClicked) {
    doorClicked = true;
    ...
  }
}
```


Task: Now you have the logic and failsafe in place for an honest game. Modify your `if` statement in the three `.onclick` events so that `if` `(doors===0)`, the code will execute a new function called `winnerGameOver()`. Otherwise, the logic should check if the `doorDoom` game over boolean is `true`.

Hint: The current `if` logic should be moved to the `else if` section of the statement:

```JavaScript
} else if (doorDoom) {
  gameOver();
}
```

Task: What does the `winnerGameOver()` function do? It should let us know that we won the game! Write the logic to change the `startButton` innerHTML to `'You win!`

Hint:

```JavaScript
const functionName = () => {
  obj.innerHTML = 'New text'
}
```

Task: Wow - the game works! It lets you know if you've opened all the doors to victory and it tells you if you've lost because you found the ChoreBot before all the doors were opened. There's one problem though - the only way to reset the values for a new round is to refresh the page. Your next task is to turn your `startButton` into exactly that - a start button for a new round! Directly underneath the global variables, write the logic to turn the `startButton` into an `.onclick` event that will trigger a new `startRound()` function.

Hint:

```
obj.onclick = () => {
	function();
}
```

Task: The `startRound()` function not only has to start a new game; it also has to reset the values from the previous rounds. Add a new global variable named `closedDoor` and set its value to the path in the __images__ folder. Then write the function so that the following variables are reset:

 * All `doorClicked` variables
 * All `doorDoom` variables
 * `doors` variable
 * `doorImage.src` variable
 * `startButton.innerHTML` variable

After all these variables are reset, call the `randomChoreDoorGenerator()` function.

Hint: he `doorClick` and `doorDoom` variables are set to `false`, the `doors` variable is set to `3`, the `doorImage.src` variable is set to the `closedDoor` variable, and the `startButton.innerHTML` is set to 'Good luck!`

```JavaScript
const startRound = () => {
  door1Clicked = true;
  ...
  door1Doom = false;
  ...
  doors = 3;
  doorImage1.src = closedDoor;
  ...
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}
```

Task: Now that the `startRound()` function exists, the `randomChoreDoorGenerator()` function at the bottom of the `<script>` tag needs to be replaced by the `startRound()` function so that the game resets correctly for each new round.

Hint:

```JavaScript
<script>
  ...
  startRound();
</script>
```

Task: You're almost at the finish line! You just need to add some finishing touches. Add the text `Play again?` to the end of the current `startButton.innerHTML` so players are guided to click on that button to reset the game.

Hint:

```JavaScript
startButton.innerHTML = 'Game over! Play again?';
startButton.innerHTML = 'You win! Play again?'
```

Task: One minor bug is that the game can reset mid-round if the player clicks on the `startRound` button. Create a global variable called `currentlyPlaying` and set its value to `false`. Then use that variable as a condition where the `startButton.onclick` event can only be clicked if the `currentlyPlaying` variable is `false`. 

Hint:

```JavaScript
startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}
```
Task: The `currentlyPlaying` variable must be set to `true` at the start of a new round.

Hint:

```JavaScript
const startRound = () =>
  currentlyPlaying = true;
  ...
}
```

Task: The `currentlyPlaying` variable must reset back to `false` when the game is over - win or lose. Anytime you see `startButton.innerHTML` asking to 'Play again?', that's where `currentlyPlaying` should be set to `false`.

Hint:

```JavaScript
const function = () => {
  ...
  startButton.innerHTML = 'Game Over! Play again?';
  currentlyPlaying = false;
}

const function = () => {
  ...
  startButton.innerHTML = 'You win! Play again?';
  currentlyPlaying = false;
}
```

Task: In an effort to DRY up the code, the logic in the `else if (doorDoom)` in each `doorImage.onclick` event should be condensed. Create one last function called `gameOver()` directly above the `winnerGameOver()` function. The `gameOver()` function should change the `startButton.innerHTML` to `Game over! Play again?`, prevent any door from being clicked, and set the `currentlyPlaying` variable to `false`. Then delete all the logic within each `else if (doorDoom)` statement and replace it with the `gameOver()` function.

Hint:

```JavaScript
...
} else if (doorDoom) {
  gameOver():
}

const gameOver = () => {
  startButton.innerHTML = 'Game Over! Play again?';
  door1Clicked = true;
  door2Clicked = true;
  door3Clicked = true;
  currentlyPlaying = false;
}
```

Congratulations! You've successfully built your first Milestone Project and created a fun interactive game utilizing your __HTML__, __CSS__, and __JavaScript__ knowledge. Be proud of how far you've come. If, however, you feel like taking this project to the next level (ie. adding more flourish to the __HTML__/__CSS__, score keeping, determining highest winning streak, etc.), we invite you to take on the challenges presented in the __Next Steps__ section of this Milestone Project.