const mongoose = require('mongoose');


const loanerSchema = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    identifiers: {
        stockNum: String,
        vin: String,
        plate: String,
        year: String,
        model: String,
        trim: String,
        color: String
    },
    // need to figure out a way to designate availablilty

    // can i create an array of custom Trip objects? in a mongoose Schema?
    // see YelpCamp example.  see relationship between Campgrounds and Comments


    inFleet: {type: Boolean, default: true},
    enteredFleet: Date,
    exitedFleet: Date,
    // automatic data
    // automaticData: {
    //     currMiles: Number,
    //     currFuel: Schema.Types.Decimal128,
    //     currLocation: {
    //         long: Schema.Types.Decimal128,
    //         lat: Schema.Types.Decimal128
    //     }
    // }
    isReserved: {type: Boolean, default: false},
    isOut: {type: Boolean, default: false}
});

const Loaner = mongoose.model('loaners', loanerSchema);

module.exports = Loaner;