
const express = require('express');
const router = express.Router();


// use this route to get all inFleet loaners
router.get('/loaners', (req, res) => {
    res.send('loaners connected')
})

router.post('/loaners/:id', (req, res) => {
    res.send('loaners post route connected')
})

router.put('/loaners/:id', (req, res) => {
    res.send('loaners put route connected')
})


module.exports = router