# Week 6, Day 2

## Topics
- position *
- design stuff *
- grid *
- grid areas etc *
- media queries *
- ems and rems *
- images *
- svgs *
- animations *
- css variables *
- scss
- more deployment *
- figma *
- browsers and polyfills *
- frameworks
- pseudo-selectors *
- css combinators *

## Intro to HTML

- HTML is simply text that the browser knows how to read (parse).
- There is the *metadata* that is located in the `<head>` tags.
- And there is the *visible* part of the HTML, located in the `<body>`
- The broswer represents the HTML as a *tree structure*. 
```html
<body>
    <header>
        <div class="icon">
            <p>icon</p>
        </div>
        <nav>
            <ul>
                <li> about </li>
                <li> projects </li>
                <li> contact </li>
                <li> social media </li>
            </ul>
        </nav>
    </header>
    <main>    
        <div class="element"></div>
        <div class="element"></div>
        <div class="element"></div>
    </main>
    <footer>
        <div class="wrapper">
            <div> &copy </div>
            <div> 2019 </div>
            <div> made by me </div>
        </div>
    </footer>
</body>
```
- Here the `body` is the top level 'node' of the tree.
- That parent node has three children, `header`, `main`, and `footer`. 
- Those three (`header`, `main`, `footer`) are on the same 'level' and are _'siblings'_ to each other
- The `header` element (or node) has two children: a `div` with the class of `icon`, and the `nav` element. 
- The `nav` element has only one child, as does the `div`. 
- The `ul` element has four `li` children. Each of these `li`s are siblings to each other. 
- The above HTML could be (partially) represented in a tree structure like this: 
```
body
  |
  |- header
  |    |- div (.icon)
  |    |   |- p
  |    |  
  |    |- nav
  |        |- ul
  |           |- li
  |           |- li
  |           |- li
  |           |- li
  |- main
  |    |- div
  .    .
  .    .
  .    .
```
- _Any_ type of tag can be used to be a child or parent of any other - although some combinations make more sense than others. 
- Indentation is *_extrememly_* important. 
- Also worth noting is that `index.html` is the document that a server will deliver by default. For this reason we tend to set up a new folder with a new `index.html` inside it. If we _'Go Live'_ with several folders around, including several index.html files, then odd things can happen. To keep things clean it's best to open a new VS Code instance containing only the project directory that you are working from. It's more work up front, but this is traded off against more work later.

## CSS
- We talked about setting up our project, and here we are adding CSS to the project in `styles.css`. 
- Our folder structure now looks like this: 
```
/my-project
      |- index.html
      |- styles.css
```
- We add our CSS in by including it into the metadata in the `<head>` section of the HTML:
```html
<link rel="stylesheet" href="./styles.css">
```
- We started by straight away writing our CSS into this file, although we could write it in the HTML (known as _in-line CSS_)
- There are two ways that we discussed of targetting an HTML element directly, with an id, or with a class. 
- An _id_ can only be used for one element in the HTML.
- To target it in the CSS we use a `#` prefix. Here is an example:
```css
#first-main {
    background-color: navy;
}
```
- A _class_ can be used on multiple elements within the HTML.
- We target a class with the `.` prefix. Here is an example:
```css
.first-list {
    background-color: darkcyan;
}
```
- Probably the central couple of features for understanding CSS are: 
1. That everything on the page by default wants to move up into the top left corner of the screen.
2. That there are three main types of elements: block, in-line, and in-line block. 
    - block: takes up the whole width of the page.
    - in-line: takes up only the width of the content (and cannot set width and height, amongst other things)
    - in-line block: is like in-line in terms of content, but can be adjusted like block.

[This StackO article explains this well](https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block)
- (I glossed over this second point in class when I talked of only two types of element. Both of the points above are simplified and summarised to form the basis of understanding CSS from a top level. It's more complex, but we can see the kinks as they arise.)
- We looked at a couple of basic CSS attributes: 
    - *background-color*: the colour of of the background to the element
    -  *margin*: how far things external to the element should stay away from the border of the element
    - *padding*: how far internal content should stay away from the border of the element
- For the last two we used the analogy of the room, with margin acting like spikes on the outside of the room, pushing things away, and padding being like spikes on the inside, keeping things inside the room away from the walls.
- CSS is frustrating. It takes a long time to become very good, but you can become capable in a short period of time if you take care with the basics. 
