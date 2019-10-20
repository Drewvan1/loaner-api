
const express = require('express');
const router = express.Router();

const Reservation = require('../models/Reservation')


// use this route to get all inFleet loaners
router.get('/reservations', (req, res) => {
    Reservation.find({ isActive: true }, (err, activeReservations) => {
        if (err) {
            console.log('ERROR', err);
        } else {
            res.json(activeReservations)
        }
    })
})

router.post('/reservations/:id', (req, res) => {
    res.send('reservations post route connected')
})

router.put('/reservations/:id', (req, res) => {
    res.send('reservations put route connected')
})

module.exports = router