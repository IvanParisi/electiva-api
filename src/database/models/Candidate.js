const DB = require('../db')

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

module.exports = (createCandidate)