const campaignService = require("../services/campaingService")
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

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
  
  const getPositionsForCampaing = async (req,res) =>
  {
    const positions = await campaignService.getPositionsForCampaing(req.params.campaignId)
    res.send({status : "OK",data : positions})
  }
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

  const createNewPosition = async (req,res) =>
  {
    const createdPosition = await campaignService.createNewPosition(req.body.name)
    res.status(201).send({ status: createdPosition });
  }  

  const createNewCandidate = async (req,res) =>
  {
    const {body} = req
    const result = await cloudinary.uploader.upload(req.file.path)
    let candidate = 
    {
      name: body.name,
      description: body.description,  
      image: result.secure_url
    }
    const createdCandidate = await campaignService.createNewCandidate(candidate)
    res.status(201).send({ status: createdCandidate });
  }

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

  const deleteOnePosition = async (req,res) =>
  {
    const deletedPosition = await campaignService.deleteOnePosition(req.params.positionId)
    res.status(201).send({ status: deletedPosition });
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