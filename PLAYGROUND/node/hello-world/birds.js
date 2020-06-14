var express = require('express')
var router = express.Router()

router.use(function timeLog (req, res,next ) {
    console.log('Time: ' , Date.now())
    next()
})

router.get('/', (req,res) => {
    res.send('Birds homge page')
})

router.get('/about', (req,res) => {
    res.send('About freaking birds')
})

module.exports = router