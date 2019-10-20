
const express = require('express');
const router = express.Router();


// use this route to get all inFleet loaners
router.get('/customers', (req, res) => {
    res.send('client connected')
})

router.post('/customers/:id', (req, res) => {
    res.send('client post route connected')
})

router.put('/customers/:id', (req, res) => {
    res.send('client put route connected')
})


module.exports = router