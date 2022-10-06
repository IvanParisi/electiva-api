const DB = require('./db');

const getAllVoters = async () => {
    const data = await DB.query(`SELECT name, lastName, email, dni, phone,isActive
    FROM voter`);
    return data
  };

const getVoter = async (id) => {
    const data = await DB.query(`SELECT name, lastName, email, dni, phone,isActive
    FROM voter WHERE idvoter = ${id}`);
    return data
  };

const createVoter = async (voter) => 
{
  console.log(voter)
  const result = await DB.query(
    `INSERT INTO voter(name,lastName,email,dni,phone,isActive)
    VALUES ("${voter.name}", "${voter.lastName}", "${voter.email}", "${voter.dni}", "${voter.phone}",${voter.isActive})`
  );

  let message = 'Error in creating voter';
  if (result.affectedRows) {
    message = 'Voter created successfully';
  }

  return message;
}

module.exports = { getAllVoters,getVoter,createVoter }