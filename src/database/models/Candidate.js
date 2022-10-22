const DB = require('../db')

const getCandidateByCampaingANDPosition = async (cID,pID) =>
{
  const data = await DB.query(`SELECT name,description,image FROM candidate A 
  INNER JOIN candidature C 
  ON a.idcandidate = c.candidateFK AND c.positionFK = ${pID} AND c.campaignFK = ${cID}`)

  return data
}

const createCandidate = async (candidate) =>
{
  const result = await DB.query(
        `INSERT INTO candidate(name,description,image)
        VALUES ("${candidate.name}", "${candidate.description}", "${candidate.image}")`
      );

  let message = 'Error in creating candidate';
  if (result.affectedRows) 
  {
    message = 'Candidate created successfully';
  }

  return message;
} 

module.exports = {getCandidateByCampaingANDPosition,createCandidate,}