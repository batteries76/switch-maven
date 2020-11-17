console.log("url parser is running")
​
// Let's say I have a URL, like the string below..
const url = "http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument"
​
// And I want to write a function that can take any URL, and break it into it's constituent parts (which is a form of 'parsing'), so that it looks something like this (just an example)
// parsedUrl = {
//     protocol: 'http',
//     domain: 'www.example.com',
//     path: 'path/to/myfile.html',
//     queryStrings: {
//         key1: 'value1'
//     }
// }
​
// So how do we parse any string that we are WebGLActiveInfo, and turn it into something where it's been broken down more.
// 1. We know the format for a URL from here: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL
// 2. Which means that we know that certain characters mean things in the context of a URL. 
// 3. Which means that we might be able to break up the string based on those characters.
// 4. The first thing to look at are string methods that might help us with this task.
// for example, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split shows us how to split a string apart at particular characters.
// Now we are getting somewhere. Spliting the string will create some other structures, and we can deal with those as we find them.
// 5. Once we have those pieces, we can start assigning them to our more useful object, whatever that might be, and return that structure.
// 6. Then we would want to test that our program can handle several different types of URL.
​
const urlParser = function(urlStr) {
​
}