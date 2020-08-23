# Week 7, Day 2

## CSS
### Grid
- We discussed CSS Grid and how it can be used to line things up in two directions, both across the page, and up and down the page.
- Grid is a powerful tool, but should not be used just because it is shiny, new, and exists. It is am implement to get a particular job done, so it's important to think about why you have decided to use Grid.
- In the same way as with Flexbox, you put the Grid commands *on the parent* to the items that are being placved on the grid.
- There is much to discuss with Grid, but to keep it simple, first we want to have a way to set up a static grid. 
```css
.grid-container {
    display: grid;
    grid-template-columns: 50px 1fr 3fr 2fr 100px;
    grid-template-rows: 200px 200px 200px 200px 200px;
    grid-auto-rows: auto;
    grid-gap: 4px;
}
.item {
    padding: 15px;
    background-color: green;
    border-radius: 5px;
}
```
- Here we are setting up a 5 by 5 grid.
- In this instance, the rows are the simplest to discuss. The `grid-template-rows` attribute is set so that each of rows will be 200px. 
- The columns here are more complex. The first column is `50px` wide, and the fifth column is `100px` wide. These values are fixed. 
- For the middle three columns we are using fractions. They will take up the remaining space across the available width, and each will take up the proportion that they have been given. 
- There are a total of 6 fractions available (1 + 3 + 2 = 6). The first of these columns will take up 1/6 of that space. The second will take up 3/6, or 1/2 of the space. And the third will take up 2/6, or 1/3. 
- We can also use fractions on rows. The difference is that with the web, the width is generally the more fixed value, whereas the height tends to be more dependent on the amount of content (although this is not always true).
- There is also the `repeat` command. For example:
```css
.grid-container {
    /* ..other grid code.. */
    grid-template-columns: repeat(5, 200px);
}
```
- Here we will get five 200px columns, which is the same as `grid-template-columns: 200px 200px 200px 200px 200px;`
- We can also repeat fractions:
```css
.grid-container {
    /* ..other grid code.. */
    grid-template-columns: repeat(3, 1fr 2fr);
}
```
- In this case we will get three times that 1/2 ratio. 
- Repeat is a function that takes two arguments: the first is for the number of times to repeat, and the second is the pattern to be repeated.

*Heights*
- In the first example above we are setting a very static 5 by 5 grid that will not change. If there are fewer or greater than 25 items then we may have specified too few or too many grid spaces for them. We might prefer to have a way to cope with as many items as are thrown our way.
- Instead of being prescriptive about how many rows we expect up front, we could simply declare the height of any rows created:
```css
.grid-container {
    /* ..other grid code.. */
    grid-template-rows: 100px;
}
```
- This will set the value of any row that is created at 100px.
- We might want the heights to to `auto` so that they take on the size of the content:
```css
.grid-container {
    /* ..other grid code.. */
    grid-template-rows: auto;
}
```
- We have also discussed how there is much discussion in Grid of _*explicit*_ vs _*implicit*_. 
- We have not gone into depth on these concepts. In the above examples we are always being explicit - that is, we are explicitly specifying how we want our grid to look. 
- This article gives a good overview of the difference between these concepts, and how that relates to building your grid. If you are interested, please have a look: [Grid: explicit v implicit](https://bitsofco.de/understanding-the-difference-between-grid-template-and-grid-auto/)

*Gaps*
- The last basic command is `grid-gap` and this is simply the gap that you would like between items.
```css
.grid-container {
    /* ..other grid code.. */
    grid-gap: 5px;
}
```
- This command puts a gap of 5px between items.

*Minmax*
- `minmax` is a command that can be simple to understand conceptually, but tougher to get your head around in specific cases. Tinkering with this command to try to understand it is a good idea.
- Here is a classic example to examine:
```css
.grid-container {
    /* ..other grid code.. */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```
- What we are saying here is that we want to repeat a pattern. We want that pattern to auto-fit to the screen (only repeat as many times as needed), and that each element take up a minimum of 250px across, and 1fr. 
- The two arguments to the minmax function are the minimum and maximum values of the items.
- The more natural way to understand this is that we are saying for the browser to create as many columns as will fit, but that each should have a minimum size of 250px. When there is room for more columns, create more columns (and each should take up the same amount of space, `1fr` each of the total fractions available).
- This means that the number of columns will change depending of the width of the window.
- There are many variations that can be used for this command, but start with the command above, and tinker with it. As you need different and more complex commands you can consult [the docs](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax).

*Summary*
- Please use grid for the job as required.
- Grid is very powerful, even with the basic simple commands above.

## CSS
### Rem and Em
*Rem*
- This is a way to steer clear of fixed sizes (eg, `px`), and have your webpage sizes based on ratios.
- `rem`s are the more global version. Your base value is the size of the font in your `html` (the *_root_* of the document). This is 16px by default. 
- This means that you can set all sizes relative to this size, and then if you decide to resize things on your website, you can change this *_root_* size, and all of the other sizes will change as well. 
- This means that they will hold their relative sizes, and that they don't go out of sync (the border sizes will change with the font size and the margin size, etc).
*Em* 
- `em`s are a similar concept, but they are ratios based around the size of the font in the _*current*_ element. 
- This _could_ be the same size font as the root, but need not be.
- This means that you can design a particular element, and have it exist as a self-contained set of values - values that make internal sense. 
- This element could be moved around and retain it's internal consistency.
- Here is some code to have a play with:
```css
* {
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html {
    font-size: 50px;
}

body {
    margin: 200px; 
    font-size: 20px;
}

h1 {
    /* font-size: 80px; */
    font-size: 3rem;
}

h2 {
    /* font-size: 30px; */
    font-size: 2rem;
}

h3 {
    /* font-size: 16px; */
    font-size: 1rem;
}

button {
    border: 0.1em solid;
    padding: 1em;
    font-size: 1.5rem;
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./styles.css">
    <title>Rem and Em</title>
</head>
<body>
    <h1> 
        This is My Big Heading 
    </h1>
    <h2>
        Subheading of Sorts
    </h2>
    <h3>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.

        The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.
        
        A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the information age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker. Many popular word processors use this format as a placeholder. Some examples are Pages or Microsoft Word.
    </h3>
    <button>
        <div> 
            Click Me
        </div>
    </button>
</body>
</html>
```
