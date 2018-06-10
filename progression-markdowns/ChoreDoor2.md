### Milestone Project: Avoid the ChoreBot!

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: What's in store? More doors!

Task: Great job! You've completed your first objective so now you're going add two more closed doors in the same parent `<div>` as your first door.

Under your original `<img>` element, create two new `<img>` elements and assign them the same `src` as your original `<img>` element. Their `id` values, however, will be assigned `door2` and `door3` respectively.

Hint: Make sure to wrap your link in quotation marks: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is also wrapped in quotation marks:

```html
<div>
  <img src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg" id="id-name"/> 
</div>
```

Task: Being a good programmer means doing your best to stay DRY("Don't repeat yourself"). Looking at the __style.css__ code, it would be repetitive to create `id` CSS selectors for `door2` and `door3` just to give them the same `cursor` property. In the __index.html__, assign each image a new class of `doorFrame`. 

Hint: An `<img>` class is defined before the `src`:

```html
<img class="class-name" src="URL">
```

Task: Then, in the __style.css__ transfer the `cursor` property from `#door1` to this new `doorFrame` CSS selector. Delete the now-empty `#door1` selector afterwards.

Hint: A class's property and value are constructed with:

```css
.class { 
  property: value;
}
```

Task: Now you have three doors and a pointer that hovers over them, but only your first door opens. Put __JavaScript__ to work to open those other two doors!

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

Hint: An object's `src` value can be assigned a new 	value held by a global variable:

```js
object.src = globalVariable;
```

Now when you refresh the page, click on each door and witness how each closed door opens to something different and exciting: a ChoreBot, a beach, and outer space!