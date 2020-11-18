// Callback Challenges

// Problem 1
// Define a function that takes only one callback as an argument. Inside that function, call the callback with the string "hey!". 
// Now call that function you defined with a callback as an argument. Log out the argument that was sent to the callback.

// Problem 2
// Define a function that takes two arguments, one string argument and a callback. Inside this function, call the callback, and pass the string to the callback. 
// Call this function, and log out the argument sent to the callback.

// Problem 3
// Define a function that takes two numbers as arguments, and a callback. Multiply those number arguments and send them as the argument to the callback. 
// Call that function with a callback, and log out the argument provided. 

// Problem 4
// Define a function that takes an array argument and a callback. Inside the function, call the callback with the length of the array. Call this function and log out the argument in the callback.

// Problem 5
// Define a function that takes a number, a string, and a callback. Inside the function, call the callback with the string repeated as many times as the number argument. Eg, if the string is "apple", and the number is 3, then you would send as the argument to the callback "appleappleapple". 
// Now call this function with a callback, and log out the argument given to the callback.

// Problem 6
// Implement your own version of .forEach
// Define a function that takes a callback and provides the same functionality as the .forEach function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

// Problem 7
// Implement your own version of .map
// Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

// Problem 8
// Implement your own version of .filter
// Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

// Problem 9
// Implement your own version of .reduce
// Define a function that takes a callback and provides the same functionality as the .reduce function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

// Problem 10 
// Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"
// Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.
// Now call this function with a number and the object that you created as arguments, and store the result in a constant. Now work out how to get the string to display to the screen. 

// Problem 11
// Write a function that takes an array and one other argument. Inside this function, use a `.forEach` loop on the array to search through the array, and from your function return `true` if the item is in the array, and `false` if the item is not in the array. 
// Call this function and show that it is working.

// Problem 12
// Define a function that takes an array as an argument. The array given can be assumed to be an array of numbers. Inside your function, use a `.forEach` loop to look through the array. From your function return a new array that contains only the numbers from the array given as argument that are divisible by 2.
// Call this function and show that it is working.

// Problem 13
// Define a function that takes an array as an argument (that can be assumed to contain only strings). In the function use a `.forEach` loop to loop through the array. Return from your function an array that contains only strings that start with 'A'.
// Call this function and show that it is working.

// Problem 14
// Define a function that takes an array as an argument, and a string. In the function use a `.forEach` loop to loop through the array. From your function, return an array that contains each element in the original array concatenated with the string given as an argument. 
// Call this function and show that it is working.

// Problem 15
// Define a function that takes an array as an argument. In the function use a `.forEach` loop to loop through the array. From your function, return an array that contains every second element from the original array. You CANNOT use a counter in your code. To do this, use the secondary argument given to `.forEach`. You may need to look up the docs to see how to find this argument.
// Call this function and show that it is working.
