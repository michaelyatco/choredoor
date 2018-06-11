### Milestone Project: Avoid the ChoreBot! 

Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: Let's Make This __LOOK__ Like a Game!

Task: Nice! You have three doors but they're all huddled in the top left corner. Give your website some flavor and symmetry by expanding our __index.html__ and __style.css__ pages. 

Right after the opening `<body>` tag, create a new `<div>` with the class name `"header"`. Inside this new `<div>`, create an `<img>` element for the logo image.  Copy this url and paste into the `src`:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/logo.svg
```

Be aware that the logo is the same color as your current background so __don't panic if you can't see the image__! This is where the __CSS__ gets its chance to contribute!

Task: In the __style.css__ file, create a `header` CSS selector and assign the `background-color` the value `#00ffff`. If you refresh the page, the logo is now visible; but it's still in the left corner. Assign the `text-align` property a value of `center`.

Hint: A class attribute is constructed with:

```css
.class { 
  property: value;
}
```

Task: Good work - you have your game title. Now it's time to write the instructions to your game. First, let's create a title for these instructions and flank this title with a pretty star on each side. 

Beneath the `<div class="header">` element but above the `<div class="door-row">` element, create a new `<div>` element with the class name `"first-row"`. Inside this new `<div>` create two new `<img>` child elements that take this url as their `src`:

```html
https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/star.svg
```
Refresh your page and you should see two small stars huddled in the top-left corner of their `<div>` (noticing a trend?) underneath the logo image!

Task: So you have two stars resting in the top-left corner of their `<div>` for title. Now write the instructions title.

In between these two `<img>` elements, place a `<p>` sibling element with the class name `"instructions-title"`. Write 'Instructions' inside this `<p>` element. 

When you run the program, the stars will have shifted to different lines. The text is also black and barely visible against the dark background. Time to work your __CSS__ skills again!

Task: Navigate to the __style.css__ file and create a new CSS selectors for `first-row`. For this selector, assign the following properties with these values:

  * margin-top - 42px 
  * text-align - center
  * margin-botoom - 21px

Hint:

```css
.class { 
  property: value;
}
```

Refresh the page to make sure the text and the stars are centered.

Task: The text and the stars are centered but the stars still appear to be on different lines. Put them all on the same line.

Create an `instructions-title` CSS selector and assign the `display` property a value that will place the title `inline` with the stars.

Hint: 

```css
.class { 
  property: value;
}
```

Refresh the page and see all the elements now on the same line.

Task: 'Instructions' is still hard to see. Utilize your knowledge of __CSS__ to improve your title! 

Look to your `instructions-title` CSS selector and pair these properties with their respective values:

* display - inline
* font-size - 18px
* color - #00ffff 
* font-family - 'Work Sans'

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your title! But do you notice something not working with `font-family`?

Task: Even though you assigned the `'Work Sans'` value to `font-family` within your `instructions-title` selector, the font didn't change on the page. This means that you have to import `'Work Sans'` into our webpage. 

Copy and paste the following code into the HTML `<head>` tag underneath the first `<link href>`: 

```html
<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type='text/css'>
```

Give your page a refresh to change your title into a brand-new imported font!

Task: Looking good! Now explain the game to anyone who wants to play! 

Beneath the `<div class="first-row">` element, create a new `<table>` with the class name `"second-row"`. Inside of that, create four identical `<tr>` elements. Nested inside each `<tr>` element should be two `<td>` elements: the first `<td>` of each pair has the class name `"instructions-number"` while the second `<td>` of each pair has the class name `"instructions-text"`.

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


Task: For each `<td>` element with `"instructions-text"` class, copy and paste the following directions or make up your own:

```html
<td>Hiding behind one of these doors is the ChoreBot.</td>
<td>Your mission is to open all of the doors without running into the ChoreBot.</td>
<td>If you manage to avoid the ChoreBot until the very last door, you win!</td>
<td>See if you can score a winning streak!</td>
```

Refresh your page to ensure that your game has four directions listed.

Task: Almost there! In the __style.css__ file, create the `second-row` CSS selector and assign the following properties and values:

* margin - 0 auto 
* width - 300px
* margin-bottom - 21px

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `second-row`!

Task: Next, create the `instructions-number` selector and assign the following properties and values:
   
* padding-right - 21px
* font-family - 'Work Sans'
* font-size - 36px
* color - #00ffff

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `instructions-number`!

Task: Underneath that, create the `instructions-text` selector, and assign the following properties and values:

* padding - 10px
* font-family - 'Work Sans'
* font-size - 14px;
* color - #ffffff;

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `instructions-text`!

Task: At this point, the instructions are bright and centered but the three doors are stubbornly positioned to the left of the directions. Time to center them, as well!

In the __style.css__ file, add a `door-row` CSS selector and assign the the following properties and values:

  * text-align - center
  * margin-bottom - 9px

Refresh the page to see the three doors centered!

Task: For the sake of CSS-best practices, move the `.door-frame` selector in the __style.css__ file to the bottom of the file so that the CSS selectors now read in the order that you would see them in your __index.html__ file - from the top of the page to bottom. 

Task: The last HTML feature to build is a button that will respond to the status of the game. 

Beneath the `<door-row>` element create a new `<div>` element with the class name `"start-row"` and an `id` of `"start"`. Type `Good luck!` in between the `<div></div>`.

Hint: Make sure to wrap your `class` and `id` values are wrapped in quotation marks:

```html
<div class = "class-name" id = "id-name"></div>
```

Refresh the page to see your positive text appear below the doors!

Task: In the __style.css__ file, create a `start-row` CSS selector assign the following properties and values:

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

Refresh the page after each new CSS property is assigned so you can see how each individual value influences your `start-row`!

Phew! That was a healthy amount of __HTML__ and __CSS__ additions but your game is beginning to look pretty stylish with a logical display of different features. Way to utilize your __HTML__ and __CSS__ skills!