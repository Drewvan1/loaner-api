// ========= IMPORT LIBRARIES ==============
const express = require('express');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// ========= IMPORT MODLES ================
require('./models/User');
require('./models/Loaner');
require('./models/Trip');
require('./models/Reservation')

const seedDB = require('./seeds');

// ============ IMPORT ROUTES =====================
const loanerRoutes = require('./routes/loaners')
const reservationRoutes = require('./routes/reservations')

// =========== SET UP MIDDLEWARE ===================
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');  // for CORS management
	next();
  });

// ============ DB INFO =====================
mongoose.connect('mongodb://localhost/loaner_app_v1', { useNewUrlParser: true, useUnifiedTopology: true });

seedDB();

// ============ PASSPORT SETUP =====================
const keys = require('./config/keys')
passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile , done) => console.log(accessToken, profile)
))


// ============ CONNECT ROUTES =====================
app.use(loanerRoutes)
app.use(reservationRoutes)





app.get('/', (req, res) => {
	res.send('we goooood.');
});

app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}))

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
	console.log('server up!');
});
