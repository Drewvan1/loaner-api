// this file's purpose is to seed the database with loaners

// =========== Import Libraries =============
const mongoose = require('mongoose');

// ========== Import Modules =============
const Loaner = require('./models/Loaner');
const User = require('./models/User')
const Reservation = require('./models/Reservation')

const testUserData = [
    // email: String,
    // created: { type: Date, default: Date.now },
    // access: Number
    { email: 'admin@email.com', access: 1 },
    { email: 'advisor1@email.com', access: 2},
    { email: 'advisor2@email.com', access: 2},
    { email: 'advisor3@email.com', access: 2},
    { email: 'reception@email.com', access: 3}
]

const testReservationData = [
    // fullName: String,
    // // example: var myDate = new Date("2016-05-18T16:00:00Z");
    // apptTime: Date,
    // reqModel: String,
    // isActive: Boolean
    {fullName:'john smith', createdBy: 2, apptTime: new Date('2019-10-22T16:00:00'), reqModel: '', isActive: true},
    {fullName:'jane doe', createdBy: 59, apptTime: new Date('2019-10-22T17:00:00'), reqModel: 'Odyssey', isActive: false},
    {fullName:'drew vdp', createdBy: 14, apptTime: new Date('2019-10-23T09:00:00'), reqModel: 'Pilot', isActive: true},
    {fullName:'Nick Cage', createdBy: 14, apptTime: new Date('2019-10-20T11:00:00'), reqModel: 'Accord', isActive: true},
    {fullName:'dr. evil', createdBy: 2, apptTime: new Date('2019-10-24T12:45:00'), reqModel: '', isActive: true},
    {fullName:'Darwin Washington', createdBy: 74, apptTime: new Date('2019-10-21T07:30:00'), reqModel: 'Odyssey', isActive: true}
]


const testLoanerData = [
    {
        identifier: {
            stockNum: 12345,
            vin: '1234567890ABCDEFG',
            plate: 'VANS1',
            year: '2019',
            model: 'Pilot',
            trim: 'EX-L'
        },
        inFleet: true,
        enteredFleet: new Date,
        exitedFleet: new Date,
        isReserved: true,
        isOut: false
    },
    {
        identifier: {
            stockNum: 54321,
            vin: 'ABCDEFG1234567890',
            plate: 'VANS5',
            year: '2019',
            model: 'CR-V',
            trim: 'LX'
        },
        inFleet: false,
        enteredFleet: new Date,
        exitedFleet: new Date,
        isReserved: false,
        isOut: false
    },
    {
        identifier: {
            stockNum: 15423,
            vin: 'A1S2D3F4G5H6J7K84',
            plate: 'VANS9',
            year: '2019',
            model: 'CIVIC',
            trim: 'SPORT'
        },
        inFleet: true,
        enteredFleet: new Date,
        exitedFleet: new Date,
        isReserved: false,
        isOut: true
    }


]

function seedDb() {
    Reservation.remove({}, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('db cleared of Users');
            testReservationData.forEach( (seed) => {
                Reservation.create(seed, (err, user) => {
                    console.log('made it to user create')
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('made it to else')
                    }
                })
            })

        }

    })

};

module.exports = seedDb;


// ========== LOANER SCHEMA BELOW ==========
// created: { type: Date, default: Date.now },
// identifier: {
//     stockNum: Number,
//     vin: String,
//     plate: String,
//     year: String,
//     model: String,
//     trim: String
// },
// // need to figure out a way to designate availablilty

// // can i create an array of custom Trip objects? in a mongoose Schema?

// inFleet: Boolean,
// enteredFleet: Boolean,
// exitedFleet: Boolean,
// // automatic data
// // automaticData: {
// //     currMiles: Number,
// //     currFuel: Schema.Types.Decimal128,
// //     currLocation: {
// //         long: Schema.Types.Decimal128,
// //         lat: Schema.Types.Decimal128
// //     }
// // }
// isReserved: Boolean,
// isOut: Boolean
// });

