### Project: Chore Door | chore-door 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website.

Take a look at what your game will look like by the end of this project. Play a few rounds and see how you fare against the ChoreBot:

[Milestone Project - Chore Door - The Guessing Game](https://s3.amazonaws.com/codecademy-content/projects/chore-door/chore-door-final/index.html "Chore Door")

Believe it or not, you have the capabilities of building every feature in this game - from the layout to the logic. Be patient, take creative risks, and most importantly, have fun!

Assessment: Getting Started - Get a Door, Open a Door!

Task: If you clicked on the link above to play the game, you'll want to clear the Browser Component (the rightmost portion of the page where the game is located) so you can start building your own project with a blank slate.

Click on the __Reset Project__ button next to the __Save__ button on the bottom of the Code Editor.

Task: Now your first objective is to build one door which will hide the dreaded ChoreBot.

Look at the __index.html__ starting code. Inside the `<body>`, create a `<div>` parent element with the class name `"door-row"`. Next, create an `<img>` child element inside this `<div>`. 

Hint: Make sure your HTML elements are properly nested:
```html
<div>
  <img src=""> 
</div>
```

Task: Copy and paste this link in the image element's `src`: 
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg
``` 

Refresh the page to display the first closed door for your game.

Task: A user should know that this closed door can be clicked.

Assign this `<img>` element an `id` attribute with the value of `door1`. Place this `id` before the `src`.

Hint: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is wrapped in quotation marks:
```html
<img id="id-name" src="URL"> 
```

Task: Connecting this `id` to the __CSS__ will allow you to adjust the closed door's properities - including changing the cursor when you hover over it.

Navigate to the __style.css__ starting code and create an CSS ID selector for the `#door1`. Inside this selector underneath the `body` selector, assign the `cursor` property a value of `pointer`.

Refresh the page and notice that the cursor changes to a pointer as soon as you hover over the door.

Hint: An `id` selector's property and value are assigned with the following syntax. Make sure to indent the property:
```css
#id { 
  property: value;
}
```

Task: The pointer's purpose is to indicate to the user that the closed door image can be clicked. __CSS__ made this possible; but it's the __JavaScript__ that makes that click do something.

All __JavaScript__ logic will be written within the `script.js` file but in order to have that logic interact with the __HTML__, you first need to establish a connection between the __script.js__ page and the __index.html__. In the __index.html__ page, create a `<script>` element directly above the closing `</body>` tag. Inside the opening `<script>` tag, set the `type` as `"text/javascript"` and the `src` as `"script.js"`. Then immediately close the element with a `</script>` tag.

Hint:
```html
<script type="text/javascript" src="script.js"></script>
``` 

Task: Navigate to the __script.js__ file. Create a global variable called `doorImage1`. Use a __JavaScript__ DOM method to assign this global variable to the __HTML__ element with the `id` of `door1`.

Hint: Use the DOM method: 
```js
let globalVariable = document.getElementById('id');
```

Task: Inside the __script.js__ file, underneath your global variable, type `door1.onclick`. Assign `door1.onlick` to an arrow function. 

This function will run whenever the door image element is clicked. For now, though, the function is empty.

Hint: 
```js
imageElement.onclick = () => {
  // Function code...;
}
```

Task: Now make the closed door image change when you click it so that you see an open door with the ChoreBot.  

First, directly underneath your `doorImage1` global variable, create a new global variable called `botDoorPath`. Set its value to this link which has the ChoreBot image:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg
``` 

Hint: Make sure to wrap the URL path in quotes:
```js
let variable = "URL"
```

Task: Next, within your `door1` arrow function, change the `src` of `doorImage1` to the value of `botDoorPath`.

Refresh the page. Now when you click on the door, watch as the closed door image changes to the ChoreBot ready to greet you with housework!

Hint: A variable's `src` value can be assigned a new 	value held by another variable:
```js
variableA.src = variableB;
```

Assessment: What's in store? More doors!

Task: You've completed your first objective of getting a door and opening a door. Now you're going add two more closed doors in the same parent `<div>` as your first door.

Under your original `<img>` element, create two new `<img>` elements and assign them the same `src` as your original `<img>` element. Their `id` values, however, will be assigned `door2` and `door3` respectively. Make sure to place the `id` before the `src`.

Hint: Make sure to wrap your link in quotation marks: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is also wrapped in quotation marks:
```html
<div>
  <img id="id-name" src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"> 
</div>
```

Task: Being a good programmer means doing your best to stay DRY("Don't repeat yourself"). Looking at the __style.css__ code, it would be repetitive to create CSS ID selectors for `#door2` and `#door3` just to give them the same `cursor` property. 

Navigate back to the __index.html__ and assign each image a new class of `door-frame`. Make sure to place the `class` between the `id` and the `src`. 

Listing the `id` and `class` in this order is an important reminder of __CSS__ specificity (the order by which the browser decides which CSS styles will be displayed).

Hint: An `<img>` element's `class` is defined after the `id` but before the `src`:
```html
<img id="id-name" class="class-name" src="URL">
```

Task: Next, in the __style.css__ file, create the `.door-frame` CSS class selector and assign the following properties and values:

* cursor - pointer 
* padding - 10px

Refresh the page after each new CSS property is assigned so you can see how each individual value influences the three doors.

Hint: A class's property and value are constructed with:
```css
.class { 
  property: value;
}
```

Task: Delete the `#door1` ID selector since the `.door-frame` class selector makes `#door1` redundant.

Task: Now you have three doors and the cursor changes on hover for all three; but only your first door opens. Put __JavaScript__ to work to open those other two doors!

Go to your __script.js__ file and create two new global variables called `doorImage2` and `doorImage3`. Use a __JavaScript__ DOM method to assign these global variables to the __HTML__ elements with the `id` of `door2` and `door3` respectively.

Hint: Use the DOM method: 
```js
let variable = document.getElementById('id');
```

Task: Under your `door1.onclick` arrow function, give `door2` and `door3` each their own `.onclick` arrow functions. These functions will be empty for now.

Hint: 
```js
imageElement.onclick = () => {
  // Function code...;
}
```

Task: Be mindful to change the logic if you decide to copy and paste the logic from the `door1.onclick` arrow function - or else you'll have three ChoreBots! 

To prevent this from happening, first create a global variable called `beachDoorPath` and assign this url as its value:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg
```

Hint: Global variables are declared outside of     	functions and are listed before all functions.

Task: Next, create another global variable called `spaceDoorPath` and assign this url as its value:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg
```

Hint: Global variables are declared outside of     	functions and are listed before all functions.

Task: Now within the arrow functions of `door2` and `door3`, write the logic so that `doorImage2` will change to the beach image and `doorImage3` will change to the space image.

Hint: A variable's `src` value can be assigned a new 	value held by another variable:
```js
variableA.src = variableB;
```

Now when you refresh the page, click on each door and witness how each closed door opens to something different: a ChoreBot, a beach, and outer space.

Assessment: Let's Make This LOOK Like a Game!

Task: You have three doors but they're all huddled in the top left corner. Give your website some flavor and symmetry by expanding your __index.html__ and __style.css__ pages. 

Right after the opening `<body>` tag, create a new `<div>` element with the class name `"header"`. Inside this new `<div>` parent element, create an `<img>` child element for the logo image.  Copy this url and paste into the `src`:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg
```

Be aware that the logo is the same color as your current background so __don't panic if you can't see the image__ - this is where the __CSS__ gets its chance to contribute!

Task: In the __style.css__ file, under the `body` selector but above the `door-frame` selector, create a `header` CSS selector and assign the `background-color` the value `#00ffff`. If you refresh the page, the logo is now visible; but it's still in the left corner. Assign the `text-align` property a value of `center`.

Hint: Indent the declaration inside the CSS ruleset:
```css
.class { 
  property: value;
}
```

Task: Good work - you have your game title. Now it's time to write the instructions to your game. First, let's create a title for these instructions and flank this title with a pretty star on each side. 

Beneath the `<div class="header">` element but above the `<div class="door-row">` element, create a new `<div>` element with the class name `"title-row"`. Inside this element, create two images using this URL:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg
```

Refresh your page and you should see two small stars huddled in the top-left corner of their `<div>` underneath the logo image.

Task: Your two stars, without any __CSS__, are resting in the top-left corner of their `<div>`. Noticing a trend? Let's fix this default placement.

Navigate to the __style.css__ file and under the `.header` CSS selector, create a new selector for `.title-row`. For this selector, assign the following properties with these values:

  * margin-top - 42px 
  * text-align - center
  * margin-bottom - 21px

Refresh the page to make sure the stars are centered.

Hint:
```css
.class { 
  property: value;
}
```

Task: Now to add the actual instructions title.

In between the star images, place a `<p>` sibling element with the class name `"instructions-title"`. Type `Instructions` inside this `<p>` element. 

Task: The text and the stars are centered but the stars still appear to be on different lines. Put them all on the same line.

Create an `.instructions-title` CSS selector under your `.title-row` selector and assign the `display` property a value that will place the title `inline` with the stars.

Refresh the page and see how the stars and title are now on the same line.

Hint: 
```css
.class { 
  property: value;
}
```

Task: Unfortunately, `Instructions` is still hard to see. Utilize your knowledge of __CSS__ to improve your title's visibility. 

Look to your `.instructions-title` CSS selector again and pair these properties with their respective values under your already-assigned `display` property:

* font-size - 18px
* color - #00ffff 
* font-family - 'Work Sans'

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your title.

Task: With the title now prominently displayed, the next objective is to explain the game to anyone who wants to play. 

In the __index.html__ file, beneath the `<div class="title-row">` element, create a new `<table>` with the class name `"instructions-row"`. Inside of that, create four identical `<tr>` elements. 

Hint:
```html
<table>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</table>
```

Task: Nested inside each `<tr>` parent element should be two `<td>` child elements: 

  * The first `<td>` of each child pair has the class name `"instructions-number"`.
  * The second `<td>` of each child pair has the class name `"instructions-text"`.

Hint:
```html
<table class>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
``` 

Task: In between each `<td></td>` element with the `"instructions-number` class, type the numbers `1` through `4` so that these four `<td></td>` elements are numbered sequentially.

Hint:
```html
<td>1</td> 
<td>2</td> 
<td>3</td> 
<td>4</td>
``` 

Task: Going down each `<td>` element with the `"instructions-text"` class sequentially, copy and paste the four directions to the game in order:

* Hiding behind one of these doors is the ChoreBot.
* Your mission is to open all of the doors without running into the ChoreBot.
* If you manage to avoid the ChoreBot until you open the very last door, you win!
* See if you can score a winning streak!

Refresh your page to ensure that your game has four directions listed.

Task: While the instructions are now listed, it's important to improve the spacing and visibility of these instructions.

In the __style.css__ file, create the `.instructions-row` CSS selector under your `.instructions-title` selector and assign the following properties and values:

* margin - 0 auto 
* width - 400px

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-row`.

Task: Underneath that, create the `.instructions-number` selector and assign the following properties and values:
   
* padding-right - 25px
* font-family - 'Work Sans'
* font-size - 36px
* color - #00ffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-number`.

Task: Finally, underneath that, create the `.instructions-text` selector, and assign the following properties and values:

* padding - 10px
* font-family - 'Work Sans'
* font-size - 14px
* color - #ffffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-text`.

Task: Since you've centered the instructions, center your doors, as well.

In the __style.css__ file, under the `.instructions-text` CSS selector, add a `.door-row` CSS selector and assign the `text-align` property a value of `center`.

Refresh the page to see the three doors centered.

Task: The last HTML feature to build is a button that will respond to the status of the game. 

Beneath the `<door-row>` element of your __index.html__ page, create a new `<div>` element with an `id` of `"start"` and the class name `"start-row"`. Type `Good luck!` in between the `<div></div>` tags.

Refresh the page to see `Good luck!` appear below the doors on the left.

Hint: Make sure to wrap your `id` and `class` values in quotation marks:
```html
<div id="id-name" class="class-name"></div>
```

Task: In the __style.css__ file, beneath every other CSS selector, create a `.start-row` CSS selector assign the following properties and values:

* margin - auto
* width - 120px
* height - 43px
* font-family - 'Work Sans'
* background-color - #eb6536
* padding-top - 18px
* font-size - 18px
* text-align - center
* color - #010165
* margin-bottom - 21px
* cursor - pointer

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.start-row`.

That was a healthy amount of __HTML__ and __CSS__ additions but your game is beginning to look not only stylish, but also user-intuitive, with a logical display of different features.

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

Task: Now that your `randomChoreDoorGenerator()` randomly returns one of three possible values (`0`, `1`, or `2`), write the logic that assigns each of these possible values to a different door where the ChoreBot could hide.

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

Since there are 3 conditions in this `if/else` statement, assign the `botDoorPath` variable to a different `openDoor` global variable so that `openDoor1` is assigned the `botDoorPath` variable under one condition, `openDoor2` is assigned the `botDoorPath` variable under another condition, and `openDoor3` is assigned the `botDoorPath` variable in the final condition.

Hint:
```js 
if(choreDoor === x) {
  openDoorA = botDoorPath;
} else if (choreDoor === 1) { 
  openDoorB = botDoorPath;
}...
```

Task: Within each of these three blocks of code, under the `openDoor` being assigned the `botDoorPath ` variable, assign the other `openDoor` global variables so that one is assigned the `beachDoorPath` variable and the other is assigned the `spaceDoorPath` variable.

Hint: The syntax for this `if/else` statement follows:
```js
...
if(choreDoor === x) {
  openDoorA = botDoorPath;
  openDoorB = otherDoor;
  openDoorC = otherDoor;
} else if (choreDoor === y) {
  openDoorB = botDoorPath;
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

With each refresh of the page, check to see if the ChoreBot appears in a different door. While the gaming logic isn't fully there yet, you've made significant progress in creating a dynamic webpage that responds to user-interactions.

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