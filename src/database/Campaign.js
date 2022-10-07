const DB = require('./db');

const getAllCampaigns = async () => 
{
    const data = await DB.query(`SELECT idcampaign,name,description, startDate, endDate
    , autoStart,numberOfVoters
    FROM campaign`);
    return data
};

const getCampaign = async (id) =>
{
    const data = await DB.query(`SELECT idcampaign,name,description, startDate, endDate
    , autoStart,numberOfVoters
    FROM campaign WHERE idcampaign = ${id} `)
    return data
}

const createCampaign = async (campaing) =>
{
    const result = await DB.query(`INSERT INTO campaign(name,description,startDate,endDate,autoStart,numberOfVoters)
    VALUES ("${campaing.name}", "${campaing.description}", 
    "${campaing.startDate}", "${campaing.endDate}", 
    "${campaing.autoStart}",${campaing.numberOfVoters})`)   

    let message = 'Error in creating campaign';
    if (result.affectedRows) 
    {
    message = 'Campaign created successfully';
    }

   return message;

}

const updateCampaign = async (id,campaing) =>
{
    const result = await DB.query(`UPDATE campaign 
    SET name="${campaing.name}", description="${campaing.description}", startDate="${campaing.startDate}", 
    endDate="${campaing.endDate}", autoStart="${campaing.autoStart}", numberOfVoters=${campaing.numberOfVoters}
    WHERE idcampaign=${id}`)

    let message = 'Error in updated campaign';
    if (result.affectedRows) 
    {
        message = 'Campaign updated successfully';
    }

    return message
}

const deleteOneCampaign = async (id) =>
{
    const result = await DB.query(`DELETE FROM campaign WHERE idcampaign=${id}`)
    let message = 'Error in delete campaign'
    if(result.affectedRows){message = 'Campaign delete successfully'}
    return message
}

module.exports = { getAllCampaigns,getCampaign,createCampaign,updateCampaign,deleteOneCampaign }