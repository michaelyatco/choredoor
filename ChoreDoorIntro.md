##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**! 

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how HTML, CSS, and JavaScript interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

###1. Getting Started - Get a door, open a door!

1. [ ] Look at the **index.html** starting code and then navigate to the **images** folder. In between the`<div class=doorRow>``</div>`, create an `<img>` tag for the `closed_door.svg` image and assign that tag an `id` attribute with the value of `door1`.

    >Hint - Make sure to wrap your link in quotation marks:    `<img src="image-location.jpg" />`. You can add the `id` attribute inside the `<img>` tag - just make sure your `id` value is also wrapped in quotation marks.

2. [ ] Navigate to the **style.css** starting code and create an `id` selector for the `door1`. Add one attribute so that the `cursor` property is assigned to the value of `pointer` whenever you scroll over the image.

    >Hint - An ID attribute is constructed with:
`#id { property: value;}`

3. [ ] Now you have a pointer that hovers over our closed door image, but it's the JavaScript that brings your image to life! Between the `<script>``</script>` tags create a global variable called `doorImage1` that accepts `door1` as its value.

    >Hint - Use the DOM method: `document.getElementById('id')`

4. [ ] Give `doorImage1` an `.onclick` event using arrow function syntax. The function will be empty for now.

    >Hint - `object.onclick = () => {myScript};`
    
5. [ ] Finally, make the `closed-door` image change when you click it so that you see an open door with the ChoreBot ready to greet you!  Find the ChoreBot image in the **images** folder and assign that path to a global variable called `botDoor`. Then within your arrow function, change the `src` of `doorImage1` to the value of `botDoor`.

    >Hint - Global variables are declared outside of     	functions.
    
    >Hint - An object's `src` value can be assigned a new 	value with:
   `obj.src = 'new image path'`

6. [ ] Click on the door and watch as the closed door image changes to the ChoreBot ready to greet you with housework! 

```
Solution Code - HTML
<!DOCTYPE html>
  <head>
    <title>Chore Door!</title>
    <link href='./style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="door-row">
      <img src="images/closed_door.svg" id="door1">
    </div>
  </body>
  <script></script>
</html>
```
```
Solution Code - CSS
body {
  background-color: #010165;
  margin: 0px;
}

#door1 {
  cursor: pointer;
}
```

```
Solution Code - JavaScript

<script>
let doorImage1 = document.getElementById('door1');
let botDoor = "images/Robot_open_door.svg";

doorImage1.onclick = () => {
  doorImage1.src = botDoor;
}
</script>
```
