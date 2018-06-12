### Milestone Project: Avoid the ChoreBot! 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This LOOK Like a Game!

Task: Nice! You have three doors but they're all huddled in the top left corner. Give your website some flavor and symmetry by expanding your __index.html__ and __style.css__ pages. 

Right after the opening `<body>` tag, create a new `<div>` with the class name `"header"`. Inside this new `<div>` parent element, create an `<img>` child element for the logo image.  Copy this url and paste into the `src`:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg
```

Be aware that the logo is the same color as your current background so __don't panic if you can't see the image__! This is where the __CSS__ gets its chance to contribute!

Task: In the __style.css__ file, under the `body` selector but above the `door-frame` selector, create a `header` CSS selector and assign the `background-color` the value `#00ffff`. If you refresh the page, the logo is now visible; but it's still in the left corner. Assign the `text-align` property a value of `center`.

Hint: Indent the declaration inside the CSS ruleset:
```css
.class { 
  property: value;
}
```

Task: Good work - you have your game title. Now it's time to write the instructions to your game. First, let's create a title for these instructions and flank this title with a pretty star on each side. 

Beneath the `<div class="header">` element but above the `<div class="door-row">` element, create a new `<div>` element with the class name `"title-row"`. Inside this element, create two images using this URL:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg
```

Refresh your page and you should see two small stars huddled in the top-left corner of their `<div>` underneath the logo image!

Task: So you have two stars resting in the top-left corner of their `<div>`. Noticing a trend? Let's fix this default placement.

Navigate to the __style.css__ file and under the `.header` CSS selector, create a new selector for `.title-row`. For this selector, assign the following properties with these values:

  * margin-top - 42px 
  * text-align - center
  * margin-bottom - 21px

Refresh the page to make sure the stars are centered.

Hint:
```css
.class { 
  property: value;
}
```

Task: Now to add the actual instructions title.

In between the star images, place a `<p>` sibling element with the class name `"instructions-title"`. Write 'Instructions' inside this `<p>` element. 

When you refresh the page, the stars will have shifted to different lines. The text is also black and barely visible against the dark background. Time to work your __CSS__ skills again!

Task: The text and the stars are centered but the stars still appear to be on different lines. Put them all on the same line.

Create an `.instructions-title` CSS selector under your `.title-row` selector and assign the `display` property a value that will place the title `inline` with the stars.

Refresh the page and see how the stars and title are now on the same line.

Hint: 
```css
.class { 
  property: value;
}
```

Task: Unfortunately, 'Instructions' is still hard to see. Utilize your knowledge of __CSS__ to improve your title's visibility! 

Look to your `.instructions-title` CSS selector again and pair these properties with their respective values under your already-assigned `display` property:

* font-size - 18px
* color - #00ffff 
* font-family - 'Work Sans'

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your title!

Task: Looking good! Now explain the game to anyone who wants to play! 

Beneath the `<div class="title-row">` element, create a new `<table>` with the class name `"instructions-row"`. Inside of that, create four identical `<tr>` elements. 

Hint:
```html
<table>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</table>
```

Task: Nested inside each `<tr>` parent element should be two `<td>` child elements: the first `<td>` of each child pair has the class name `"instructions-number"` while the second `<td>` of each child pair has the class name `"instructions-text"`.

Hint:
```html
<table class>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
``` 

Task: In between each `<td></td>` element with `"instructions-number` class, type the numbers `1` through `4` so that the `<td></td>` element is numbered sequentially.

Hint:
```html
<td>1</td> 
<td>2</td> 
<td>3</td> 
<td>4</td>
``` 

Task: For each `<td>` element with `"instructions-text"` class, copy and paste the following directions to the game:
```html
<td>Hiding behind one of these doors is the ChoreBot.</td>
<td>Your mission is to open all of the doors without running into the ChoreBot.</td>
<td>If you manage to avoid the ChoreBot until the very last door, you win!</td>
<td>See if you can score a winning streak!</td>
```

Refresh your page to ensure that your game has four directions listed.

Task: Almost there! You just have to improve the spacing and visibility of your instructions.

In the __style.css__ file, create the `.instructions-row` CSS selector under your `.instructions-title` selector and assign the following properties and values:

* margin - 0 auto 
* width - 400px

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-row`!

Task: Underneath that, create the `.instructions-number` selector and assign the following properties and values:
   
* padding-right - 25px
* font-family - 'Work Sans'
* font-size - 36px
* color - #00ffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-number`!

Task: Finally, underneath that, create the `.instructions-text` selector, and assign the following properties and values:

* padding - 10px
* font-family - 'Work Sans'
* font-size - 14px
* color - #ffffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-text`!

Task: Since you've centered the instructions, center your doors, as well!

In the __style.css__ file, under the `.instructions-text` CSS selector, add a `.door-row` CSS selector and assign the `text-align` property a value of `center`.

Refresh the page to see the three doors centered!

Task: For the sake of CSS-best practices, move the `.door-frame` selector in the __style.css__ file to the bottom of the file so that the CSS selectors now read in the order that you would see them in your __index.html__ file - from the top of the page to bottom. 

Task: The last HTML feature to build is a button that will respond to the status of the game. 

Beneath the `<door-row>` element create a new `<div>` element with an `id` of `"start"` and the class name `"start-row"`. Type `Good luck!` in between the `<div></div>`.

Refresh the page to see your positive text appear below the doors!

Hint: Make sure to wrap your `id` and `class` values in quotation marks:
```html
<div id = "id-name" class = "class-name"></div>
```

Task: In the __style.css__ file, create a `.start-row` CSS selector assign the following properties and values:

* margin - auto
* width - 120px
* height - 43px
* background-color - #eb6536
* padding-top - 18px
* font-family - 'Work Sans'
* font-size - 18px
* text-align - center
* color - #010165
* margin-bottom - 21px
* cursor - pointer

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.start-row`!

Phew! That was a healthy amount of __HTML__ and __CSS__ additions but your game is beginning to look pretty stylish with a logical display of different features. Way to utilize your __HTML__ and __CSS__ skills!
