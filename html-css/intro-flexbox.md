# Week 6, Day 3

## CSS

### Flexbox
- Flexbox is a modern CSS tool. 
- Flexbox helps in creating structure within your page (more simply than in the past)
- Do *not* simply use Flexbox for everything because it is a new technology.
- Flexbox is most effective for:
    1. Aligning items in one direction
    2. Centring an item
- There are many possible uses for Flexbox, but you should ask yourself why you need it for the particular task at hand.
- The biggest issue for understanding Flexbox is that *the Flexbox commands are placed as attributes on the parent to the children that are being moved by the flex commands*.
- This means that if you have a `ul` and several `li`s, and you are hoping to arrange the `li`s in some way using Flexbox, then the commands to do that are attributes on the `ul`.
- Putting Flexbox on to an element makes these children `in-line` (technically `inline-block`, but I'm trying to keep things simple for now).
- Remember that because of the above point, you will need to give these items enough space to work within. By default they will only take up the space of the content, so if you want to create space, the 'wrapper' needs to be expanded to give them space to work within.
- Flexbox is very helpful when it comes to responsive design (websites that respond well to changes in the view size on different devices and browser sizing). It isn't a panacea, but a very good starting point. 
- There are many Flexbox commands, but the most useful are these:
    * `display: flex;`
        - This sets the element as the Flexbox wrapper, and applies the Flexbox commands to the children.
    * `flex-direction: row`
        - You can set the direction as `row` (across the screen) or `column` (up and down the screen).
    * `justify-content: space-around`
        - This sets the position and spacing of the flexed items in the same direction as the flex-direction.
        - More explicitly, if the flex direction is `row`, this will control the items left and right (across the page). If it is `column` it will control their position and spacing up and down the page.
        - There are many commands here. `flex start` pushes them up one end, and `flex-end` down to the other. You can space them evenly or push them right apart. 
    * `align-items: center` 
        - This command is the compliment to the previous, but aligns the content along the perpendicular axis. That is, it will push the content around in the opposite direction from the one in which they are lined up.
- There are many more commands, and different levels of complexity. My tendency is to see how far I can get with Flexbox first, and then make other interventions later.