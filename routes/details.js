const router = require('express').Router();
const fetch = require('node-fetch');

router.route('/').get( async (req, res) => {
    try{
        const api_url = 'https://jsonplaceholder.typicode.com/users'
        const rest = await fetch(api_url)
        const data = await rest.json();
        return res.status(200).json({
            success: true, data
        })
    }catch (e){
        return res.status(500).json({
            message: 'Error', error: e.message
        })
    }
    
})
module.exports = router;