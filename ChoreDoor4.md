### Milestone Project: Avoid the ChoreBot!

### Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This __ACT__ Like a Game! - Part I

Task: Your game is beginning to look like a game thanks to your __HTML__ architecture & __CSS__ manipulations; but what good is a game if you know where the ChoreBot is always hiding? __JavaScript__ solves this problem by helping you randomly generate the door that hides the ChoreBot! 

In your `script.js` file, beneath your global variables, create a `randomChoreDoorGenerator()` function using arrow syntax.

```js
const newFunction = () => {
  myScript;
}
```

Task: This function will require many new global variables in order for the game's logic to work. 

Create the global variable `numClosedDoors` and set its value to the amount of doors in the game. Create the global variables `openDoor1`, `openDoor2`, and `openDoor3` but do not assign any value to them at this point (You'll see why soon).

Task: Instead of having the ChoreBot always hide behind the first door, let's begin crafting the logic to randomly generate the ChoreBot's appearance behind any door!

In the `randomChoreDoorGenerator()` function, create a local variable called `choreDoor` and set its value to a `Math` function that will randomly a whole number between `0` and `2`.

Hint: The `Math.floor()` and `Math.random()` functions will be used as well as the global variable `doors`.


Task: Now that your `randomChoreDoorGenerator()` randomly returns one of three possible values (`0`, `1`, or `2`), you should write logic that assigns each of these possible values to a different door where the ChoreBot could hide!

Inside the `randomChoreDoorGenerator()` and directly beneath the `Math` function, write an `if-else` statement where each possible `choreDoor` value is a different condition for the `if-else` statement. Use the `openDoor1`, `openDoor2`, and `openDoor3` variables after each `choreDoor` condition to assign the `doorBotPath` variable to a different door. If an `openDoor` variable is not assigned the `botDoorPath` variable, it should be assigned either the `beachDoorPath` or `spaceDoorPath` variable instead.

Hint: The syntax for this "if-else" statement follows:

```js
...
if(choreDoor === x) {
  openDoor1 = valueA;
  openDoor2 = valueB;
  openDoor3 = valueC;
} else if (choreDoor === y) {
  openDoor2 = valueA;
  openDoor1 = valueB;
  openDoor3 = valueC;
  ...
} 
```

Task: Now look at our three `door.onclick` events. In its current state, the logic inside explictly states which image path will replace the original `src`. Replace these explicit variables from each `door.onclick` event with the `openDoor` variables with regard to their respective numbers.

Hint: 

```js
door1.src = openDoor1;
```

Task: To see if the `randomChoreDoorGenerator()` is working, you should call it! Write the function at the very end of the `script.js` file.

With each refresh of the page, check to see if the ChoreBot appears in a different door! Great job pushing your __JavaScript__ even further! The gaming logic isn't fully there yet but you've made significant progress in creating a dynamic webpage that responds to user-interactions!

