const mongoose = require('mongoose');


const tripSchema = new mongoose.Schema({
    
    AgreementNum: String,
    ro: String,
    customer: String,

    // out variables
    outVars: {
        outDate: Date,
        outMiles: Number,
        outFuel: Number,
        outDamage: String
    },
    
    isComplete: {type: Boolean, default: false},

    //in variables
    inVars: {
        inDate: Date,
        inMiles: Number,
        inFuel: Number,
        inDamage: String
    }
});

mongoose.model('trips', tripSchema);