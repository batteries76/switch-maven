console.log('index for deploy is running')

const urlConfig = require('./constants')

axios.get(urlConfig.url.API_URL + '/')
    .then(function(res) {
        console.log(res.data)
    })
    .catch(function(err) {
        console.log(err)
    })
