const DB = require('../db')



const getCandidate = async (id) =>
{
  const data = await DB.query(`SELECT name, description, image,idcloudinary
    FROM candidate WHERE idcandidate = ${id}`);
    return data
}

const getCandidateByCampaingANDPosition = async (cID,pID) =>
{
  const data = await DB.query(`SELECT name,description,image,idcloudinary FROM candidate A 
  INNER JOIN candidature C 
  ON a.idcandidate = c.candidateFK AND c.positionFK = ${pID} AND c.campaignFK = ${cID}`)

  return data
}

const createCandidate = async (candidate) =>
{
  const result = await DB.query(
        `INSERT INTO candidate(name,description,image,idcloudinary)
        VALUES ("${candidate.name}", "${candidate.description}", "${candidate.image}","${candidate.idcloudinary}")`
      );
  let id = result.insertId
  let message = 'Error in creating candidate';
  if (result.affectedRows) 
  {
    message = 'Candidate created successfully';
  }

  return {message,id};
} 

const updateCandidate = async (id,candidate) =>
{
  const result = await DB.query(
    `UPDATE candidate set name="${candidate.name}",description = "${candidate.description}" ,image = "${candidate.image}"
    ,idcloudinary = "${candidate.idcloudinary}" where idcandidate=${id}`
  );

  let message = 'Error in update candidate';
  if (result.affectedRows) 
  {
  message = 'Candidate updated successfully';
  }

  return message;
}

const deleteOneCandidate = async (id) =>
{
  const result = await DB.query(`DELETE FROM candidate WHERE idcandidate=${id}`)
  let message = 'Error in delete candidate'
  if(result.affectedRows){message = 'Candidate delete successfully'}
  return message
}


module.exports = {getCandidate,getCandidateByCampaingANDPosition,createCandidate,updateCandidate,deleteOneCandidate}