## Loops

### While Loop


### Summary
- A while loop can be thought of as a repeating `if` statement.
- It comes with a condition, which is checked each time the loop is to run. If the condition resolves to `true`, then the loop runs the code between the containing `{ }`.
- It takes the form:
```js
while(<condition>) {      
    // do this code..
}
```
- We need to be careful that we have a way to break the loop.
- We saw a few different ways of doing this:
    - With a changing counter that eventually makes the condition `false`.
    - With a `break` statement.
    - By checking some user input.