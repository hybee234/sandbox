const router = require('express').Router();
const userRoutes = require('./userRoutes');
const brandRoutes = require('./brandRoutes')

router.use('/users', userRoutes);
router.use('/brand', brandRoutes);

module.exports = router;


