const { Brand } = require('../models'); 

// Checks if the Brand ID in the request exists on the table, if it does then the request can progress, if not then respond with an error
const checkBrandId = async (req, res, next) => {
    const brandIdExist = await Brand.findOne ({where: {brand_id: req.params.brand_id}})
        if (brandIdExist) {
            next();
        } else {              
            res.status(400).json({ message: `Brand_ID ${req.params.brand_id} does not exist, please try again` }); // Status 400 = Bad Request
        return;
    }
};

module.exports = checkBrandId;
