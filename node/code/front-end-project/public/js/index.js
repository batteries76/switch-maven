console.log("index.js is running")

// This was just here to hit the API and get some feedback. It doesn't do much, just tells us that our front-end is able to contect and get a meaningful response from our API. As you can see, it's just hitting my root route.
axios.get('http://localhost:3000/')
    .then(function(response) {
        console.log("OUR API!")
        console.log(response.data)
    })
    .catch(function(err) {
        console.log(err)
    })

<<<<<<< HEAD
// This is a function that will hit the API to get all the records, and then render them.It's being put into a function so that I can call it anytime I need to rerender the albums.
const renderAllRecords = function() {
    // We need to make a get request to get all of the albums.
    axios.get('http://localhost:3000/albums')
        .then(function(response) {
            // Once we have the albums, I want to find that point..
            const recordsAnchor = document.querySelector('#all-records-section')
            // And then delete all the old children to be certain the old data is cleared away.
            while (recordsAnchor.children.length > 0) {
                recordsAnchor.removeChild(recordsAnchor.firstChild)
            }
            // Putting the response data into a better named variable
            const allRecords = response.data
            // We want to loop through the records, make a new element, and then append it to the anchor point (set up in the HTML) 
            allRecords.forEach(function(record) {
                // Here we use a function (defined below) to build that new div, and save into a variable. We send in the data as the argument here.
                const newRecordElement = renderOneRecord(record)
                // just a log to check our progress
                console.log(newRecordElement)
                // Here we are appending that created element to the anchor point
                recordsAnchor.appendChild(newRecordElement)
            })

        })
        .catch(function(err) {
            console.log(err)
        })
}

// We need this function to run when the page first starts up. This is the only function that's called without being attached to an event. 
renderAllRecords()

// This is the function we are going to use to handle the form submission
function handleSubmitAlbum(event) {
    // This line stops the normal HTML functioning of the form, and we will take over and submit
    event.preventDefault()
    // This is left in to show a little bit of the 'event' object, and just for people to have a look if they like.
    console.log(event.target)
    // I put this in to get a bit of simple feedback that the form is being handled here as expected.
    console.log("Submitting the ALBUM form")
    // This is an inbuilt constructor function that retrieves all the data out of the form 
    var formData = new FormData(albumForm)
    // I nicked this line of code to pull the data out of that helpful but overblown FormData object, and put it in a more normal object. It seems to work well.
    const plainFormData = Object.fromEntries(formData.entries())
    // Just some feedback console.logs
    console.log("PLAIN FORM DATA")
    console.log(plainFormData)
    // Now we have to post the data to our API. You can see it there as the second argument.
    axios.post('http://localhost:3000/albums', plainFormData)
        .then(function (albumAdded) {
            // Feedback for us.
            console.log(`album with title "${albumAdded.title}" was ADDED`)
            // Calling the following function that will render all the records again. We have added an album, so we need to rerender the albums + the new one. This is defined later.
            renderAllRecords()
        })
        .then(function(err) {
            console.log(err)
        })
}
// We are finding the form for the new album.
const albumForm = document.querySelector('#new-album-form')
// Here we are attaching the function above to the 'submit' event of the albumForm object.
albumForm.addEventListener('submit', handleSubmitAlbum)

// This is the function to build a new element
const renderOneRecord = function(record) {
    // This one is going to be the outer div, also often known as a wrapper
    const newWrapperElement = document.createElement('div')
    // The following three elements are the pieces of the internal structure. They don't need to be divs, and you can be more creative. I made them divs because that would automatically provide a new line and present a little better for now.
    const newTitleElement = document.createElement('div')
    const newArtistElement = document.createElement('div')
    const newDeleteButton = document.createElement('div')
    // Some inner HTML for these, the data of which comes in as an argument (as you can see when this is called)
    newTitleElement.innerHTML = `<h2> ${record.title} </h2>`
    newArtistElement.innerHTML = `<h3> ${record.artist} </h3>`
    // I'm setting the id of this element using the record id. This could create a problem later (ids need to be unique, and we might want the same trick with edit), but for now keeping it simple (and we can skirt that problem easily enough).
    newDeleteButton.innerHTML = `<div id=${record._id}> x </div>`
    // I want an event listener attached to this 'delete button' (which as you can see is really just a div with an 'x' in it). We want to be able to click this 'x' and delete the record.
    newDeleteButton.addEventListener('click', function(e) {
        // A bit of feedback that the delete is running on the click event
        console.log(`Hit the delete for ${e.target.id}`)
        // Now we are calling a function to delete the item and then rerender all the albums. We need to send the id through so that we can delete the correct item.
        deleteElementAndRerender(e.target.id)
    })
    // Append all those items we built to the wrapper element..
    newWrapperElement.append(newTitleElement)
    newWrapperElement.append(newArtistElement)
    newWrapperElement.append(newDeleteButton)
    // ..and send that wrapped package out of the function as a return value.
    return newWrapperElement
}

// This is the delete and rerender function.
const deleteElementAndRerender = function(id) {
    // Axios call using delete to our delete route. We are sending the id in the path, and that will be dealt with as a param on the backend. For details see the snippet with the delet route and the params practice route.
    axios.delete(`http://localhost:3000/albums/${id}`)
        .then(function(deletedItem) {
            // Some logged feedback
            console.log(`the item ${deletedItem.title} was DELETED`)
            // Another call to our render function. 
            renderAllRecords()
        })
}
// This existed from the start to show the async nature of JS.
console.log("END OF FILE?")
=======
// console.log(something)

axios.get('http://localhost:3000/players')
    .then(function(response) {
        console.log("OUR API!")
        console.log(response.data)

        const apiDataPlace = document.querySelector('#our-api-data')

        const bballPlayerArray = response.data

        bballPlayerArray.forEach(function(bballPlayer) {
            const newDivElement = document.createElement('div')
            newDivElement.innerHTML = bballPlayer.firstn
            apiDataPlace.appendChild(newDivElement)
        })
    })
    .catch(function(err) {
        console.log(err)
    })

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function(response) {
        console.log("second axios back")
        console.log(response.data)
    })

axios.get('https://swapi.dev/api/people/1')
    .then(function(response) {
        console.log("third axios back (STAR WARS)")
        console.log(response.data)
        const faveStarWars = document.querySelector('#star-wars-favourite')
        faveStarWars.innerHTML = response.data.name
    })


axios.get('http://swapi.dev/api/starships/12/')
    .then(function(response) {
        console.log("fourth axios back")
        console.log(response.data)
    })

console.log("END OF FILE?")
>>>>>>> 1a9fdb18db096f243a6ab82febb6d269890b68e5
