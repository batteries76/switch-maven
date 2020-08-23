# Week 7, Day 1

## CSS
### Position
- We talked about the default setting for CSS elements being `static`. In a way this means that no position has been set. 
- The default will be for the elements to move up the page into the top left corner, but keeping in mind the `block`, `inline` and `inline-block` aspects of each element.
- Now we are looking at ways to move the elements around away from this default or standard position (`static`).
- As with all of these things (and perhaps moreso in this instance) these are concepts that are hard to comprehend in theory, and that you need to tinker with to fully understand. 
- I will put some code at the bottom that you can use to investigate.
- As always, please come to me with any questions.
### Relative
- The first we looked at is *_relative_* position. The idea here is that you are moving the element, but relative to where it would have been in the normal _flow_ of the elements. 
- So if you put `position: relative;` on an element, and `top: 50px;`, you are moving it 50 pixels down away from where it would be positioned ordinarily.
- `left: 50px;` would move it right 50 pixels to the right, away from the left edge where the element would be in `static` mode. 
- `top`, `bottom`, `left`, and `right` are used to position the element.
- Once again, *_relative_* means relative to where the element would have been.
### Absolute
- *_Absolute_* position is like relative, but operates relative (yes, sorry) to the nearest _positioned_ parent. If there is no parent in that element's parental tree structure, it will be positioned relative to the body, the ultimate parent to any visible element.
- By default, any element within a parent will want to move to the top left corner. 
- If that parent has a position set on it (anything but the default, `static`), then this element can now be moved relative to its parent by adding the attribute `position: absolute`.
- The `top`, `bottom`, `left`, and `right` offsets are all in play again here.
### Fixed
- The easiest of the three that we discussed today. _Fixed_ position places that element relative to the body (using the same offsets), and does not move the element regardless of scrolling or any other non-fixed element.
- The element is taken completely out of the normal flow of CSS elements. 
- The typical use for this is in navigation menus. 

### Example code
- In the example code you can see a couple of instances of two classes being placed on one element, eg: 
```html
<div class="inner relative"></div>
```
- This is very useful when you need several elements to have the same class, but then distiguish some of these elements.
- We also saw an example of more fine-tuned targetting of elements using CSS (although not in the code below). For example:
```css
.electronics-wrap h1 {
    font-size: 90px;
}
```
- The above code will target only the `h1`s that are children of the `electronics-wrap` element.
- No other `h1` elements will be affected.

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./styles.css">
    <title>Position CSS</title>
</head>
<body>
    <div class="first">
        <div class="inner"></div>
        <div class="inner relative"></div>
        <div class="inner"></div>
    </div>
    <div class="second">
    </div>
    <div class="fourth">
        <div class="third">
            <div class="fifth">
            </div>
        </div>
    </div>
</body>
</html>
```
#### CSS
```css
* {
    margin: 0;
    padding: 0;
}

body {
    /* background-color: aquamarine; */
}

.first {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: brown;
    height: 200px;
    width: 100%;
}

.inner {
    background-color: aquamarine;
    height: 150px;
    width: 150px;
}

.second {
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: blue;
    height: 100vh;
    width: 30px;
}

.third {
    /* position: static; */
    background-color: blueviolet;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 3;
}

.fourth {
    position: relative;
    background-color: black;
    height: 1000px;
    width: 300px;
}

.fifth {
    height: 80px;
    width: 80px;
    background-color: blanchedalmond;
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 2;
}

.relative {
    position: relative;
    top: 50px;
    left: 50px;
    z-index: 1;
}
```

## Design Concepts

### TBD 