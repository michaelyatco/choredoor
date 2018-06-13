### Project: Chore Door | chore-door

Assessment: Let's Make This ACT Like a Game! - Part I

Task: Your game is beginning to look like a game thanks to your __HTML__ architecture & __CSS__ manipulations; but what good is a game if you know where the ChoreBot is always hiding? __JavaScript__ solves this problem by helping you randomly generate the door that hides the ChoreBot. 

In your __script.js__ file, beneath your global variables, create a `randomChoreDoorGenerator()` function using the arrow syntax.

Hint:
```js
const newFunction = () => {
  // Function code...;
}
```

Task: This function will require many new global variables in order for the game's logic to work. 

Create the global variable `numClosedDoors` and set its value to the amount of doors in the game.

Hint: 
```js
numClosedDoors = 3;
```

Task: Instead of having the ChoreBot always hide behind the first door, let's begin crafting the logic to randomly generate the ChoreBot's appearance behind any door.

In the `randomChoreDoorGenerator()` function, create a local variable called `choreDoor` and set its value to a `Math` function that will randomly generate a whole number between `0` and `2`.

To do this, this `Math` function will utilize:

1. The `Math.random()` function to generate a decimal between `0` and `1`.
2. The `numClosedDoors` variable as a multiplier with the `Math.random()` function to generate a decimal value between `0` and `2`.
3. The `Math.floor()` function to round down this decimal value to the closest whole number. 

Hint: 
```js
choreDoor = Math.floor(Math.random() * numClosedDoors);
```

Task: Now that your `randomChoreDoorGenerator()` randomly returns one of three possible values (`0`, `1`, or `2`), you should write logic that assigns each of these possible values to a different door where the ChoreBot could hide.

First, create the global variables `openDoor1`, `openDoor2`, and `openDoor3` but do not assign any value to them globally. They'll be assigned values within your `randomChoreDoorGenerator()` function.

Task: Inside the `randomChoreDoorGenerator()` and directly beneath the `Math` function, write an `if/else` statement where each condition (ie. what needs to be checked inside the `if` or `else if` parentheses) is a possible `choreDoor` value. 

Hint: Since `choreDoor` is either `0`, `1`, or `2`, the conditions are:
```js 
if(choreDoor === 0) {
  // Function code...;
} else if (choreDoor === 1) { 
  // Function code...;
}...
```

Task: Each condition should have a different door holding the ChoreBot image.

Since there are 3 conditions in this `if/else` statement, assign the `doorBotPath` variable to a different `openDoor` global variable so that `openDoor1` is assigned the `doorBotPath` variable under one condition, `openDoor2` is assigned the `doorBotPath` variable under another condition, and `openDoor3` is assigned the `doorBotPath` variable in the final condition.

Hint:
```js 
if(choreDoor === x) {
  openDoorA = doorBotPath;
} else if (choreDoor === 1) { 
  openDoorB = doorBotPath;
}...
```

Task: Within each of the three blocks of code within this `if/else` statement, under the `openDoor` with the `doorBotPath` variable, assign the other `openDoor` global variables so that one is assigned the `beachDoorPath` variable and the other is assigned the `spaceDoorPath` variable.

Hint: The syntax for this `if/else` statement follows:
```js
...
if(choreDoor === x) {
  openDoorA = doorBotPath;
  openDoorB = otherDoor;
  openDoorC = otherDoor;
} else if (choreDoor === y) {
  openDoorB = doorBotPath;
  openDoorA = otherDoor;
  openDoorC = otherDoor;
  ...
} 
```

Task: Now look at our three `door.onclick` arrow function. In its current state, the logic inside explictly states which image path will replace the original `src`. Replace these explicit variables from each `door.onclick` function with an `openDoor` variable so that the value of `doorImage1.src` will change to `openDoor1`, and so on. 

Hint: 

```js
doorImage1.src = openDoor1;
```

Task: To see if the `randomChoreDoorGenerator()` is working, you should call it! Write the function at the very end of the __script.js__ file.

With each refresh of the page, check to see if the ChoreBot appears in a different door. Great job pushing your __JavaScript__ even further! The gaming logic isn't fully there yet, but you've made significant progress in creating a dynamic webpage that responds to user-interactions.