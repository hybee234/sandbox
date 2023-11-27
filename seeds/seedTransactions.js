const { Transaction } = require('../models');

const transactionData = [
    //Bin 28, 2008 (1)
    {  // Wine In
        cost: '23.70',
        qty_in: '12',
        // qty_out: NULL,
        transaction_date: '2012-01-01',
        notes: 'Dan Murphys',
        user_id: 1,
        vintage_id: 1,
    },
    {  // Wine In
        cost: '15.00',
        qty_in: '12',
        // qty_out: NULL,
        transaction_date: '2012-06-06',
        notes: 'Dan Murphys',
        user_id: 1,
        vintage_id: 1,
    },
    {  // Wine In
        cost: '15.00',
        qty_in: '12',
        // qty_out: NULL,
        transaction_date: '2012-06-29',
        notes: 'Dan Murphys',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2014-10-24',
        notes: 'Drinking beautifully, try again in 3 years',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2015-04-27',
        notes: 'Home',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2015-10-30',
        notes: 'Secondary characters showing, aged',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2015-12-01',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2016-01-21',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2016-05-08',
        notes: 'Mothers day',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2016-06-10',
        notes: 'With friends, brilliant',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2016-08-09',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2016-08-24',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2016-12-15',
        notes: 'Sarah birthday',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2017-03-13',
        notes: 'Home',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2017-05-14',
        notes: 'Mothers day',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2017-08-28',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2018-06-30',
        notes: 'drinking beautifully, allow a day of airing',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2019-02-16',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2019-11-06',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2020-06-13',
        //notes: '',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2021-10-24',
        notes: 'Mum and Bro Birthday',
        user_id: 1,
        vintage_id: 1,
    },
    { // Check Balance
        // cost: NULL,
        // qty_in: NULL,
        // qty_out: NULL,
        transaction_date: '2022-01-30',
        notes: 'Check Balance - correc',
        user_id: 1,
        vintage_id: 1,
    },
    { // Wine Out
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2023-04-01',
        notes: 'Son birthday - gorgeous, aged, complex',
        user_id: 1,
        vintage_id: 1,
    },

    //Bin 28, 2010 (2)
    {
        cost: '22',
        qty_in: '12',
        // qty_out: NULL,
        transaction_date: '2014-04-23',
        notes: 'TWE',
        user_id: 1,
        vintage_id: 2,
    },
    {
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2014-05-15',
        notes: 'Bold, generous fruits, well structured, needs time',
        user_id: 1,
        vintage_id: 2,
    },
    {
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2018-02-14',
        notes: 'Primary fruits softening, try again in 2 years',
        user_id: 1,
        vintage_id: 2,
    },

    // Bin 389, 2008 (3)    
    {
        cost: '48.5',
        qty_in: '6',
        // qty_out: NULL,
        transaction_date: '2012-06-25',
        notes: 'Dan Murphys',
        user_id: 2,
        vintage_id: 3,
    },
    {
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2014-01-01',
        notes: 'Young, tight, big, needs plenty of time to age. Try again in 5 years',
        user_id: 1,
        vintage_id: 3,
    },

    // Bin 389, 2017 (4)
    {
        cost: '85',
        qty_in: '6',
        // qty_out: NULL,
        transaction_date: '2020-06-25',
        notes: 'Dan Murphys',
        user_id: 1,
        vintage_id: 4,
    },
    {
        // cost: NULL,
        // qty_in: NULL,
        qty_out: '1',
        transaction_date: '2021-03-25',
        notes: 'HT enjoyed',
        user_id: 1,
        vintage_id: 3,
    },


    // Bin 707, 2008 (5) 

    {
        cost: '180',
        qty_in: '2',
        // qty_out: NULL,
        transaction_date: '2011-04-25',
        notes: 'David Jones',
        user_id: 2,
        vintage_id: 5,
    },
    {
        cost: '200',
        qty_in: '1',
        //qty_out: '1',
        transaction_date: '2011-07-10',
        notes: 'Cellar Door',
        user_id: 1,
        vintage_id: 5,
    },


    // Bin 707, 2010 (6) 

    {
        cost: '280',
        qty_in: '2',
        // qty_out: NULL,
        transaction_date: '2013-04-22',
        notes: 'TWE',
        user_id: 2,
        vintage_id: 6,
    },

    // Grange, 2004 (7)

    {
        cost: '440',
        qty_in: '1',
        // qty_out: NULL,
        transaction_date: '2012-05-04',
        notes: 'Winemarket',
        user_id: 1,
        vintage_id: 7,
    },    
    {
        cost: '600',
        qty_in: '1',
        // qty_out: NULL,
        transaction_date: '2013-01-26',
        notes: 'Dan Murphys',
        user_id: 1,
        vintage_id: 7,
    },
    {
        //cost: '440',
        //qty_in: '1',
        // qty_out: NULL,
        transaction_date: '2022-06-12',
        notes: 'Balance check - correct',
        user_id: 1,
        vintage_id: 7,
    },
    // Grange, 2008 (8)

    {
        cost: '588',
        qty_in: '6',
        // qty_out: NULL,
        transaction_date: '2013-04-22',
        notes: 'TWE',
        user_id: 1,
        vintage_id: 8,
    },  

    // Grange, 2012 (9)

    {
        cost: '645',
        qty_in: '2',
        // qty_out: NULL,
        transaction_date: '2016-10-21',
        notes: 'TWE - RRP $850',
        user_id: 1,
        vintage_id: 9,
    },  
    {
        cost: '1600',
        qty_in: '1',
        // qty_out: NULL,
        transaction_date: '2016-11-04',
        notes: 'TWE - Bought with Aevum Decanter',
        user_id: 1,
        vintage_id: 9,
    },  
    // Grange, 2017 (10)

    {
        cost: '1800',
        qty_in: '1',
        // qty_out: NULL,
        transaction_date: '2022-06-09',
        notes: 'TWE - RRP (750mL) $950',
        user_id: 1,
        vintage_id: 10,
    },  

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
