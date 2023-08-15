const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Satyam@2002",
    database: "CustomArtSystem"
})




module.exports = client;