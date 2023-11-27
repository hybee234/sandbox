const { User } = require('../models');


const userData = [
    {
        name: 'HB',
        email: 'HB@email.com',    
        password: '12345678',
    },  
    {
        name: 'HT',
        email: 'HT@email.com',    
        password: '87654321',
    },        
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
