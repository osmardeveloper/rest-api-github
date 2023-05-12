const axios = require('axios')

const HOSTNAME = 'https://api.github.com'
const USERNAME = 'google'
const path = `/users/${USERNAME}/repos`

axios.get(`${HOSTNAME}${path}`)
  .then((res) => {
    res.data.sort((x, y) => y.stargazers_count - x.stargazers_count);
    const mostPopular = res.data.slice(0,10)
    console.log(mostPopular)
  })
  .catch((err) => {
    console.log(err)
  })