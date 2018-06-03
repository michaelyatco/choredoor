### Milestone Project: Avoid the ChoreBot! | Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your __Web Development Path__!

### Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This __ACT__ Like a Game! - Part II

Task: Your game is randomly hiding the ChoreBot behind one of the doors but the current logic doesn't care whether you find the ChoreBot in the first door you open or the last. Now you're going to work towards incorporating __game over__ logic - win or lose! First, build a button that will respond to the status of the game. Beneath the `<door-row>` `<div>` create a new `<div>` element with the class name `"start-row"` and an `id` of `"start"`. Type `Good luck!` in between the `<div></div>`.

Hint: Make sure to wrap your `class` and `id` values are wrapped in quotation marks:

```html
<div class = "class-name" id = "id-name"></div>
```

Task: Next, create a `startButton` global variable that accepts `start` as its value.
    
Hint: Use the DOM method: 

```JavaScript
let variable = document.getElementById('id');
```

Task: In the __style.css__ file, create a `start-row` CSS selector and paste in the following:

```css
.start-row {
  margin: auto;
  width: 120px;
  height: 43px;
  background-color: #eb6536;
  padding-top: 18px;
  font-family: 'Work Sans';
  font-size: 18px;
  text-align: center;
  color: #010165;
  margin-bottom: 21px;
  cursor: pointer;
}
```

Task: Create three new global variables, `door1Doom`, `door2Doom`, and `door3Doom` but do not assign any value to these global variables.  In the `randomChoreDoorGenerator()` function, however, insert each `doorDoom` variable in each `if-else` statement and set each `doorDoom` variable to `true`. This is the __game over__ boolean value.

Hint: The three boolean variables should follow this pattern:

```JavaScript
if (choreDoor === #) {
  door#Doom = true;
  openDoor# = botDoor;
  openDoor# = beachDoor;
  openDoor# = spaceDoor;
}...
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

