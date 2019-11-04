const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //id: Schema.Types.ObjectId,
    googleId: String,
    email: String,
    name: String,
    // password: String, -> do we need if using OAuth
    created: { type: Date, default: Date.now },
    access: { type: Number, default: 5}  // relates to if can make reservations or appointments or only check in cars
});

mongoose.model('users', userSchema);

// example of profile object in keys.js