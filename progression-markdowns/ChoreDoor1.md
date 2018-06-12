### Milestone Project: Avoid the ChoreBot! 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Getting Started - Get a Door, Open a Door!

Task: Your first objective is to build one door which will hide our dreaded ChoreBot!

Look at the __index.html__ starting code. Inside the `<body>`, create a `<div>` element with the class name `"door-row"`. Next, create an `<img>` tag inside this `<div>`. 

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

Refresh the page and behold! You have your first closed door for your game!

Task: A user should know that this closed door can be clicked.

Assign this `<img>` element an `id` attribute with the value of `door1`. Place this `id` before the `src`.

Hint: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is wrapped in quotation marks:
```html
<img id="id-name" src="URL"> 
```

Task: Connecting this `id` to the __CSS__ will allow you to adjust the closed door's properities - including changing the cursor when you hover over it!

Navigate to the __style.css__ starting code and create an CSS ID selector for the `#door1`. Inside this selector, assign the `cursor` property a value of `pointer`.

Refresh the page and notice that the cursor changes to a pointer as soon as you hover over the door!

Hint: An `id` selector's property and value are assigned with the following syntax. Make sure to indent the property:
```css
#id { 
  property: value;
}
```

Task: The pointer's purpose is to indicate to the user that the closed door image can be clicked. __CSS__ made this possible; but it's the __JavaScript__ that makes that click do something!

All __JavaScript__ logic will be written within the `script.js` file but in order to have that logic interact with the __HTML__, you first need to establish a connection between the `script.js` page and the `index.html`. In the `index.html` page, create a `<script>` element directly above the closing `</body>` tag. Inside the opening `<script>` tag, set the `type` as `"text/javascript"` and the `src` as `"script.js"`. Then immediately close the element with a `</script>` tag.

Hint:
```html
<script type="text/javascript" src="script.js"></script>
``` 

Task: Navigate to the `script.js` file. Create a global variable called `doorImage1`. Use a __JavaScript__ DOM method to assign this global variable to the __HTML__ element with the `id` `door1`.

Hint: Use the DOM method: 
```js
let globalVariable = document.getElementById('id');
```

Task: Inside the `script.js` file, underneath your global variable, type `door1.onclick`. Assign `door1.onlick` to an arrow function. 

This function will run whenever the door image element is clicked. For now, though, the function is empty.

Hint: 
```js
image-element-id.onclick = () => {
  // Function code...;
};
```

Task: Now make the closed door image change when you click it so that you see an open door with the ChoreBot!  

First, directly underneath your `doorImage1` global variable, create a new global variable called `botDoorPath`. Set its value to this link which has the ChoreBot image:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg
``` 

Task: Next, within your `door1` arrow function, change the `src` of `doorImage1` to the value of `botDoorPath`.

Refresh the page. Now when you click on the door, watch as the closed door image changes to the ChoreBot ready to greet you with housework!

Hint: A variable's `src` value can be assigned a new 	value held by another variable:
```js
variableA.src = variableB;
```