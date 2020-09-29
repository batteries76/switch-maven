// Loop Drills and Challenges

// In these drills you may need to print out some useful information to confirm that things are working as you hope. You can print something to see the loop running, and you also might like to print the 'counter' that you are using to track the loops.

// For the first 6 questions there are several ways to achieve the result. Any way you reach that is fine, and if you want to get creative, by all means do so.
// 1. Create a while loop that runs 9 times.
// 2. Create a while loop that runs 3 times.
// 3. Create a while loop that runs 22 times.
// 4. Create a while loop that runs 5 times and ends when the counter is equal to 0.
// 5. Create a while loop that runs 8 times and completes when the counter is equal to 16.
// 6. Create a while loop that runs 4 times and finishes when the counter is equal to -2.

// These are more explicit, and a little arithmetical
// 7. Create a while loop with a counter that starts at 0, ends when the counter is at 9, and runs three times.
// 8. Create a while loop with a counter that starts at 0, that ends when the counter is at 100, but that only runs 5 times.
// 9. Create a while loop with a counter that starts at 0, that ends when the counter is at -15, and runs only 3 times.
// 10. Create a while loop with a counter that starts at 14, that finishes at 49, and runs 5 times.

// More Loops
// 1. Set a variable of `num` to 5 (integer) then run this code:
// while (num == 5) {
//    console.log("hello world")
// } 
// What's happening here? Why isn't the loop stopping? What kind of loop is this? How can we stop this loop?
// 2. Assign 4 to the variable `num`. Run the same code in question 1 again. What's happening this time?
// 3. Now let's write our first working while loop. We need a counter and a way to increment the counter. Set a variable `counter` to equal 0. Create a while loop with the condition of that counter is less than 5. In the body of the while loop console.log("Counter is currently #{counter}"). After that we need to increment the counter by 1.
// If you're getting:
// "Counter is currently 0."
// "Counter is currently 1."
// "Counter is currently 2."
// "Counter is currently 3."
// "Counter is currently 4."
// You're done!
// 4. Change the while loop so that the final line thats printed is "Counter is currently 9."
// 5. If the counter is 3, instead of "Counter is currently 3", I want you to print "Special number 3!"
// 6. Create an array of five food items. Using a while loop iterate through the array and print each item to screen.
// 7. Keep the same while loop from above with one new addition: when the iteration gets to your favorite food (pick an item from those you added), and print that "<this> is my favorite", but instead of <this> use string interpolation to specify the item.
// 8. Create a counter and set it to 0. Generate a random integer between 1 and 100. Create an empty array with the variable name of `boolArray`. Create a while loop that loops until the counter is greater your randomly generated number. In the loop body, if the counter is odd push `false` into the array, and if the counter is even push `true` into the array.
// 9. Create an array variable named `codingLanguages` with four different programming languages in it. Call `.each` on this array, and print out each language from the array.
// 10. Repeat question 6 and 7 from the while challenges using `.each`. This time we won't need a counter, but use this inbuilt array method.

// In this next series of exercises, we’ll use loops to print out patterns of characters.
// First pattern:
// #
// ##
// ###
// ####
// #####
// Second pattern:
// #####
// ####
// ###
// ##
// #
// Third Pattern:
//     #
//    ##
//   ###
//  ####
// #####
// Fourth pattern: 
//     ##
//    ####
//   ######
//  ########
// ##########
// Final challenge:
// create a function called tree()
// tree() accepts one argument, height. 
// ex: tree(5)
// tree() should print out a tree with number of rows of ## equal to height. it should also have a “trunk”. Some examples:
// tree(5)
//     ##
//    ####
//   ######
//  ########
// ##########
//     ||
//  tree(2)
//     ##
//    ####
//     ||