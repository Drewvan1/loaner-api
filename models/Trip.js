const mongoose = require('mongoose');


const tripSchema = new mongoose.Schema({
    
    AgreementNum: String,
    ro: String,
    customer: String,

    // out variables
    outVars: {
        outDate: Date,
        outMiles: Number,
        outFuel: Number
    },
    
    isComplete: Boolean,

    //in variables
    inVars: {
        inDate: Date,
        inMiles: Number,
        inFuel: Number,
        inDamage: String
    }
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;