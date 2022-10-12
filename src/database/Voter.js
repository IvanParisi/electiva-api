const { json } = require('express');
const DB = require('./db');

const getAllVoters = async () => 
{
    const data = await DB.query(`SELECT idvoter,name, lastName, email, dni, phone,isActive
    FROM voter`);
    return data
}

const getVoter = async (id) => 
{
    const data = await DB.query(`SELECT name, lastName, email, dni, phone,isActive
    FROM voter WHERE idvoter = ${id}`);
    return data
}

const getVoterByDNI = async (dni) => 
{
    const data = await DB.query(`SELECT name, lastName, email, dni, phone,isActive
    FROM voter WHERE dni = ${dni}`);
    return data
}

const createVoter = async (voter) => 
{
  const result = await DB.query(
    `INSERT INTO voter(name,lastName,email,dni,phone,isActive)
    VALUES ("${voter.name}", "${voter.lastName}", "${voter.email}", "${voter.dni}", "${voter.phone}",${voter.isActive})`
  );

  let message = 'Error in creating voter';
  if (result.affectedRows) 
  {
    message = 'Voter created successfully';
  }

  return message;
}

/* const createVoters = async (voters) =>
{
  
  console.log(voters)
  const sql = `INSERT INTO voter (name,lastName,email,dni,phone,isActive) VALUES ?`
  const result = await DB.query(sql,[voters])
  let message = 'Error in creating voters';

  if (result.affectedRows) 
  {
    message = 'Number of voters created successfully ' + result.affectedRows;
  }

  return message

} */

const updateVoter = async (id,voter) => 
{
  const result = await DB.query(`UPDATE voter 
  SET name="${voter.name}", lastName="${voter.lastName}", email="${voter.email}", 
  dni="${voter.dni}", phone="${voter.phone}", isActive=${voter.isActive}
  WHERE idvoter=${id}`)

  let message = 'Error in updated voter';
  if (result.affectedRows) 
  {
    message = 'Voter updated successfully';
  }

  return message
}

const deleteOneVoter = async (id) =>
{
  const result = await DB.query(`DELETE FROM voter WHERE idvoter=${id}`)
  let message = 'Error in delete voter'
  if(result.affectedRows){message = 'Voter delete successfully'}
  return message
}

module.exports = { getAllVoters,getVoter,createVoter,updateVoter,deleteOneVoter,getVoterByDNI}