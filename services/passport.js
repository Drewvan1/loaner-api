// ========= IMPORT LIBRARIES ==============
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

// ========= IMPORT USER OBJECT SCHEMA ==============
const User = mongoose.model('users')

// passing function into serializeUser function
// user variable is the user receieved from the db from the passport.use callback
// user.id variable is not the googleId but rather the mongodb object root id for that user
passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then((user) => done(null, user))
		.catch(err => console.log(err))
})


// ============ PASSPORT SETUP =====================
const keys = require('../config/keys')
passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'  // relative path, if running through proxy need to add another key-value pair of 'proxy: true'
	}, 
	(accessToken, refreshToken, profile , done) => {
		// search database for googleId contained in the profile, if there return user, if not create user and return
		User.findOne({googleId: profile.id})
			.then(existingUser => {
				if (existingUser) {
					done(null, existingUser)
				} else {
					new User({googleId: profile.id, email: profile.emails[0].value, name: `${profile.name.givenName} ${profile.name.familyName[0]}`})
						.save()
						.then(user => done(null, user))
				}
			})
			.catch(err => console.log(err))
	}
))

