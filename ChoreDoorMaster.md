### Milestone Project: Avoid the ChoreBot! 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Getting Started - Get a Door, Open a Door!

Task: Your first objective is to build one door which will hide our dreaded ChoreBot!

Look at the __index.html__ starting code. Inside the `<body>`, create a `<div>` element with the class name `"door-row"`. Next, create an `<img>` tag inside this `<div>`. 

Hint: Make sure your HTML elements are properly nested.

```html
<div>
  <img src=""/> 
</div>
```

Task: Copy and paste this link in the image element's `src`: 

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg
``` 

Refresh the page and behold! You have your first closed door for your game!

Task: A user should know that this closed door can be clicked.

Assign this `<img>` element an `id` attribute with the value of `door1`.

Hint: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is wrapped in quotation marks:

```html
<img src="URL" id="id-name"/> 
```

Task: Connecting this `id` to the __CSS__ will allow you to adjust the closed door's properities - including changing the cursor when you hover over it!

Navigate to the __style.css__ starting code and create an `id` CSS selector for the `door1`. Add one attribute so that the `cursor` property is assigned to the value of `pointer` whenever you scroll over the image.

Hint: An `id` selector's property and value are assigned with:

```css
#id { 
  property: value;
}
```

Refresh the page and notice that the cursor changes to a pointer as soon as you hover over the door!

Task: The pointer's purpose is to indicate to the user that the closed door image can be clicked. __CSS__ made this possible; but it's the __JavaScript__ that injects life into that user's click!

All __JavaScript__ logic will be written within the `script.js` file but in order to have that logic interact with the __HTML__, you first need to establish a connection between the `script.js` page and the `index.html`. In the `index.html` page, create a `<script>` element directly above the closing `</body>` tag. Within the opening `<script>` tag, set the `type` as `"text/javascript"` and the `src` as `"script.js"`.

```html
<script type="text/javascript" src="script.js"></script>
``` 

Task: Navigate to the `script.js` file and create a global variable called `door1` that accepts the `id` value of `door1` from your __index.html__ file.

Hint: Use the DOM method: 

```js
let object = document.getElementById('id');
```

Task: Inside the `script.js` file, give `door1` an `.onclick` event using arrow function syntax. The function will be empty for now.

Hint: 

```js
object.onclick = () => {
  myScript;
};
```

Task: Finally, make the closed door image change when you click it so that you see an open door with the ChoreBot ready to greet you!  Copy this link for the ChoreBot image:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg
``` 

Next, paste this url path as the value to a new global variable called `botDoorPath`. Now, within your `door1` arrow function, change the `src` of `door1` to the value of `botDoorPath`.

Hint: An object's `src` value can be assigned a new 	value with:

```js
object.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
```

Refresh the page. Now when you click on the door, watch as the closed door image changes to the ChoreBot ready to greet you with housework!

Assessment: What's in store? More doors!

Task: Great job! You've completed your first objective so now you're going add two more closed doors in the same `div` as your first door.

Under your original `<img>` element, create two new `<img>` elements and assign them the same `src` as your original `<img>` element. Their `id` values, however, will be assigned `door2` and `door3` respectively.

Hint: Make sure to wrap your link in quotation marks: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is also wrapped in quotation marks:

```html
<div>
  <img src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg" id="id-name"/> 
</div>
```

Task: Being a good programmer means doing your best to stay DRY("Don't repeat yourself"). Looking at the __style.css__ code, it would be repetitive to create `id` selectors for `door2` and `door3` just to give them the same `cursor` property. In the __index.html__, assign each image a new class of `doorFrame`. Then, in the __style.css__ transfer the `cursor` property from `#door1` to this new `doorFrame` CSS selector. Delete the now-empty `#door1` selector afterwards.

Hint: A class's property and value are constructed with:

```
.class { 
  property: value;
}
```

Task: Now you have three doors and a pointer that hovers them, but only your first door opens. Put __JavaScript__ to work to open those other two doors!

Create two new global variables called `door2` and `door3` that accepts the `id` values of `door2` and `door3` from your __index.html__ file.

Hint: Use the DOM method: 

```js
let variable = document.getElementById('id');
```

Task: Under your `door1.onclick` event, give `door2` and `door3` each their own `.onclick` event using arrow function syntax. These functions will be empty for now.

Hint: 

```js
object.onclick = () => {
  myScript;
}
```

Task: Be mindful to change the logic if you decide to copy and paste the logic from `door1.onclick` - or else you'll have three ChoreBots! 

To prevent this from happening, first create a global variable called `beachDoorPath` and assign this url as its value:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg
```

Hint: Global variables are declared outside of     	functions.

Task: Next, create another global variable called `spaceDoorPath` and assign this url as its value:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg
```

Hint: Global variables are declared outside of     	functions.

Task: Now within the arrow functions of `door2` and `door3`, write the logic so that `door2` will change to the beach image and `door3` will change to the space image.

Hint: An object's `src` value can be assigned a new value with:

```js
object.src = "URL";
```

Now when you refresh the page, click on each door and witness how each closed door opens to something different and exciting: a ChoreBot, a beach, and outer space!

Assessment: Let's Make This __LOOK__ Like a Game!

Task: Nice! You have three doors but they're all huddled in the top left corner. Give your website some flavor and symmetry by expanding our __index.html__ and __style.css__ pages. 

Right after the opening `<body>` tag, create a new `<div>` with the class name `"header"`. Inside this new `<div>`, create an `<img>` element for the logo image.  Copy this url and paste into the `src`:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg
```

Be aware that the logo is the same color as your current background so __don't panic if you can't see the image__! This is where the __CSS__ gets its chance to contribute!

Task: In the __style.css__ file, create a `header` CSS selector and assign the `background-color` the value `#00ffff`. The logo is now visible; but it's still in the left corner. Assign the `text-align` a value in order to `center` the logo image.

Hint: A class attribute is constructed with:

```css
.class { 
  property: value;
}
```

Task: Good work - you have your game title. Now it's time to write the instructions to your game. First, let's create a title for these instructions and flank this title with a pretty star on each side. 

Beneath the `<div class="header">` tag but above the `<div class="door-row">` tag, create a new `<div>` element with the class name `"first-row"`. Inside this new `<div>` create two new `<img>` elements that take this url as their `src`:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg
```
Refresh your page and you should see two small stars huddled in the top-left corner of their `<div>` (noticing a trend?) underneath the logo image!

Task: So you have two stars resting in the top-left corner of their `<div>` for title. Now write the instructions title.

In between these two `<img>` elements, place a `<p>` element with the class name `"instructions-title"`. Write 'Instructions' inside this `<p>` element. 

When you run the program, the stars will have shifted to different lines. The text is also black and barely visible against the dark background. Time to work your __CSS__ skills again!

Task: Navigate to the __style.css__ file and create a new CSS selectors for `first-row`. For this selector, assign the `margin-top` property a value of `42px` and set the property `text-align` to be `center`.

Hint:

```css
.class { 
  property: value;
}
```

Refresh the page to make sure the text and the stars are centered.

Task: The text and the stars are centered but the stars still appear to be on different lines. Put them all on the same line.

Create an `instructions-title` CSS selector and assign the `display` property a value that will place the title `inline` with the stars.

Hint: 

```css
.class { 
  property: value;
}
```

Refresh the page and see all the elements now on the same line.

Task: 'Instructions' is still hard to see. Expand on your knowledge of __CSS__ to improve your title! 

Look to your `instructions-title` selector and pair these properties with their respective values:

* font-size - 18px
* color - #00ffff 
* font-family - 'Work Sans'

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your title! But do you notice something not working with `font-family`?

Task: Even though you assigned the `'Work Sans'` value to `font-family` within your `instructions-title` selector, the font didn't change on the page. This means that you have to import `'Work Sans'` into our webpage. 

Copy and paste the following code into the HTML `<head>` tag underneath the first `<link href>`: 

```html
<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type='text/css'>
```

Give your page a refresh to change your title into a brand-new imported font!

Task: Looking good! Now explain the game to anyone who wants to play! 

Beneath the `<div class="first-row">` element, create a new `<table>` with the class name `"second-row"`. Inside of that, create four identical `<tr>` elements. Nested inside each `<tr>` element should be two `<td>` elements: the first `<td>` has the class name `"instructions-number"` while the second `<td>` has the class name `"instructions-text"`.

Hint:

```html
<table>
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


Task: For each `<td>` element with `"instructions-text"` class, copy and paste the following directions or make up your own:

```html
<td>Hiding behind one of these doors is the ChoreBot.</td>
<td>Your mission is to open all of the doors without running into the ChoreBot.</td>
<td>If you manage to avoid the ChoreBot until the very last door, you win!</td>
<td>See if you can score a winning streak!</td>
```

Refresh your page to ensure that your game has four directions listed.

Task: Almost there! In the __style.css__ file, create the `second-row` CSS selector and assign the following properties and values:

* text-align - center
* margin - 0 auto 
* width - 300px

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `second-row`!

Task: Next, create the `instructions-number` selector and assign the following properties and values:
   
* margin-right - 23px;
* font-family - 'Work Sans'
* font-size - 36px
* color - #00ffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `instructions-number`!

Task: Underneath that, create the `instructions-text` selector, and assign the following properties and values:

* font-family - 'Work Sans'
* font-size - 14px;
* color - #ffffff;

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `instructions-text`!

Task: At this point, the instructions are bright and centered but the three doors are stubbornly positioned to the left of the directions. Time to center them, as well!

In the __style.css__ file, add a `door-row` CSS selector and assign the `text-align` property a value that will `center` those three doors.

Refresh the page and enjoy the results!

Task: Finally, for the sake of CSS-best practices, move the `.door-frame` selector in the __style.css__ file to the bottom of the file so that the CSS selectors now read in the order that you would see them in your __index.html__ file - top to bottom. 

Phew! That was a healthy amount of __HTML__ and __CSS__ additions but your game is beginning to look pretty stylish with a logical display of different features. Way to utilize your __HTML__ and __CSS__ skills!

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