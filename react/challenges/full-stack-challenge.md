## Full-stack MERN Challenge

You can skip some of these steps if you are feeling confident, but I recommend following them through if you are just coming to terms with them all.

You can use React Router, or not. I think this challenge is more about async, data, and getting the full stack feel, but if you are keen, use RR. I am very happy for you to just make a React app without RR as any part of it though, and we can look at that later. That would keep it simpler, and you can concentrate on the aspects that relate to hooking up the data.

Please contact me for clarification about any aspect of this challenge.

I use 'record' throughout this challenge, so just replace it with whatever resource you are using.

1. Start a new React project. Think up some basic data to work with (something simple: books, etc, as we have done).
2. Start by storing the new data into state (three or four items) so that you have something to work with.
3. Have the data render to screen, so that you can see it in a list.
4. Put a touch of CSS on it to make it look at least ok. Flexbox your way to glory - it's a good tool to get in the toolbox.
5. Build a super minimal Express app, with a root route, and a route to send back all the records.
6. Now move the records from being hardcoded in state into your express app.
7. Make a `records.http` file and test that you can get back all the records from your '/records' route. Also test the root route.
8. Now in your react app, use `componentDidMount()` to get back all the data using an Axios request.
9. Test that the data renders to screen correctly again.
10. Now add a form somewhere on the page.
11. Turn the form into a 'controlled' form (coupling it with state) using a function (or several if that is better for your understanding).
12. Write a POST route into your Express app, and for now have it just update the array in-memory (and send the accepted data in the response). Do your best to follow convention here.
13. Write one validation to check a part of the data being saved in state (if you want a simple one, check that the year is four characters long and between 1600 and 2021). You can check this on input, or before the data is sent to the server.
14. Write the function to send the data to the server when the 'submit' is clicked. You can have the validation in here if you like. (If you are confused by the validations, you can skip for now - getting the data moving through the system is more important for now).
15. Now make sure that you are getting and rendering the updated data on the React side.
**CONGRATS! You are a full-stack dev!**

### Extensions:
1. Write a very simple Mongoose model for the record data (maybe add one validation).
2. Create a DB in Mongo to store the data.
3. Seed the DB with the array you have in-memory.
4. Rewrite the two key routes (get '/records'  and post '/records') so that they run out of the DB, instead of in-memory.
5. Check that things are working on the front end.
6. Write a patch and a delete route to handle these options.
7. Test the routes using records.http
8. Add a 'delete' button to each record on the front end.
9. Hook that button up to a function that will delete the record being clicked, and also make sure that the newly rendered data reflects this change.
**CONGRATS AGAIN! Now you are most definitely a full-stack MERN dev!**

### Super Extensions:
1. Add an 'edit' button to each resource.
2. Add a function to handle a this being clicked, and render a pre-filled form below the resource (or somewhere around it).
3. Use that form to update the resource through the DB, and also then reflect the update in the list.