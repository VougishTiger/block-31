const client= require('./client.js')

const createEmployees= async(name, admin)=> {
  try {
    await client.query(`
      INSERT INTO employees(name, admin)
      VALUES ('${name}', '${admin}');
      `)
  } catch (error) {
    console.log(error);
  }

}

module.exports= {
  createEmployees
}