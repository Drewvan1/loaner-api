// this file's purpose is to seed the database with loaners

// =========== Import Libraries =============
const mongoose = require('mongoose');

// ========== Import Modules =============
const Loaner = require('./models/Loaner');
const User = require('./models/User')
const Reservation = require('./models/Reservation')

// ========== TEST DATA ==================
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


const testLoanerData = require('./loanerSeeds')


// ============ SEED DB WITH LOANERS ===============
// function seedDb() {
//     Loaner.remove({}, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('cleared loaners')
//             testLoanerData.forEach((seed) => {
//                 Loaner.create(seed, (err, loaner) => {
//                     if (err) {
//                         console.log('error', err)
//                     }
//                 })
//             })
//         }
//     })
// }


// ============ SEED DB WITH RESERVATIONS ===============
// function seedDb() {
//     Reservation.remove({}, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('db cleared of Users');
//             testReservationData.forEach( (seed) => {
//                 Reservation.create(seed, (err, user) => {
//                     console.log('made it to user create')
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         console.log('made it to else')
//                     }
//                 })
//             })
//         }
//     })
// };




// module.exports = seedDb;


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

