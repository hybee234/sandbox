const { Transaction } = require('../models');

const transactionData = [
    //Bin 28 2008 (1)
    {
        cost: '20',
        qty_in: '6',
        // qty_out: NULL,
        transaction_date: "2012-03-17",
        notes: 'TWE',
        user_id: 1,
        vintage_id: 1,
    },
    {
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: "2014-01-01",
        notes: 'Drinking beautifully, try again in 5 years',
        user_id: 1,
        vintage_id: 1,
    },

    // Bin 389 (2)

    // Bin 707 (3) 
    // Grange (4)
    // Apricot Block (5)
    // Seven Acre Shiraz (6)
    // Roennfeldt Road Cabernet Sauvignon (7)
    // Roennfeldt Road Shiraz (8)
    // Estate Chardonnay (9)
    // Estate Pinot Noir (10)
    // Premium Pinot Noir (11)
    // Premium Chardonnay (12)
    // Reserve Pinot Noir (13)
    // Backet Press (14)
    // Black Shiraz (15)
    // Rifle Range (16)

];

const seedTransactions = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransactions;
