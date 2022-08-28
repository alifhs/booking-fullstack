

const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {

    res.send('auth endpoint');
})

router.get('/register', (req, res)=> {
    res.send('this is auth reg endpoint');  
})


module.exports = router;