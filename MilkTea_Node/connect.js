 const config = {
    user: 'sa',
    password: '123456',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'MilkTea',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}
module.exports = config