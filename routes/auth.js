// ========= IMPORT LIBRARIES ==============
const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}))

router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/loaners')
})

router.get('/api/current_user', (req, res) => {
    res.json(req.user)
})

router.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router