const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('homepage', { layout: 'index', logged_in: req.session.logged_in });
});

// Login/Sign Up route
router.get('/auth', (req, res) => {
  res.render('auth', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;
