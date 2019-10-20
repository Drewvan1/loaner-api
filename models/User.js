const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    //id: Schema.Types.ObjectId,
    email: String,
    // password: String, -> do we need if using OAuth
    created: { type: Date, default: Date.now },
    access: Number  // relates to if can make reservations or appointments or only check in cars
});

//userSchema.plugin(passportLocalMongoose);  // originally had this after the User constant declaration, which had the result of not attaching the passportLocalMongoose functionality on User

const User = mongoose.model('users', userSchema);

module.exports = User

