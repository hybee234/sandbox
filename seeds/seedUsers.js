const { User } = require('../models');


const userData = [
    {
        name: 'HBK',
        email: 'HBK@email.com',    
        password: '$2b$10$x5pxTXvKctGbfXGbmk5nhOWvKGroeSgEh.cvSkpfPpGAfzYnCukhm',  //12345678
    },  
    {
        name: 'TJM',
        email: 'TJM@email.com',    
        password: '$2b$10$2QyIud4Ex1OvS8niZJ9HWuDT11c3ZZveRL1VuLY7Wwso2fMkpdu8a',  //87654321
    },        
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
