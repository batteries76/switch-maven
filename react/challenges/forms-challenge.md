## Forms Challenge

We are going to make a 'controlled input' form, meaning that it will be mirrored in state. I will give you the starter code for this challenge below.

1. Add all the inputs you need to send an album, being careful of the types and values.
2. Make a place for these inputs in state too.
3. Add functions to sync the value of the form and the state. You may want to keep this simple, and add several functions, one for each input.
4. Add a handler for submitting. For this you just need to add an onClick and a handler to the thing you are using as a button. You will just then add the new album to the array in state.

### Extension:
5. This is much trickier. See if you can work out a way to write a function that will be able to handle all the inputs (so that you don't have one function for each input, but one function to rule them all).
6. Write a new submission handler that will add this record into state using the changes you have made above.

JSX Form:
```jsx
<div className="form-area">
    <h2> Form 1 (album) </h2>
    <form>
        <input  type="text" 
                name="title"   
                value={this.state.title} 
                onChange={ this.changeHandler } 
        />
        <div> submit </div>
    </form>
</div>
```

changeHandler.js
```js
changeHandler = (event) => {
    this.setState({                 // is an async function
        title: event.target.value
    }, () => {                      // optional callback that runs after state is updated
        // console.log("Callback")
        // console.log(this.state.title) 
    })
    // console.log("Regular")
    // console.log(this.state.title) // hit before state is updated (due to async)
}
```

Part of `state`:
```js
   state = {
		// ...
        title: "",
		// ...
		
    }
```