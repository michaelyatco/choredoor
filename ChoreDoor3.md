### Milestone Project: Avoid the ChoreBot! | Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your __Web Development Path__!

### Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This __LOOK__ Like a Game!

Task: Nice! You have three doors but they're all huddled in the top left corner. Give your website some flavor and symmetry by expanding our __index.html__ and __style.css__ pages. Right after the opening `<body>` tag, create a new `<div>` with the class name `"header"`. Inside this new `<div>`, create an `<img>` tag for the `logo.svg` image.  Be aware that the logo is the same color as that current background so don't fret if you can't see the image. This is where the __CSS__ gets its chance to contribute!

Hint: Make sure to wrap your link in quotation marks:    

```html
<div>
	<img src="image-location.jpg" />
</div>
```

Task: In the __style.css__ file, create a `header` selector and assign the `background-color` the value `#00ffff`. The logo is now visible in the corner so assign the `text-align` a value of `center` in order to center the logo.

Hint: A class attribute is constructed with:

```css
.class { 
property: value;
}
```

Task: You have a game title, now write the directions to the game. First, create a title for the instructions surrounded by pretty stars. Beneath the `<div class="header"></div>` but above the `<div class="door-row"></div>`, create a new `<div>` with the class name `"first-row"`. Inside this new `<div>` create two new `<img>` tags that take the `star.svg` image.

Hint: Make sure to wrap your link in quotation marks:    

```html
<div>
	<img src="image-location.jpg" />
</div>
```

Task: So you have two stars resting in the top left corner of their `<div>`. In between these two `<img>` tags, place a `<p>` tag with the class name `"instructions-title"`. Write 'Instructions' inside this `<p>` element. When you run the program, the stars will have shifted to different lines. Navigate to the __style.css__ folder and create two new CSS selectors for `first-row` and `instructions-title`. For the `first-row` selector, assign the `margin-top` property a value `42px` and set the property `text-align` the text to be `center`.

Hint: A class selector's property and value are constructed with:

```css
.class { 
property: value;
}
```

Task: The text is centered but the stars still appear to be on different lines. In the `instructions-title` selector, assign the `display` property a value that will place the title `inline` with the stars.

Hint: 


```css
.class { 
property: value;
}
```

Task: Afterwards, copy and paste the following code into the `instructions-title` selector, as well:

 ```css
 .instructions-title {
 font-family: 'Work Sans';
 font-size: 18px;
 color: #00ffff;
 }
 ```

Task: Even though you assigned the `Work Sans` to `instructions-title`, the font didn't change on the page. This means that you have to import `Work Sans` into our webpage. Copy and paste the following code into the HTML `<head>` underneath the first `<link href>`: 

```html
<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type='text/css'>
```

Task: Looking good! Now explain the game to anyone who wants to play! Beneath the `<div class="first-row"></div>` create a new `<div>` with the class name `"second-row"`. Inside of that, create four identical `<div>` elements with the class name `"each-direction"`. Finally, for each `"each-direction"`, create a `<p>` element with the class name `"instructions"`. Copy and paste these directions or make up your own:

```html
<p class ="instructions"> 1. Hiding behind one of these doors is the ChoreBot. </p>
<p class ="instructions"> 2. Your mission is to open all of the doors without running into the ChoreBot. </p>
<p class ="instructions"> 3. If you manage to avoid the ChoreBot until the very last door, you win! </p>
<p class ="instructions"> 4. See if you can score a winning streak! </p>
```

Hint: Make sure that your HTML elements are properly nested to make your 	code more readable.

 ```html
 <div class="parent">
   <div class="child>
     <p></p>
     <p></p>
   </div>
 </div>
 ```

Task: Almost there! In the __style.css__ file, create the `second-row`, `each-direction`, and `instruction` CSS selectors. For the `second-row` selector, assign the following properties & values:

```css
.second-row {
  position: absolute;
  margin-top: 17px;
  right: 25%;
 }
```
For the `each-direction` selector, assign:

```css
.each-direction {    
  margin-top: 15px;
}
```
For the `instructions` selector, assign:

```css
.instructions {
  display: inline;
  font-family: 'Work Sans';
  font-size: 14px;
  color: #ffffff;
}
```

Task: At this point, the doors have shifted to the left of the directions. It looks pretty stylish but observe what happens if you make your browser window smaller - the directions move on top of the doors! In the __style.css_ file, add the `door-row` CSS selector and assign the following:

```css
.door-row {
  margin-top: 305px;
  text-align: center;
}
```

Task: For the sake of CSS-best practices, move the `.door-frame` selector in the __style.css__ fileto the bottom of the file so that the CSS selectors now read in the order that you would see them in your __index.html__ file.

Phew! That was a healthy amount of __HTML__ and __CSS__ additions but your game is beginning to look pretty stylish with a logical display of different features. Way to put your __HTML__ and __CSS__ skills to work!

