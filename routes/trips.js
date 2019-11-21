
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')

const Loaner = mongoose.model('loaners')
const Trip = mongoose.model('trips')


router.post('/api/trip/out', (req, res) => {
    // tripId, agreementNum, ro, customer
    // outVars: {outDate, OutMiles, outFuel, outDamage}
    
    // take in req.body
    const { agreementNum, customer, outDamage, outDate, outFuel, outMiles, ro, _id } = req.body
    
    const newTrip = { 
        agreementNum, 
        customer, 
        ro, 
        outVars: {
            outDamage,
            outDate: new Date(outDate),
            outFuel: parseInt(outFuel),
            outMiles: parseInt(outMiles)
        }
    }
    // find correct loaner
    Loaner.findById(_id, (err, loaner) => {
        loaner.trips.push(newTrip)
        loaner.isOut = true
        loaner.save((err, loaner) => {
            console.log(loaner)
        })
    })

    res.send('connected!')
})

router.post('/api/trip/in', (req, res) => {

    // function called with .last() that will return the last element of an array
    if (!Array.prototype.last){
        Array.prototype.last = function(){
            return this[this.length - 1];
        };
    };

    const { _id, inDate, inMiles, inFuel, inDamage } = req.body

    const endTrip = {
        inVars: {
            inDate: new Date(inDate),
            inMiles: parseInt(inMiles),
            inFuel: parseInt(inFuel),
            inDamage
        },
        isComplete: true
    }

    Loaner.findById(_id, (err, loaner) => {
        arrIndex = loaner.trips.length - 1
        
        preObj = loaner.trips.last()
        postObj = Object.assign(preObj, endTrip)

        loaner.trips[arrIndex] = postObj

        loaner.isOut = false

        loaner.save((err, loaner) => {
            if (err) {
                console.log(err)
            } else {
            console.log(loaner)
            }
        })
    })
    
    res.send('connected!')
})


module.exports = router

// =========== FROM MONGOOSE DOCUMENTATION ==========

// Finding a Subdocument
// Each subdocument has an _id by default. Mongoose document arrays have a special id method for searching a document array to find a document with a given _id.

// var doc = parent.children.id(_id);

// Adding Subdocs to Arrays
// MongooseArray methods such as push, unshift, addToSet, and others cast arguments to their proper types transparently:

// var Parent = mongoose.model('Parent');
// var parent = new Parent;

// // create a comment
// parent.children.push({ name: 'Liesl' });
// var subdoc = parent.children[0];
// console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
// subdoc.isNew; // true

// parent.save(function (err) {
//   if (err) return handleError(err)
//   console.log('Success!');
// });