capitaliser = (sentence) => {
    const wordArray = sentence.split(' ')
    const capsArray = wordArray.map((word, i) => {
        if (word.length < 3 && i !== 0) {
            return word
        }
        const letterArray = word.split('')
        const firstLetter = letterArray.shift()
        const upcase = firstLetter.toUpperCase()
        console.log(upcase)
        console.log(letterArray)
        const wordNew = upcase + letterArray.join('')
        return wordNew
    })
    return capsArray.join(' ')
}

const capsSentence = capitaliser("the big brown dog jumped over a log in a fog")
console.log(capsSentence)

const capsSentence2 = capitaliser("a big brown dog jumped over a log in a fog")
console.log(capsSentence2)