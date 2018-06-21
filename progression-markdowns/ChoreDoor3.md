### Project: Chore Door | chore-door 

Assessment: Let's Make This LOOK Like a Game!

Task: You have three doors but they're all huddled in the top left corner. Give your website some flavor and symmetry by expanding your __index.html__ and __style.css__ pages. 

Right after the opening `<body>` tag, create a new `<div>` element with the class name `"header"`. Inside this new `<div>` parent element, create an `<img>` child element for the logo image.  Copy this url and paste into the `src`:
```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg
```

Be aware that the logo is the same color as your current background so __don't panic if you can't see the image__ - this is where the __CSS__ gets its chance to contribute!

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

Refresh your page and you should see two small stars huddled in the top-left corner of their `<div>` underneath the logo image.

Task: Your two stars, without any __CSS__, are resting in the top-left corner of their `<div>`. Noticing a trend? Let's fix this default placement.

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

In between the star images, place a `<p>` sibling element with the class name `"instructions-title"`. Type `Instructions` inside this `<p>` element. 

Task: The text and the stars are centered but the stars still appear to be on different lines. Put them all on the same line.

Create an `.instructions-title` CSS selector under your `.title-row` selector and assign the `display` property a value that will place the title `inline` with the stars.

Refresh the page and see how the stars and title are now on the same line.

Hint: 
```css
.class { 
  property: value;
}
```

Task: Unfortunately, `Instructions` is still hard to see. Utilize your knowledge of __CSS__ to improve your title's visibility. 

Look to your `.instructions-title` CSS selector again and pair these properties with their respective values under your already-assigned `display` property:

* font-size - 18px
* color - #00ffff 
* font-family - 'Work Sans'

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your title.

Task: With the title now prominently displayed, the next objective is to explain the game to anyone who wants to play. 

In the __index.html__ file, beneath the `<div class="title-row">` element, create a new `<table>` with the class name `"instructions-row"`. Inside of that, create four identical `<tr>` elements. 

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

Task: Nested inside each `<tr>` parent element should be two `<td>` child elements: 

  * The first `<td>` of each child pair has the class name `"instructions-number"`.
  * The second `<td>` of each child pair has the class name `"instructions-text"`.

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

Task: In between each `<td></td>` element with the `"instructions-number` class, type the numbers `1` through `4` so that these four `<td></td>` elements are numbered sequentially.

Hint:
```html
<td>1</td> 
<td>2</td> 
<td>3</td> 
<td>4</td>
``` 

Task: Going down each `<td>` element with the `"instructions-text"` class sequentially, copy and paste the four directions to the game in order:

* Hiding behind one of these doors is the ChoreBot.
* Your mission is to open all of the doors without running into the ChoreBot.
* If you manage to avoid the ChoreBot until you open the very last door, you win!
* See if you can score a winning streak!

Refresh your page to ensure that your game has four directions listed.

Task: While the instructions are now listed, it's important to improve the spacing and visibility of these instructions.

In the __style.css__ file, create the `.instructions-row` CSS selector under your `.instructions-title` selector and assign the following properties and values:

* margin - 0 auto 
* width - 400px

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-row`.

Task: Underneath that, create the `.instructions-number` selector and assign the following properties and values:
   
* padding-right - 25px
* font-family - 'Work Sans'
* font-size - 36px
* color - #00ffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-number`.

Task: Finally, underneath that, create the `.instructions-text` selector, and assign the following properties and values:

* padding - 10px
* font-family - 'Work Sans'
* font-size - 14px
* color - #ffffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.instructions-text`.

Task: Since you've centered the instructions, center your doors, as well.

In the __style.css__ file, under the `.instructions-text` CSS selector, add a `.door-row` CSS selector and assign the `text-align` property a value of `center`.

Refresh the page to see the three doors centered.

Task: The last HTML feature to build is a button that will respond to the status of the game. 

Beneath the `<door-row>` element of your __index.html__ page, create a new `<div>` element with an `id` of `"start"` and the class name `"start-row"`. Type `Good luck!` in between the `<div></div>` tags.

Refresh the page to see `Good luck!` appear below the doors on the left.

Hint: Make sure to wrap your `id` and `class` values in quotation marks:
```html
<div id="id-name" class="class-name"></div>
```

Task: In the __style.css__ file, beneath every other CSS selector, create a `.start-row` CSS selector assign the following properties and values:

* margin - auto
* width - 120px
* height - 43px
* font-family - 'Work Sans'
* background-color - #eb6536
* padding-top - 18px
* font-size - 18px
* text-align - center
* color - #010165
* margin-bottom - 21px
* cursor - pointer

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `.start-row`.

That was a healthy amount of __HTML__ and __CSS__ additions but your game is beginning to look not only stylish, but also user-intuitive, with a logical display of different features.