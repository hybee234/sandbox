const { Brand } = require('../models');

const brandData = [
  {
    brand_name: 'Penfolds',
  },
  {
    brand_name: 'Greenock Creek',
  },
  {
    brand_name: 'Bass Phillip',
  },
  {
    brand_name: 'Rockford',
  },
  {
    brand_name: 'Torbrek',
  },
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;
