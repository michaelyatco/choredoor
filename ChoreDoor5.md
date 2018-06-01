##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**!

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how **HTML**, **CSS**, and **JavaScript** interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 5. Let's Make This ACT Like a Game! - Part II

1. [ ] Your game is randomly hiding the ChoreBot behind one of the doors but the current logic doesn't care whether you find the ChoreBot in the first door you open or the last. Now you're going to work towards incorporating **game over** logic - win or lose! First, build a button that will respond to the status of the game. Beneath the `<door-row>` `<div>` create a new `<div>` element with the class name `"start-row"` and an `id` of `"start"`. Type `Good luck!` in between the `<div></div>`. Finally, create a `startButton` global variable that accepts `start` as its value.

    >Hint - Make sure to wrap your `class` and `id` values are wrapped in quotation marks.
    >Hint - Use the DOM method: `document.getElementById('id')`

2. [ ] In the **style.css** file, create a `start-row` selector and paste in the following:

    ```
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
    ```

    >Hint - A class attribute is constructed with:
`.class { property: value;}`

3. [ ] Create three new global variables, `door1Doom`, `door2Doom`, and `door3Doom` but do not assign any value to these global variables.  In the `randomChoreDoorGenerator()` function, however, insert each `doorDoom` variable in each "if-else" statement and set each `doorDoom` variable to `true`. This is the **game over** boolean value.

    >Hint - The `door1Doom` should be with the logic that has `openDoor1` having the `botDoor` value. The other two boolean variables should follow the same pattern.

4. [ ] Now you have the **game over** boolean value attached to one random door. The next step is having this value act as a condition in an `if-else` statement within the `doorImage.onclick` event. Beneath the current logic, write an `if` statement that will change the text in the `startButton` variable to `'Game over!'`.

    >Hint - The syntax for this `if-else` statement follows:

     ```
      if(doorDoom) {
	     startButton.innerHTML = 'New text'
	   } ...
    ```

5. [ ] Great! The text changes to 'Game Over!' but notice that you can still open the other doors and play the game. Add three new global variables: `door1Clicked`, `door2Clicked`, and `door3Clicked` and set their value to `false`. Now add an `if` statement to the beginning of each `doorImage.onclick` event so that the function within is only executed if the door was never clicked. Then determine how to use these boolean values to prevent clicking the other doors once the game is over.

    >Hint - The syntax for this `if-else` statement follows:

     ```
      if(!door1Clicked) {
	     (execute function)
	     if(gameOver) {
	     	startButton.innerHTML = 'Game over'
	     	door2Clicked = true;
	     	...
	     }
	   }
     ```

  Huzzah! You've made a game that can't be played once you've hit the losing **game over** condition. **JavaScript** has helped you establish the losing conditions. But games aren't much fun if they just point out when you lose; they're much more exciting when they point out that you've won, as well! Next, you'll be using **JavaScript** to give your game winning conditons.

