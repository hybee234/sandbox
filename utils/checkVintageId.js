const { Vintage } = require('../models'); 

// Checks if the Vintage ID in the request exists on the table, if it does then the request can progress, if not then respond with an error
const checkVintageId = async (req, res, next) => {
    const vintageIDExists = await Vintage.findOne ({where: {vintage_id: req.params.vintage_id}})
        if (vintageIDExists) {
            next();
        } else {                      
            res.status(400).json({ message: `Vintage_id ${req.params.vintage_id} does not exist, please try again` }); // Status 400 = Bad Request
        return;
    }
};

module.exports = checkVintageId;
