const router = require('express').Router();
const userRoutes = require('./userRoutes');
const brandRoutes = require('./brandRoutes')
const wineRoutes = require('./wineRoutes')     //HL wine
const vintageRoutes = require('./vintageRoutes') // HL Vintage
const transactionRoutes = require('./transactionRoutes') // HL transaction

router.use('/users', userRoutes);
router.use('/brand', brandRoutes);
router.use('/wine', wineRoutes);    //HL wine
router.use('/vintage', vintageRoutes);    //HL vintage
router.use('/transaction', transactionRoutes);    //HL transaction

module.exports = router;


