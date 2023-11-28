const { Wine } = require('../models');

const wineData = [
    //Penfolds (1)
    {
        wine_name: 'Bin 28',
        brand_id: 1,
        active_ind: 1,
    },
    {
        wine_name: 'Bin 389',
        brand_id: 1,
        active_ind: 1,
    },
    {
        wine_name: 'Bin 707',
        brand_id: 1,
        active_ind: 1,
    },
    {
        wine_name: 'Grange',
        brand_id: 1,
        active_ind: 1,
    },
    // Greenock creek (2)
    {
        wine_name: 'Apricot Block',
        brand_id: 2,
        active_ind: 1,
    },
    {
        wine_name: 'Seven Acre Shiraz',
        brand_id: 2,
        active_ind: 1,
    },
    {
        wine_name: 'Roennfeldt Road Cabernet Sauvignon',
        brand_id: 2,
        active_ind: 1,
    },
    {
        wine_name: 'Roennfeldt Road Shiraz',
        brand_id: 2,
        active_ind: 1,
    },
    // Bass Phillip (3)
    {
        wine_name: 'Estate Chardonnay',
        brand_id: 3,
        active_ind: 0,
    },
    {
        wine_name: 'Estate Pinot Noir',
        brand_id: 3,
        active_ind: 0,
    },
    {
        wine_name: 'Premium Chardonnay',
        brand_id: 3,
        active_ind: 0,
    },
    {
        wine_name: 'Premium Pinot Noir',
        brand_id: 3,
        active_ind: 0,
    },
    {
        wine_name: 'Reserver Pinot Noir',
        brand_id: 3,
        active_ind: 1,
    },
    // Rockford (4)
    {
        wine_name: 'Basket Press',
        active_ind: 1,
        brand_id: 4,
    },
    {
        wine_name: 'Black Shiraz',
        active_ind: 1,
        brand_id: 4,
    },
    {
        wine_name: 'Rifle Range',
        active_ind: 1,
        brand_id: 4,
        
    },
    // Torbreck (5)
    {
        wine_name: 'The Factor',
        active_ind: 0,
        brand_id: 5,
        
    },
];

const seedWines = () => Wine.bulkCreate(wineData);

module.exports = seedWines;
