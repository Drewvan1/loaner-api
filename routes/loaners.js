
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')

const Loaner = mongoose.model('loaners')

// use this route to get all inFleet loaners
router.get('/api/loaners', (req, res) => {
    Loaner.find({ inFleet: true }, (err, inFleetLoaners) => {
        if (err) {
            console.log(err)
        } else {
            res.json(inFleetLoaners)
        }
    })
})

router.post('/api/loaners/new', (req, res) => {
    res.send('new loaners post route connected')
})

router.put('/loaners/:id', (req, res) => {
    res.send('loaners put route connected')
})


module.exports = router