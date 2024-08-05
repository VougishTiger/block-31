const client= require('./client.js');
const {createEmployees}= require('./employees.js');

const dropTables= async()=> {
  try {
    await client.query(`
      DROP TABLE employees; 
      `);
  } catch (error) {
    console.log(error);
  }
}

const createTables= async()=> {
try {
  await client.query(`
    CREATE TABLE employees (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      admin BOOLEAN NOT NULL
      );
    `);
} catch (error) {
  console.log(error)
}
}

const syncAndSeed= async()=> {
  await client.connect();
  console.log('connected');
  
  await dropTables();
  console.log("tables dropped!");

  await createTables();
  console.log('Tables Created!');

  await createEmployees("clark_kent", true );
  console.log('User Clark Created');

  await createEmployees("bruce_wayne", true );
  console.log('User Clark Created');

  await createEmployees("barry_allen", false );
  console.log('User Clark Created');

  await createEmployees("jonn_jonn", false );
  console.log('User Clark Created');

  await client.end();
  console.log("Connection Ended!");
}

syncAndSeed();


