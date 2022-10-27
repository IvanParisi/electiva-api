const Campaign = require('../database/models/Campaign')
const Position = require('../database/models/Position')
const Candidate = require('../database/models/Candidate')
const Candidature = require('../database/models/Candidatures')

const getAllCampaigns = () => {
   const data = Campaign.getAllCampaigns()
   return data;
  };
  
  const getOneCampaign = (id) => {
    const data = Campaign.getCampaign(id)
    return data;
  };

  const getOneCandidate = (id) =>
  {
    const data = Candidate.getCandidate(id)
    return data
  }

  const getOnePosition = (id) =>
  {
    const data = Position.getPosition(id)
    return data
  }
  
  const getPositionsForCampaing = (id) =>
  {
    const data = Position.getPositionsForCampaing(id)
    return data
  }

  const getCandidateByCampaingANDPosition = (cID,pID) =>
  {
    const data = Candidate.getCandidateByCampaingANDPosition(cID,pID)
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

  const createNewCandidature = (idCA,idP,idCM) =>
  {
    const data = Candidature.createCandidature(idCA,idP,idCM)
    return data
  }

  const updateOneCandidate = (id,candidate) => 
  {
    const data = Candidate.updateCandidate(id,candidate)
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

  const deleteOneCandidate = (id) =>
  {
    const data = Candidate.deleteOneCandidate(id)
    return data
  }
  
  module.exports = {
    getAllCampaigns,
    getOneCampaign,
    getOnePosition,
    getOneCandidate,
    getPositionsForCampaing,
    getCandidateByCampaingANDPosition,
    createNewCampaign,
    createNewPosition,
    createNewCandidate,
    createNewCandidature,
    updateOneCampaign,
    updateOneCandidate,
    deleteOneCampaign,
    deleteOnePosition,
    deleteOneCandidate,
  };