const mongoose = require('mongoose');


const loanerSchema = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    identifiers: {
        stockNum: Number,
        vin: String,
        plate: String,
        year: String,
        model: String,
        trim: String
    },
    // need to figure out a way to designate availablilty

    // can i create an array of custom Trip objects? in a mongoose Schema?
    // see YelpCamp example.  see relationship between Campgrounds and Comments


    inFleet: Boolean,
    enteredFleet: Boolean,
    exitedFleet: Boolean,
    // automatic data
    // automaticData: {
    //     currMiles: Number,
    //     currFuel: Schema.Types.Decimal128,
    //     currLocation: {
    //         long: Schema.Types.Decimal128,
    //         lat: Schema.Types.Decimal128
    //     }
    // }
    isReserved: Boolean,
    isOut: Boolean
});

const Loaner = mongoose.model('loaners', loanerSchema);

module.exports = Loaner;