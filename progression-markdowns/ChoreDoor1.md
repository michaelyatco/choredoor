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
