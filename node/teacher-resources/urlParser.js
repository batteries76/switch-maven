console.log("url parser is running")

// Let's say I have a URL, like the string below..
const url1 = "http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2&key3=value3&name=smith&colour=green#SomewhereInTheDocument"

const url2 = "http://www.example.com"

const dealWithQueryPart = function(str) {
    queryAndFragObj = {}
    queryEtc = str
    fragAndQueryArr = queryEtc.split('#')
    // console.log(fragAndQueryArr)

    queryAndFragObj.fragment = fragAndQueryArr[1]
    queryStr = fragAndQueryArr[0]

    queryArr = queryStr.split('&')
    // console.log(queryArr)

    queryObj = {}
    queryArr.forEach(function(item) {
        // console.log(item)
        itemArr = item.split('=')
        // console.log(itemArr)
        // key = itemArr[0]
        queryObj[itemArr[0]] = itemArr[1]
    })
    // console.log(queryObj)

    queryAndFragObj.queryObj = queryObj
    return queryAndFragObj
}

const urlParser = function(urlStr) {
    urlObject = {}
    const splitString = urlStr.split('?')
    console.log(splitString)

    pathStr = splitString[0]
    if (splitString.length > 1) {
        const queryEtcObj = dealWithQueryPart(splitString[1])
        urlObject.queryAndFrag = queryEtcObj
    }
    // console.log(pathStr)

    pathStrSplit = pathStr.split('//')
    // console.log(pathStrSplit)

    urlObject.protocol = pathStrSplit[0]
    restOfPathArr = pathStrSplit[1].split('/')
    // console.log(restOfPathArr)

    urlObject.domain = restOfPathArr.shift()
    // console.log(restOfPathArr)
    // console.log(urlObject.domain)

    const slashesPutBackArr = restOfPathArr.map(function(pathBit) {
        return '/' + pathBit
    })

    urlObject.paths = slashesPutBackArr
    // console.log(urlObject)

    return urlObject
}

const parsedUrl1 = urlParser(url1)
console.log(parsedUrl1)

const parsedUrl2 = urlParser(url2)
console.log(parsedUrl2)

// And I want to write a function that can take any URL, and break it into it's constituent parts (which is a form of 'parsing'), so that it looks something like this (just an example)
// parsedUrl = {
//     protocol: 'http',
//     domain: 'www.example.com',
//     path: 'path/to/myfile.html',`
//     queryStrings: {
//         key1: 'value1'
//     }
// }

// So how do we parse any string that we are WebGLActiveInfo, and turn it into something where it's been broken down more.
// 1. We know the format for a URL from here: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL
// 2. Which means that we know that certain characters mean things in the context of a URL. 
// 3. Which means that we might be able to break up the string based on those characters.
// 4. The first thing to look at are string methods that might help us with this task.
// for example, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split shows us how to split a string apart at particular characters.
// Now we are getting somewhere. Spliting the string will create some other structures, and we can deal with those as we find them.
// 5. Once we have those pieces, we can start assigning them to our more useful object, whatever that might be, and return that structure.
// 6. Then we would want to test that our program can handle several different types of URL.

