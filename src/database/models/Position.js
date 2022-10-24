const DB = require('../db');


const getPosition = async (id) =>
{
  const data = await DB.query(`SELECT name FROM position WHERE idposition = ${id} `)
  return data
}

 const getPositionsForCampaing = async(idCampaing) =>
{
    const data = await DB.query(`SELECT name FROM position P 
    INNER JOIN candidature C 
    ON p.idposition = c.positionFK AND c.campaignFK = ${idCampaing}`)

    return data
}
 

const createPosition = async (position) => 
{
  const result = await DB.query(
    `INSERT INTO electivadb.position(name)
    VALUES ("${position}")`
  );

  let message = 'Error in creating position';
  if (result.affectedRows) 
  {
    message = 'Position created successfully';
  }

  return message;
}

const deleteOnePosition = async (idPosition) =>
{
    const result = await DB.query(`DELETE FROM electivadb.position WHERE idposition=${idPosition}`)
    let message = 'Error in delete position'
    if(result.affectedRows){message = 'Position delete successfully'}
    return message
}

module.exports = {getPosition,createPosition,deleteOnePosition,getPositionsForCampaing}