// const fs = require('fs')

// console.log('file system code running')
// // console.log(fs)

// // fs.readFile takes the file path and the callback
// fs.readFile('hello.md', function(err, data) {

// 	// if there's an error, log it and return
// 	if (err) {
// 		console.error(err)
// 		return
// 	}

// 	// Print the string representation of the data
// 	console.log(data.toString())
// })

// const require = function(package) {
// 	if (package === 'fs') {

// 		const fs = {
// 			readFile: function(file, func) {
// 				console.log("readFile ran")
// 				const err = //hjdkhdhdkjh
// 				const data = //jdhjkdkdjhjkdh
// 				func(err, data)
// 			}
// 		}

// 		return fs
// 	}
// }

const stringAdder = function(string, callback) { // string is "Apple"
	const bigStr = `This is the original string: ${string}` // "This is the original string: Apple"
	callback("UUUUUUUUUUUUUUUU") // The callback is called, and passed bigStr as the argument
}

stringAdder("Apple", function(x) {
	console.log("IN THE stringAdder CALL")
	console.log(x)
})
