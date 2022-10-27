const DB = require('../db')

const createCandidature = async (idCA,idP,idCM) =>
{
    const result = await DB.query(`INSERT INTO candidature(candidateFK,positionFK,campaignFK)
    VALUES (${idCA},${idP},${idCM})`)

    let message = 'Error in create candidature'
    if(result.affectedRows) {message = 'Candidature create successfully with the id: '+ `${result.insertId}`}

    return message
}

module.exports = {createCandidature}