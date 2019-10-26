// ========= IMPORT LIBRARIES ==============
const express = require('express');
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
const authRoutes = require('./routes/auth')

// =========== SET UP MIDDLEWARE ===================
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');  // for CORS management
	next();
  });

// ============ DB INFO =====================
mongoose.connect('mongodb://localhost/loaner_app_v1', { useNewUrlParser: true, useUnifiedTopology: true });

seedDB();

// ============ PASSPORT CONFIG =====================
require('./services/passport')

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
