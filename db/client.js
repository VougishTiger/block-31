const { Client }= require('pg');
const {userName, passPin}= require('./credentials.cjs')
const client= new Client(process.env.DATABASE_URL || `postgres://${userName}:${passPin}@localhost:5432/acme_employees`);

module.exports= client;
 