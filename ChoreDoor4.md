##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**!

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how **HTML**, **CSS**, and **JavaScript** interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 4. Let's Make This ACT Like a Game! - Part I

1. [ ] Your game looks like a game thanks to your **HTML** & **CSS** skills, but what good is a game if we always know where the ChoreBot is hiding? Time to put **JavaScript** to work again and randomly generate the door that hides the ChoreBot! Beneath your global variables, create a `randomChoreDoorGenerator()` function using arrow syntax.

    >Hint - the format for arrow function syntax is:

    ```
    const newFunction = () => {
    newFunctionLogic;
    }
    ```
2. [ ] This function will require many new variables in order for the game's logic to work. Create the global variable `doors` and set its value to the amount of doors in the game. Create the global variables `openDoor1`, `openDoor2`, and `openDoor3` but do not assign any value to them at this point (You'll see why soon).

3. [ ] In the `randomChoreDoorGenerator()` function, create a local variable called `choreDoor` and set its value to a Math function that will randomly a whole number between 0 and 2.

    >Hint - The `Math.floor()` and `Math.random()` functions will be used as well as the global variable `doors`.

4. [ ] Inside the `randomChoreDoorGenerator()` and directly beneath the Math function, write an `if-else` statement where each possible `choreDoor` value is a different condition for the `if-else` statement. Use the `openDoor1`, `openDoor2`, and `openDoor3` variables after each `choreDoor` condition to assign the `doorBot` variable to a different door. If an `openDoor` variable is not assigned the `doorBot` variable, it should be assigned either the `beachDoor` or `spaceDoor` variable instead.

    >Hint - The syntax for this "if-else" statement follows:

     ```
      if(choreDoor === x) {
	     openDoor1 = valueA;
	     openDoor2 = valueB;
	     openDoor3 = valueC;
	   } else if (choreDoor === y) {
	   	  openDoor2 = valueA;
	   	  openDoor1 = valueB;
	   	  openDoor3 = valueC;
	   } ...
    ```

5. [ ] Now look at our three `doorImage.onclick` events. Right now the logic states what image will replace the original `src`. Replace a variable in each `doorImage.onclick` event with one that we recently created so that each `doorImage` `src` will be assigned to a variable that holds three possible values.

    >Hint - Each `doorImage.onclick` event will have a different variable. `openDoor1` could hold three different values depending on what the `randomChoreDoorGenerator()` returns so it should be assigned to `doorImage1.src`.

6. [ ] To see if the `randomChoreDoorGenerator()` is working, you should call it! Call the function at the very end of the `<script>` tag.

   Wonderful! Your work with **JavaScript** has not only made every door clickable but has hidden the ChoreBot behind a random door with every page reload! The gaming logic isn't there yet but you've made significant progress in creating a dynamic webpage that responds to user-interactions!

