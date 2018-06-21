### Project: Chore Door | chore-door

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
