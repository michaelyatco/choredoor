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