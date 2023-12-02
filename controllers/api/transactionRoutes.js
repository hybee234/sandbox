const router = require('express').Router();
const { Transaction } = require('../../models'); 
const checkTransactionId = require('../../utils/checkTransactionId');
const checkVintageId = require('../../utils/checkVintageId');
const updateVintageTotal = require('../../utils/updateVintageTotal');

// Root: http://localhost:3001/api/vintage/

//-----------------------------------------------------------//
//- GET - All active Transactions under Selected Vintage ID -//
//-----------------------------------------------------------//

// API: http://localhost:3001/api/transaction/:vintage_id
// Example : http://localhost:3001/api/transaction/:1
// No JSON Body required

router.get('/:vintage_id', checkVintageId, async (req, res) => {
    try {
        // GET all active Transactions under target Vintage_ID
        const getActiveTransactions = await Transaction.findAll({
            //attributes: ['wine_id', 'wine_name', 'active_ind', 'brand_id'], // Specify the columns to fetch
            where: {
                active_ind: 1, // This will only include brands where active_ind is 1
                vintage_id: req.params.vintage_id  // where brand ID matches the brand ID in URL
            }
        });
        res.status(200).json(getActiveTransactions);
    } catch (err) {
        console.error(err);
        res.status(500).json(err); // Status 500 - Internal Server Error
    }
});

//----------------------------------------//
// POST - Add a Transaction to Vintage ID-//
//----------------------------------------//

// API: http://localhost:3001/api/transaction/:vintage_id
// Example : http://localhost:3001/api/transaction/6
// Example JSON Body
//  {
// 	    "cost": "23.70",
// 	    "transaction_date": "2012-01-01",
// 	    "qty_in": 12,
// 	    "qty_out": null,
// 	    "notes": "Dan Murphys",
// 	    "active_ind": 1,
// 	    "user_id": 1,
//  },
// Can have null qty_in, qty_out, cost, notes

router.post('/:vintage_id', checkVintageId, async (req, res) => {
    try {
        // POST new transaction under Vintage ID
        const postNewTransaction = await Transaction.create(
            {
                cost: req.body.cost,
                transaction_date: req.body.transaction_date,
                qty_in: req.body.qty_in,
                qty_out: req.body.qty_out,
                notes: req.body.notes,           
                active_ind: req.body.active_ind,
                user_id: req.body.user_id,
                vintage_id: req.params.vintage_id      
            });
        
        // Recalculate Vintage Total
        updateVintageTotal (req.params.vintage_id) 

        res.status(200).json(postNewTransaction);

    } catch (err) {
        res.status(400).json(err); // Status 400 - Bad Request
    }
});

//----------------------------------------------//
//- PUT - Update Transaction by Transaction ID -//
//----------------------------------------------//

// API: http://localhost:3001/api/transaction/:transaction_id
// Example : http://localhost:3001/api/tranasction/10
// Example JSON Body
//  {
// 	    "cost": null,
// 	    "transaction_date": "2023-01-01",
// 	    "qty_in": 12,
// 	    "qty_out": null,
// 	    "notes": "Test notes Murphys",
// 	    "active_ind": 1,
// 	    "user_id": 1
//  }

router.put('/:transaction_id', checkTransactionId, async (req, res) => {
    try {
        // PUT - Update Tranasction by Transaction ID
        const putTransaction = await Transaction.update( 
            {
                cost: req.body.cost,
                transaction_date: req.body.transaction_date,
                qty_in: req.body.qty_in,
                qty_out: req.body.qty_out,
                notes: req.body.notes,           
                active_ind: req.body.active_ind,
                user_id: req.body.user_id,
                vintage_id: req.params.vintage_id
            },
            {
                where: {  
                    transaction_id: req.params.transaction_id,                    
                },
            }        
        )

        // Recalculate Vintage Total
        
        // Find the Vintage_ID to pass through to be recalculated
        const transactionData = await Transaction.findOne ({        // Pull the transaction 
            attributes: ['vintage_id'],
            where: { transaction_id: req.params.transaction_id }
        });            
        const transaction = transactionData.get({ plain:true})      // Serialize the data            
        const vintage_id = transaction.vintage_id                   // Grab the Vintage_ID
        
        // Call updateVintage Total - passing through Vintage_ID
        updateVintageTotal (vintage_id)   

        res.status(200).json(`Transaction ID ${req.params.transaction_id} updated`); 
    } catch (err) {
        res.status(500).json(err); // Status 400 - Bad Request
    }        
});

//---------------------------------------------------//
//- PUT - Soft Delete Transaction by Transaction ID -//
//---------------------------------------------------//

// API: http://localhost:3001/api/transaction/inactivate/:transaction_id
// Example : http://localhost:3001/api/transaction/inactivate/10
// No JSON Body required.

router.put('/inactivate/:transaction_id', checkTransactionId, async (req, res) => {
    try {
        //PUT - Soft Delete Transaction by Transaction ID
        const inactivateTransaction = await Transaction.update( 
            {                
                active_ind: 0,      
            },
            {
                where: {  
                    transaction_id: req.params.transaction_id,                    
                },
            }        
        )

        // Recalculate Vintage Total
        
        // Find the Vintage_ID to pass through to be recalculated
        const transactionData = await Transaction.findOne ({        // Pull the transaction 
            attributes: ['vintage_id'],
            where: { transaction_id: req.params.transaction_id }
        });            
        const transaction = transactionData.get({ plain:true})      // Serialize the data            
        const vintage_id = transaction.vintage_id                   // Grab the Vintage_ID
        
        // Call updateVintage Total - passing through Vintage_ID
        updateVintageTotal (vintage_id)  

        res.status(200).json(`Transaction ID ${req.params.transaction_id} inactivated`);

    } catch (err) {
        res.status(500).json(err); 
    }        
});

module.exports = router;
