const router = require('express').Router();
const fetch = require('node-fetch');

router.route('/').get( async (req, res) => {
    const api_url = 'https://jsonplaceholder.typicode.com/users'
    const rest = await fetch(api_url)
    const data = await rest.json();
    res.json(data)
})
module.exports = router;