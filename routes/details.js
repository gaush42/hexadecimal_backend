const router = require('express').Router();
const fetch = require('node-fetch');

router.route('/').get( async (req, res) => {
    try{
        const api_url = 'https://jsonplaceholder.typicode.com/users'
        const rest = await fetch(api_url)
        const data = await rest.json();
        res.status(200).json(data)
    }catch (e){
        res.status(500).json(e)
    }
    
})
module.exports = router;