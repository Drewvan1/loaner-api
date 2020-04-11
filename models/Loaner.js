const mongoose = require('mongoose');
const TripSchema = require('./Trip')


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
    
    // subdocument of Trip objects
    trips: [TripSchema],

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
    
    // need to figure out a way to designate availablilty
    isReserved: {type: Boolean, default: false},
    isOut: {type: Boolean, default: false}
});

mongoose.model('loaners', loanerSchema);