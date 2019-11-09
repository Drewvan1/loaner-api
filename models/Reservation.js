const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    createdBy: String,
    fullName: String,
    // example: var myDate = new Date("2016-05-18T16:00:00Z");
    apptTime: Date,
    reqModel: { type: String, default: 'No Pref' },
    isActive: { type: Boolean, default: true},
    // add relationship to user -> each reservation will "belong" to particular user that created it
    _user: { type: mongoose.Schema.Types.ObjectId , ref: 'User'}
    // additional fields -> toDelete: Date, 
});

mongoose.model('reservations', reservationSchema);