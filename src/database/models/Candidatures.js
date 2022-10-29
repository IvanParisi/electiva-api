const DB = require('../db')

const createCandidature = async (idCA,idP,idCM) =>
{
    const result = await DB.query(`INSERT INTO candidature(candidateFK,positionFK,campaignFK)
    VALUES (${idCA},${idP},${idCM})`)

    let id = result.insertId
    let message = 'Error in create candidature'
    if(result.affectedRows) {message = 'Candidature create successfully'}

    return {message,id}
}

module.exports = {createCandidature}