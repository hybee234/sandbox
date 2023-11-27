const { User } = require('../models');


const userData = [
    {
        name: 'He Man',
        email: 'heman@email.com',    
        password: '12345678',
    },  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
