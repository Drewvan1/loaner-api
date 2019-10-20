const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    createdBy: Number,
    fullName: String,
    // example: var myDate = new Date("2016-05-18T16:00:00Z");
    apptTime: Date,
    reqModel: { type: String, default: 'No Pref' },
    isActive: Boolean
});

//userSchema.plugin(passportLocalMongoose);  // originally had this after the User constant declaration, which had the result of not attaching the passportLocalMongoose functionality on User

const Reservation = mongoose.model('reservations', reservationSchema);

module.exports = Reservation;