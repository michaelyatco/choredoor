##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**!

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how **HTML**, **CSS**, and **JavaScript** interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 3. Let's Make This LOOK Like a Game!

1. [ ] Nice! You have three doors but they're all huddled in the top left corner. Give your website some flavor and symmetry by expanding our **index.HTML** and **style.css** pages. Right after the opening `<body>` tag, create a new `<div>` with the class name `"header"`. Inside this new `<div>`, create an `<img>` tag for the `logo.svg` image.  Be aware that the logo is the same color as that current background so don't fret if you can't see the image. This is where the **CSS** gets its chance to contribute!

    >Hint - Make sure to wrap your link in quotation marks:    `<img src="image-location.jpg" />`. Make sure your `<div>` also has a closing `</div>`.

2. [ ] In the **style.css** file, create a `header` selector and assign the `background-color` the value `#00ffff`. The logo is now visible in the corner so assign the `text-align` a value of `center` in order to center the logo.

    >Hint - A class attribute is constructed with:
`.class { property: value;}`.

3. [ ] You have a game title, now write the directions to the game. First, create a title for the instructions surrounded by pretty stars. Beneath the `<div class="header"></div>` but above the `<div class="door-row"></div>`, create a new `<div>` with the class name `"first-row"`. Inside this new `<div>` create two new `<img>` tags that take the `star.svg` image.

    >Hint - Make sure to wrap your link in quotation marks:    `<img src="image-location.jpg" />`. Also make sure your `<div>` also has a closing `</div>`.

4. [ ] So you have two stars resting in the top left corner of their `<div>`. In between these two `<img>` tags, place a `<p>` tag with the class name `"instructions-title"`. Write 'Instructions' inside this `<p>` element. When you run the program, the stars will have shifted to different lines. Navigate to the style.css folder and create two new selectors for `first-row` and `instructions-title`. For the `first-row` selector, assign the `margin-top` property a value `42px` and set the property to align the text to be center.

    >Hint - A class attribute is constructed with:
`.class { property: value;}`. `{text-align: center}`

5. [ ] The text is centered but the stars still appear to be on different lines. In the `instructions-title` selector, assign the `display` property a value that will place the title inline with the stars.
     >Hint - `{display: inline}`

   Afterwards, copy and paste the following code into the `instructions-title`    selector, as well:

    ```
     font-family: 'Work Sans';
     font-size: 18px;
     color: #00ffff;
    ```

6. [ ] Even though you assigned the `Work Sans` to `instructions-title`, the font didn't change on the page. This means that you have to import `Work Sans` into our webpage. Copy and paste the following code into the HTML `<head>` underneath the first `<link href>`: `<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type='text/css'>`


    >Hint - Paste the link directly underneath:
   `<link href='./style.css' rel='stylesheet' type='text/css'>`

7. [ ] Looking good! Now explain the game to anyone who wants to play! Beneath the `<div class="first-row"></div>` create a new `<div>` with the class name `"second-row"`. Inside of that, create four identical `<div>` elements with the class name `"each-direction"`. Finally, for each `"each-direction"`, create a `<p>` element with the class name `"instructions"`. Copy and paste these directions or make up your own:
`1. Hiding behind one of these doors is the ChoreBot.`
`2. Your mission is to open all of the doors without running into the ChoreBot.`
`3. If you manage to avoid the ChoreBot until the very last door, you win!`
`4. See if you can score a winning streak!`

    >Hint - Make sure that your HTML elements are properly nested to make your 	code more readable.

    ```
    <div class="parent">
    	<div class="child>
    		<p></p>
    	</div>
    </div>

    ```

8. [ ] Almost there! In the **style.css** file, create the `second-row`, `each-direction`, and `instruction` selectors. For the `second-row` selector, assign the following properties & values:

    ```
    position: absolute;
    margin-top: 17px;
    right: 25%;
    ```
For the `each-direction` selector, assign:

    ```
    margin-top: 15px;
    ```
For the `instructions` selector, assign:

    ```
    display: inline;
    font-family: 'Work Sans';
    font-size: 14px;
    color: #ffffff;
    ```

9. [ ] At this point, the doors have shifted to the left of the directions. It looks pretty stylish but observe what happens if you make your browser window smaller - the directions move on top of the doors! In the **style.css** file, add the `door-row` selector and assign the following:

    ```
      margin-top: 305px;
      text-align: center;
    ```

 	**Note** - for the sake of CSS-best practices, move the `.door-frame` selector to the bottom of the file so that the CSS selectors now read in the order that you would see them in your HTML file.

   Phew! That was a healthy amount of **HTML** and **CSS** additions but your game is beginning to look pretty stylish with a logical display of different features. Way to put your **HTML** and **CSS** skills to work!

