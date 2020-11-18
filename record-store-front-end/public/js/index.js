console.log("index.js is running!")

const url = 'http://localhost:4400'

axios.get('http://localhost:4400/')
    .then(function(res) {
        console.log(res.data)
    })
    .catch(function(err) {
        console.log(err)
    })

const editAndRerender = function(id) {

}

const renderAllRecords = function() {

    axios.get(`${url}/albums`)
        .then(function(res) {
            console.log(res.data)
            const recordsAttachPoint = document.querySelector('#records-attach-point')
            console.log(recordsAttachPoint)
            recordsAttachPoint.innerHTML = ""

            const albums = res.data
            albums.forEach(function(album) {
                const newDiv = document.createElement('div')
                newDiv.innerHTML = renderOneAlbum(album)

                recordsAttachPoint.append(newDiv)

                const deleteButtonX = document.querySelector(`#delete-x-${album._id}`)
                deleteButtonX.addEventListener('click', function(event) {
                    console.log("DELETE CLICKED")
                    console.log(event.target.id)
                    const albumId = event.target.id.split("-")
                    console.log(albumId)
                    deleteAndRerender(albumId[2])
                })

                const editButton = document.querySelector(`#edit-button-${album._id}`)
                const inputTitle = document.querySelector(`#title-edit-${album._id}`)
                const inputClose = document.querySelector(`#input-close-${album._id}`)
                const updateButton = document.querySelector(`#update-button-${album._id}`)
                const inputField = document.querySelector(`#input-field-${album._id}`)

                editButton.addEventListener('click', function(e) {
                    console.log("EDIT click")
                    editButton.classList.add('vanish')
                    inputTitle.classList.remove('vanish')
                })

                inputClose.addEventListener('click', function(e) {
                    console.log("INPUT click")
                    editButton.classList.remove('vanish')
                    inputTitle.classList.add('vanish')
                })

                updateButton.addEventListener('click', function(event) {
                    console.log("UPDATE CLICKED")
                    console.log(inputField.value)
                    axios.patch(`${url}/albums/${album._id}`, { title: inputField.value })
                        .then(function(album) {
                            console.log(album)
                            renderAllRecords()
                        })
                        .catch(function(err) {
                            console.log(err)
                        })
                    editButton.classList.remove('vanish')
                    inputTitle.classList.add('vanish')
                })

                console.log(deleteButtonX)
            })
        })
        .catch(function(err) {
            console.log(err)
        })

}

const deleteAndRerender = function(albumId) {

    axios.delete(`${url}/albums/${albumId}`)
        .then(function(album) {
            console.log("ITEM DELETED")
            console.log(album)
            renderAllRecords()
        })
        .catch(function(err) {
            console.log("ITEM NOT DELETED")
            console.log(err)
        })
}

const renderOneAlbum = function(albumData) {
    const newHTML = `
        <div class="album-title">
            <h2> ${albumData.title} </h2> 
            <p class="edit-button" id="edit-button-${albumData._id}"> edit? </p>
            <div class="edit-input vanish" id="title-edit-${albumData._id}">
                <input type="text" name="title" value="${albumData.title}" id="input-field-${albumData._id}">
                <p id="update-button-${albumData._id}"> update? </p>
                <p id="input-close-${albumData._id}"> x <p>
            </div>
        </div>
        <h3> ${albumData.artist} </h3>
        <p id="delete-x-${albumData._id}"> x </p>
    `
    return newHTML
}

renderAllRecords()
