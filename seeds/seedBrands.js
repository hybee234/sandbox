const { Brand } = require('../models');

const brandData = [
  {
    brand_name: 'Penfolds',
    active_ind: '1',
  },
  {
    brand_name: 'Greenock Creek',
    active_ind: '1',
  },
  {
    brand_name: 'Bass Phillip',
    active_ind: '1',
  },
  {
    brand_name: 'Rockford',
    active_ind: '1',
  },
  {
    brand_name: 'Torbrek',
    active_ind: '0',
  },
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;
