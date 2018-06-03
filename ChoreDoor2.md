### Milestone Project: Avoid the ChoreBot! | Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your __Web Development Path__!

### Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: What's in store? More doors!

Task: Great job! You've completed your first objective so now you're going add two more closed doors in the same `div` as your first door and assign them the `id` values of `door2` and `door3` respectively.

Hint: Make sure to wrap your link in quotation marks: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is also wrapped in quotation marks:

```html
<div>
  <img src="images/image_name.svg" id="id-name"/> 
</div>
```

Task: Being a good programmer means doing your best to stay DRY("Don't repeat yourself"). Looking at the __style.css__ code, it would be repetitive to create `id` selectors for `door2` and `door3` just to give them the same `cursor` property. In the __index.html__, assign each image a new class of `doorFrame`. Then, in the __style.css__ transfer the `cursor` property from `#door1` to this new class. Delete the now-empty `#door1` CSS selector afterwards.

Hint: A class's property and value are constructed with:

```
.class { 
property: value;
}
```

Task: Now you have three doors and a pointer that hovers them, but only your first door opens. Put __JavaScript__ to work to open those other two doors! Create two new global variables called `doorImage2` and `doorImage3` that accept `door2` and `door3` as their respective values.

Hint: Use the DOM method: 

```JavaScript
let variable = document.getElementById('id');
```

Task: Under your `doorImage1.onclick` event, give `doorImage2` and `doorImage3` their own `.onclick` event using arrow function syntax. These functions will be empty for now.

Hint: 

```JavaScript
object.onclick = () => {
  myScript;
}
```

Task: Be mindful to change the logic if you copy and paste the logic from `doorImage1.onclick`, or else you'll have three ChoreBots! Instead, look inside the __images__ folder, find the path for the beach image and assign that path to a global variable called `beachDoor`. Then do the same for the space image and assing that path to another global variable called `spaceDoor`.

Hint: Global variables are declared outside of     	functions.


Task: Now within the arrow functions of `doorImage2` and `doorImage3`, write the logic so that `doorImage2` will change to the beach image and `doorImage3` will change to the space image.

Hint: An object's `src` value can be assigned a new value with:

```JavaScript
object.src = 'new image path';
```

Task: Click on each door and watch how each closed door opens to something different and exciting: a ChoreBot, a beach, and outer space!

