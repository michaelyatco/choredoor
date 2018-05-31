##Milestone Project: Avoid the ChoreBot!

###Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your **Web Development Path**! 

###Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how HTML, CSS, and JavaScript interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

### 3. Let's Make This LOOK Like a Game!

1. [ ] Nice! We have three doors but they're all huddled in the top left corner. Let's give our website some flavor and symmetry by expanding our **HTML** and **CSS** pages. Right after the opening `<body>` tag, create a new `<div>` with the class name `"header"`. Inside this new `<div>`, create an `<img>` tag for the `logo.svg` image.  Be aware that the logo is the same color as that current background so don't fret if you can't see the image. This is where the **CSS** come in in the next step! 

    >Hint - Make sure to wrap your link in quotation marks:    `<img src="image-location.jpg" />`. Make sure your `<div>` also has a closing `</div>`.

2. [ ] In the **style.css** folder, create a `header` selector and assign the `background-color` the value `#00ffff`. The logo is now visible in the corner so assign the `text-align` a value of `center` in order to center the logo.
 
    >Hint - A class attribute is constructed with:
`.class { property: value;}`.

3. [ ] We have a game title, now let's establish the directions to the game. First, let's create a title for the instructions surrounded by pretty stars. Beneath the `<div class="header"></div>` but above the `<div class="door-row"></div>`, create a new `<div>` with the class name `"first-row"`. Inside this new `<div>` create two new `<img>` tags that take the `star.svg` image.

    >Hint - Make sure to wrap your link in quotation marks:    `<img src="image-location.jpg" />`. Also make sure your `<div>` also has a closing `</div>`.

4. [ ] So we have two stars resting in the top left corner of their `<div>`. In between these two `<img>` tags, place a `<p>` tag with the class name `"instructions-title"`. Write 'Instructions' inside this `<p>` element. When you run the program, the stars will have shifted to different lines. Navigate to the style.css folder and create two new selectors for `first-row` and `instructions-title`. For the `first-row` selector, assign the `margin-top` property a value `42px` and set the property to align the text to be center. 

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

6. [ ] Even though we assigned the `Work Sans` to `instructions-title`, the font didn't change on the page. This means that we have to import `Work Sans` into our webpage. Copy and paste the following code into the HTML `<head>` underneath the first `<link href>`: `<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type='text/css'>`


    >Hint - Paste the link directly underneath:
   `<link href='./style.css' rel='stylesheet' type='text/css'>`

7. [ ] Looking good! Now let's explain the game to anyone who wants to play! Beneath the `<div class="first-row"></div>` create a new `<div>` with the class name `"second-row"`. Inside of that, create four identical `<div>` elements with the class name `"each-direction"`. Finally, for each `"each-direction"`, create a `<p>` element with the class name `"instructions"`. Copy and paste these directions or make up your own:
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

8. [ ] Almost there! In the **style.css** folder, create the `second-row`, `each-direction`, and `instruction` selectors. For the `second-row` selector, assign the following properties & values:

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

9. [ ] At this point, the doors have shifted to the left of the directions. It looks pretty stylish but observe what happens if you make your browser smaller. The directions move on top of the doors! In the **style.css** folder, add the `door-row` selector and assign the following:

    ```
      margin-top: 305px;
      text-align: center;
    ```
 
 	**Note** - for the sake of CSS-best practices, move the `.door-frame` selector to the bottom of the file so that the CSS selectors now read in the order that you would see them in your HTML file.

   Phew! That was a healthy amount of HTML and CSS additions but our game   is beginning to look pretty stylish with a logical display of different features. Way to put your HTML and CSS skills to work!

```
Solution Code - HTML

  <head>
    <title>Chore Door!</title>
    <link href='./style.css' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type='text/css'>
  </head>

  <body>

    <div class="header">
      <img src="images/logo.svg">
    </div>

    <div class="first-row">
      <img src="images/Star.svg">
      <p class="instructions-title">Instructions</p>
      <img src="images/Star.svg">
    </div>

    <div class="second-row">
      <div class="each-direction">
        <p class="instructions">1. Hiding behind one of these doors is the ChoreBot.</p>
      </div>
      <div class="each-direction">
        <p class="instructions">2. Your mission is to open all of the doors without running into the ChoreBot.</p>
      </div>
      <div class="each-direction">
        <p class="instructions">3. If you manage to avoid the ChoreBot until the very last door, you win!</p>
      </div>
      <div class="each-direction">
        <p class="instructions">4. See if you can score a winning streak!</p>
      </div>
    </div>

    <div class="door-row">
      <img class="door-frame" src="images/closed_door.svg" id="door1">
      <img class="door-frame" src="images/closed_door.svg" id="door2">
      <img class="door-frame" src="images/closed_door.svg" id="door3">
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

.header {
  background-color: #00ffff;
  text-align: center;
}

.first-row {
  margin-top: 42px;
  text-align: center;
}

.instructions-title {
  display: inline;
  font-family: 'Work Sans';
  font-size: 18px;
  color: #00ffff;
}

.second-row {
  position: absolute;
  margin-top: 17px;
  right: 25%;
}

.each-direction {
  margin-top: 15px;
}

.instructions {
  display: inline;
  font-family: 'Work Sans';
  font-size: 14px;
  color: #ffffff;
}

.door-row {
  margin-top: 305px;
  text-align: center;
}

.door-frame {
  cursor: pointer;
}

```

```
Solution Code - JavaScript

<script>
  let doorImage1 = document.getElementById('door1');
  let doorImage2 = document.getElementById('door2');
  let doorImage3 = document.getElementById('door3');
  let botDoor = "images/Robot_open_door.svg";
  let beachDoor = "images/beach_open_door.svg";
  let spaceDoor = "images/space_open_door.svg";
	
  doorImage1.onclick = () => {
    doorImage1.src = botDoor;
  }
	
  doorImage2.onclick = () => {
    doorImage2.src = beachDoor;
  }
	
  doorImage3.onclick = () => {
    doorImage3.src = spaceDoor;
  }
</script>

