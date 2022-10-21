const Campaign = require('../database/models/Campaign');
const Position = require('../database/models/Position')
const Candidate = require('../database/models/Candidate')

const getAllCampaigns = () => {
   const data = Campaign.getAllCampaigns()
   return data;
  };
  
  const getOneCampaign = (id) => {
    const data = Campaign.getCampaign(id)
    return data;
  };
  
  const getPositionsForCampaing = (id) =>
  {
    const data = Position.getPositionsForCampaing(id)
    return data
  }
  const createNewCampaign = (newCampaign) => 
  {
    const data = Campaign.createCampaign(newCampaign)
    return data;
  };

  const createNewPosition =  (newPosition) =>
  {
    const data = Position.createPosition(newPosition)
    return data
  }
  
  const createNewCandidate = (newCandidate) =>
  {
    const data = Candidate.createCandidate(newCandidate)
    return data
  }


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

  const deleteOnePosition = (id) =>
  {
    const data = Position.deleteOnePosition(id)
    return data
  }
  
  module.exports = {
    getAllCampaigns,
    getOneCampaign,
    getPositionsForCampaing,
    createNewCampaign,
    createNewPosition,
    createNewCandidate,
    updateOneCampaign,
    deleteOneCampaign,
    deleteOnePosition,
  };