const campaignService = require("../services/campaingService")

  const getAllCampaigns = async (req, res) => 
  {
    const allCampaigns = await campaignService.getAllCampaigns();
    res.send({ status: "OK", data: allCampaigns });
  };
  
  const getOneCampaign = async (req, res) => 
  {
    const campaign = await campaignService.getOneCampaign(req.params.campaignId)
    res.send({ status: "OK", data: campaign });
  };
  
  const createNewCampaign = async (req, res) => 
  {
    const { body } = req
 
    const newCampaign = 
    {
    name: body.name,
    description: body.description,
    startDate: body.startDate,
    endDate: body.endDate,
    autoStart: body.autoStart,
    numberOfVoters: body.numberOfVoters
    };

    const createdCampaign = await campaignService.createNewCampaign(newCampaign)
    res.status(201).send({ status: createdCampaign });
  };
  
  const updateOneCampaign = async (req, res) =>
  {
    const { body } = req
 
    const updateCampaign = 
    {
    name: body.name,
    description: body.description,
    startDate: body.startDate,
    endDate: body.endDate,
    autoStart: body.autoStart,
    numberOfVoters: body.numberOfVoters
    };
    const updatedCampaign = await campaignService.updateOneCampaign(req.params.campaignId,updateCampaign)
    res.status(201).send({ status: updatedCampaign });
  };
  
  const deleteOneCampaign = async (req, res) => 
  {
    const deletedCampaign = await campaignService.deleteOneCampaign(req.params.campaignId)
    res.status(201).send({ status: deletedCampaign });
  };
  
  module.exports = {
    getAllCampaigns,
    getOneCampaign,
    createNewCampaign,
    updateOneCampaign,
    deleteOneCampaign,
  };