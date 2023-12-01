const { Wine } = require('../models'); 

// Checks if the Wine ID in the request exists on the table, if it does then the request can progress, if not then respond with an error
const checkWineId = async (req, res, next) => {
    const wineIdExist = await Wine.findOne ({where: {wine_id: req.params.wine_id}})
        if (wineIdExist) {
            // console.log ("WineIDExists!")
            next();

        } else {   
            // console.log ("WineID Does not Exist!")             
            res.status(400).json({ message: `Wine_ID ${req.params.wine_id} does not exist, please try again` }); // Status 400 = Bad Request
        return;
    }
};

module.exports = checkWineId;
