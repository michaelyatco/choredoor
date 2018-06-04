### Milestone Project: Avoid the ChoreBot! | Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your __Web Development Path__!

### Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Getting Started - Get a Door, Open a Door!

Task: Look at the __index.html__ starting code and then navigate to the __images__ folder. In between the`<div class=doorRow>``</div>`, create an `<img>` tag for the `closed_door.svg` image and assign that tag an `id` attribute with the value of `door1`.

Hint: Make sure to wrap your link in quotation marks: You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is also wrapped in quotation marks:

```html
<div>
  <img src="images/image_name.svg" id="id-name"/> 
</div>
```

Task: Navigate to the __style.css__ starting code and create an `id` CSS selector for the `door1`. Add one attribute so that the `cursor` property is assigned to the value of `pointer` whenever you scroll over the image.

Hint: An `id` selector's property and value are assigned with:

```css
#id { 
  property: value;
}
```

Task: Now you have a pointer that hovers over our closed door image, but it's the __JavaScript__ that brings your image to life! Between the `<script>``</script>` tags create a global variable called `doorImage1` that accepts `door1` as its value.

Hint: Use the DOM method: 

```JavaScript
let object = document.getElementById('id');
```

Task: Give `doorImage1` an `.onclick` event using arrow function syntax. The function will be empty for now.

Hint: 

```JavaScript
object.onclick = () => {
  myScript;
};
```

Task: Finally, make the `closed_door.svg` image change when you click it so that you see an open door with the ChoreBot ready to greet you!  Find the ChoreBot image in the __images__ folder and assign that path to a global variable called `botDoor`. Then within your arrow function, change the `src` of `doorImage1` to the value of `botDoor`.

Hint: An object's `src` value can be assigned a new 	value with:

```JavaScript
object.src = "images/new_image_name.svg";
```

Task: Click on the door and watch as the closed door image changes to the ChoreBot ready to greet you with housework!
