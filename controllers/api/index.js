const router = require('express').Router();
const userRoutes = require('./userRoutes');
const brandRoutes = require('./brandRoutes')
const wineRoutes = require('./wineRoutes')     //HL wine

router.use('/users', userRoutes);
router.use('/brand', brandRoutes);
router.use('/wine', wineRoutes);    //HL wine

module.exports = router;


