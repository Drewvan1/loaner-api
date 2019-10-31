// ========= IMPORT LIBRARIES ==============
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const passport = require('passport')

const app = express();

// ========= RUN TO CREATE MODLES ================
require('./models/User');
require('./models/Loaner');
require('./models/Trip');
require('./models/Reservation')

// ========= IMPORT HELPERS ================
const keys = require('./config/keys')

// ============ IMPORT ROUTES =====================
const loanerRoutes = require('./routes/loaners')
const reservationRoutes = require('./routes/reservations')
const authRoutes = require('./routes/auth')

// =========== SET UP MIDDLEWARE ===================
app.use(bodyParser.urlencoded({extended: true}));

// ============ DB INFO =====================
mongoose.connect(keys.dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

// const seedDB = require('./seeds');
// seedDB();

// ============ PASSPORT CONFIG =====================
require('./services/passport')

// ============ ENABLE COOKIES =====================
app.use(
	// use cookieSession to manage cookies config
	cookieSession({
		// max age takes the param in milliseconds, this represents 30 days
		maxAge: 30*24*60*60*1000,
		keys: [keys.cookieKey]
	})
)
app.use(passport.initialize())
app.use(passport.session())

// ============ CONNECT ROUTES =====================
app.use(loanerRoutes)
app.use(reservationRoutes)
app.use(authRoutes)

app.get('/', (req, res) => {
	res.send('we goooood.');
});




const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
	console.log('server up!');
});
