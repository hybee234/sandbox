const { Wine } = require('../models');

const wineData = [
    //Penfolds (1)
    {
        wine_name: 'Bin 28',
        brand_id: 1,
    },
    {
        wine_name: 'Bin 389',
        brand_id: 1,
    },
    {
        wine_name: 'Bin 707',
        brand_id: 1,
    },
    {
        wine_name: 'Grange',
        brand_id: 1,
    },
    // Greenock creek (2)
    {
        wine_name: 'Apricot Block',
        brand_id: 2,
    },
    {
        wine_name: 'Seven Acre Shiraz',
        brand_id: 2,
    },
    {
        wine_name: 'Roennfeldt Road Cabernet Sauvignon',
        brand_id: 2,
    },
    {
        wine_name: 'Roennfeldt Road Shiraz',
        brand_id: 2,
    },
    // Bass Phillip (3)
    {
        wine_name: 'Estate Chardonnay',
        brand_id: 3,
    },
    {
        wine_name: 'Estate Pinot Noir',
        brand_id: 3,
    },
    {
        wine_name: 'Premium Chardonnay',
        brand_id: 3,
    },
    {
        wine_name: 'Premium Pinot Noir',
        brand_id: 3,
    },
    {
        wine_name: 'Reserver Pinot Noir',
        brand_id: 3,
    },
    // Rockford (4)
    {
        wine_name: 'Basket Press',
        brand_id: 4,
    },
    {
        wine_name: 'Black Shiraz',
        brand_id: 4,
    },
    {
        wine_name: 'Rifle Range',
        brand_id: 4,
    },
];

const seedWines = () => Wine.bulkCreate(wineData);

module.exports = seedWines;
