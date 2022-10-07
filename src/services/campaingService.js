const Campaign = require('../database/Campaign');

const getAllCampaigns = () => {
   const data = Campaign.getAllCampaigns()
   return data;
  };
  
  const getOneCampaign = (id) => {
    const data = Campaign.getCampaign(id)
    return data;
  };
  
  const createNewCampaign = (newCampaign) => 
  {
    const data = Campaign.createCampaign(newCampaign)
    return data;
  };
  
  const updateOneCampaign = (id,campaign) => 
  {
    const data = Campaign.updateCampaign(id,campaign)
    return data;
  };
  
  const deleteOneCampaign = (id) => 
  {
    const data = Campaign.deleteOneCampaign(id)
    return data;
  };
  
  module.exports = {
    getAllCampaigns,
    getOneCampaign,
    createNewCampaign,
    updateOneCampaign,
    deleteOneCampaign,
  };