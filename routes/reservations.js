
const express = require('express');
const router = express.Router();

const Reservation = require('../models/Reservation')

router.get('/api/reservations', (req, res) => {
    Reservation.find({ isActive: true }, (err, activeReservations) => {
        if (err) {
            console.log('ERROR', err);
        } else {
            res.json(activeReservations)
        }
    })
})

// should this be reservations/new -> reference RESTFUL routes
router.post('/api/reservations/new', (req, res) => {
    const { fullName, reqModel } = req.body
    // will need to alter the Date object when you figure out how the JSON will come over from the front-end
    const apptTime = new Date(req.body.apptTime)
    const createdBy = 2

    const newReservation = { fullName, apptTime, reqModel, createdBy }

    Reservation.create(newReservation, (err) => {
        if (err) {
            console.log(err)
        } else {
            // if successfully added to db push poll the db and push the json back to front-end
            console.log('reservation added')
        }
    })

    // will need to get rid of this when done testing
    res.send(`reservations post route connected accepting variables ${fullName}, ${apptTime}, and created by: ${createdBy}`)
})

router.put('/reservations/:id', (req, res) => {
    res.send('reservations put route connected')
})

module.exports = router