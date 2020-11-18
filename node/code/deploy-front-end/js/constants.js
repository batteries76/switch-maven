const prod = {
    url: {
        API_URL: ''
    }
}

const dev = {
    url: {
        API_URL: 'http://localhost:3000'
    }
}

export const urlConfig = (process.env.NODE_ENV === 'development') ? dev : prod