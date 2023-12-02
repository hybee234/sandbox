const { Transaction } = require('../models'); 

// Checks if the Transaction ID in the request exists on the table, if it does then the request can progress, if not then respond with an error
const checkTransactionId = async (req, res, next) => {
    const transactionIDExists = await Transaction.findOne ({where: {transaction_id: req.params.transaction_id}})
        if (transactionIDExists) {
            next();
        } else {                      
            res.status(400).json({ message: `Transaction_id ${req.params.transaction_id} does not exist, please try again` }); // Status 400 = Bad Request
        return;
    }
};

module.exports = checkTransactionId;
