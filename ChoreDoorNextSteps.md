### Milestone Project: Avoid the ChoreBot! | Bringing It All Together

Let's build a Milestone Project utilizing all the HTML, CSS, and JavaScript concepts covered in the previous modules of your __Web Development Path__!

### Project Overview
Your mission is to construct a single-page website that plays a fully-functional game. You will see how __HTML__, __CSS__, and __JavaScript__ interact harmoniously to produce a dynamic website and hopefully, you'll have fun along the way!

Assessment: __Next Steps__ - HTML & CSS Styling

Welcome to the the __Next Steps__ section of the Milestone Project! This is an extra opportunity to improve the view and functionality of your ChoreBot game! First, focus on making the numbers larger and brighter, like this picture illustrates:


![Instructions-list](images/instructions_list.png)


Task: Inside each `each-direction` `<div>` in your __index.html__ page, create a new `<p>` element with the class name `'instructions-list'` and number them accordingly.

Hint:

```html
<div class="each-direction">
  <p class="instructions-list>1</p>
  ...
</div>
<div class="each-direction">
  <p class="instructions-list>2</p>
  ...
</div>
...
```

Task: In the __style.css__ file, create an `instructions-list` CSS selector and add the following properties and values:

```css
.instructions-list {
  display: inline;
  margin-top: 11px;
  margin-right: 23px;
  font-family: 'Work Sans';
  font-size: 36px;
  font-weight: 600;
  color: #00ffff;
}
```

Assessment: __Next Steps__ - Creating Winning Streaks & High Scores

Wouldn't it be great to play this game with the opportunity to record consecutive victories and establish a high score for all challengers to beat? You can build that feature using __HTML__, __CSS__, and __JavaScript__! It should look similar to this image:

![High-Score](images/high_score.png)

Task: First in the __index.html__ page beneath the `<div class="start-two">`, add a `<div>` element with the class name `"score-row"` and nested inside this new `<div>`, add two `<p>` elements with the class name `"score-text"`. Type `Current streak` in the first `<p>` element and `Best streak` in the second `<p>` element.

Hint: Make sure that your HTML elements are properly nested to make your code more readable:

```
<div class="parent">
  <div class="child>
    <p></p>
    <p></p>
  </div>
</div>
```

Task: The `<p>` elements in their current state are very hard to see in the corner.  Navigate to the __style.css__ file and add two selectors - `score-row` and `score-text`.  The `score-row` selector is responsible for `text-align` and the `score-text` is responsible for `margin-right: 28px`, `letter-spacing: 1.1px`, `display`, `font-family`, `font-size`, and `color`. See if you can determine the values for the last four properties!

Hint: experiment, look at other selectors for clues, and have fun!

Task: The next task is to build the boxes that will hold the `score` and `highScore` values.  Beneath the `score-row` `<div>`, add another `<div>` and set its class name to `score-row`. Inside this second `score-row` `<div>`, nest two more `<div>` elements with the class name `score-box`. Give this first nested `<div>` an `id` of `score-number` and give the second nested `<div>` an `id` of `high-score-number`.

Hint: You can add the `id` attribute inside the `<img>` tag:

```html
<div>
  <img src="images/image_name.svg" id="id-name"/> 
</div>
```

Task: These boxes cannot be seen yet because the **style.css** needs the CSS selector `score-box`. This selector should have the following:

```css
.score-box {
  margin-top: 9px; 
  margin-right: 24px;
}
```

See if you can determine the last six properties: `display`, `width`, `height`, `background-color`, `font-family`, and `font-size`!

Hint: Experiment, look at other selectors for clues, and have fun!

Task: This takes care of the __HTML__ and __CSS__ components of the scores. Now it's time to tackle the __JavaScript__ logic! In the `<script></script>` tags, add two global variables - `score` and `highScore` and set their values to `0`. Then add two more global variables - `scoreDisplay` and `highScoreDisplay`. The `scoreDisplay` variable should accept the `id` value of `"score-number"` and the `highScoreDisplay` variable should accept the `id` value of `"high-score-number"`. 

Hint:

Hint: Use the DOM method: 

```JavaScript
let object = document.getElementById('id');
```

Task: Finally, at the bottom of your global variable list, set `scoreDisplay.innerHTML` to `score` and set `highScoreDisplay.innerHTML` to `highScore`.

Hint: Use the DOM method: 

```JavaScript
object.innerHTML = 'New text'
```

Task: Now add the logic `winnerGameOver()` function to increase the `score` each time the function is called. Then set the `scoreDisplay.innerHTML` to reflect the updated score.

Hint: 

```JavaScript
score++;
```

Task: Alright! The `score` is displayed but we need the `highScore` to reflect the best winning streak. Create a new function called `determineHighScore()` and write an `if-else` statement that will update the `highScore` if the current `score` is greater than the current `highScore` (which has the default value of `0`).

Hint: The `if-else` statement should follow this logic:

```
if (valueA > valueB) {
  valueB = valueA;
  valueBDisplay.innerHTML = valueB;
}
```

Task: Now you need to call the `determineHighScore()` every time the `winnerGameOver()` function is called. Place the `determineHighScore()` function at the bottom of the `winnerGameOver()` function.

Hint:

```JavaScript
const winnerGameOver = () => {
  ...
  determineHighScore();
}
```

Task: Notice how the current `score` doesn't reset back to `0` even if you lose. Add logic to the `gameOver()` function to set the `score` back to `0` when the function is called and then adjust the `scoreDisplay.innerHTML` reflect the score's reset back to `0`.

Hint:

```JavaScript
const gameOver = () => {
  obj.innerHTML = 'New text';
}
```

Task: Excellent work! Now the only task left is to separate the __JavaScript__ from the __index.html__ file. Transfer (via copy & paste) all the __JavaScript__ logic between the `<script></script>` tags to a new file called `script.js`. Make sure not to include the actual `<script></script>` tags in this new file. Finally, to load this `script.js` file onto the __index.html__ file, you need to add this line at the *bottom* of the `<body>` tag.


Hint: 

```html
<body>
  ...
  <script type="text/javascript" src="script.js"></script>`
</body>
```

Wow! Now you have a legitmate scoreboard that reflects your current winning streak and records your highest streak. See if you can think of any other features from your favorite games that would integrate well with ChoreBot!

