const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')

const Reservation = mongoose.model('reservations')
const Loaner = mongoose.model('loaners')

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
router.post('/api/reservations/', (req, res) => {
    const { fullName, reqModel } = req.body
    
    // wonky - refactored front end to include entire loaner as reqModel variable
    const loaner = JSON.parse(reqModel)

// find loaner requested to reserve and update isReserved property to true
    Loaner.findById(loaner._id, (err, foundLoaner) => {
        if (foundLoaner.isOut || foundLoaner.isReserved) {
            res.sendStatus(400).send('This loaner cannot be reserved.')
        } else {
            foundLoaner.isReserved = true
            foundLoaner.save()

            const apptTime = new Date(req.body.apptTime)
            const createdBy = req.user.name
            const newReservation = { fullName, apptTime, createdBy, reqModel: loaner.identifiers.model, stockNum: loaner.identifiers.stockNum, loanerId: loaner._id }
        
// create new reservation
            Reservation.create(newReservation, (err, doc) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(400).send('Reservation was not saved.')
                } else {
                    // if successfully added to db push poll the db and push the json back to front-end
                    console.log('reservation added')
                    console.log(doc)
                }
            })
        }
    })    
})

router.put('/api/reservations', (req, res) => {
    const { reservationId, loanerId } = req.body

    Loaner.findByIdAndUpdate(loanerId, {$set:{isReserved:false}}, {new: true}, (err, doc) => {
        console.log(doc)
    })

    Reservation.findById(reservationId, (err, foundReservation) => {
        if (err) {
            res.sendStatus(400).send('Reservation was not deleted.')
        }
        
        foundReservation.isActive = false
        foundReservation.save((err, doc) => {
            if (err) {
                // error handler
            } else {
                Reservation.find({ isActive: true }, (err, activeReservations) => {
                    console.log('reservation deleted')
                    res.json(activeReservations)
                })
            }
        })
    })
})


module.exports = router