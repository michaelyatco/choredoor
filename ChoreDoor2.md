##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**!

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how **HTML**, **CSS**, and **JavaScript** interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 2. What's in store? More doors!

1. [ ] Great job! You've completed your first objective so now you're going add two more closed doors in the same `div` as your first door and assign them the `id` values of `door2` and `door3` respectively.

    >Hint - Make sure to wrap your link in quotation marks:    `<img src="image-location.jpg" />`. You can add the `id` attribute inside the `<img>` tag - just make sure your `id` is also wrapped in quotation marks.

2. [ ] Being a good programmer means doing your best to stay DRY("Don't repeat yourself"). Looking at the **style.css** code, it would be repetitive to create `id` selectors for `door2` and `door3` just to give them the same `cursor` property. In the HTML, assign each image a new class of `doorFrame`. Then, in the CSS transfer the `cursor` property from `#door1` to this new class. Delete the now-empty `#door1` selector afterwards.

    >Hint - A class attribute is constructed with:
`.class { property: value;}`

3. [ ] Now you have three doors and a pointer that hovers them, but only your first door opens. Put **JavaScript** to work to open those other two doors! Create two new global variables called `doorImage2` and `doorImage3` that accept `door2` and `door3` as their respective values.

    >Hint - Use the DOM method: `document.getElementById('id')`

4. [ ] Under your `doorImage1.onclick` event, give `doorImage2` and `doorImage3` their own `.onclick` event using arrow function syntax. These functions will be empty for now.

    >Hint - `object.onclick = () => {myScript};`

5. [ ] Be mindful to change the logic if you copy and paste the logic from `doorImage1.onclick`, or else you'll have three ChoreBots! Instead, look inside the **images** folder, find the path for the beach image and assign that path to a global variable called `beachDoor`. Then do the same for the space image and assing that path to another global variable called `spaceDoor`.

    >Hint - Global variables are declared outside of     	functions.


6. [ ] Now within the arrow functions of `doorImage2` and `doorImage3`, write the logic so that `doorImage2` will change to the beach image and `doorImage3` will change to the space image.

    >Hint - An object's `src` value can be assigned a new 	value with:
   `obj.src = 'new image path'`

7. [ ] Click on each door and watch how each closed door opens to something different and exciting: a ChoreBot, a beach, and outer space!

