const campaignService = require("../services/campaignService")
const cloudinary = require("../utils/cloudinary")


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

  const getOneCandidate = async  (req,res) =>
  {
    const candidate = await campaignService.getOneCandidate(req.params.candidateId)
    res.send({ status: "OK", data: candidate });
  }

  const getOnePosition = async (req,res) =>
  {
    const position = await campaignService.getOnePosition(req.params.positionId)
    res.send({status: "OK", data : position})
  }
  
  const getPositionsForCampaing = async (req,res) =>
  {
    const positions = await campaignService.getPositionsForCampaing(req.params.campaignId)
    res.send({status : "OK",data : positions})
  }

  const getCandidateByCampaingANDPosition = async (req,res) =>
  {
    let cID = req.params.campaignId
    let pID = req.params.positionId
    const candidates = await campaignService.getCandidateByCampaingANDPosition(cID,pID)
    res.send({status: "OK", data: candidates})
  }
  const createNewCampaign = async (req, res) => 
  {
    const { body } = req
 
    const newCampaign = 
    {
    name: body.name,
    description: body.description
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
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      let idP = req.params.positionId
      let idCM = req.params.campaignId
      let newCandidate = {
        name: req.body.name,
        description: req.body.description ,
        image: result.secure_url,
        idcloudinary: result.public_id
      };
      const createdCandidate = await campaignService.createNewCandidate(newCandidate)
      let idCA = createdCandidate.id
      console.log(idCA,idP,idCM)
      const createdCandidature = await campaignService.createNewCandidature(idCA,idP,idCM)
      res.status(201).send({status: createdCandidate.message + " " + createdCandidature});
    } catch (err) 
    {
      console.log(err);
    }
  }

  const updateOneCandidate = async (req,res) =>
  {
    try {
      const candidateU = await campaignService.getOneCandidate(req.params.candidateId)
      await cloudinary.uploader.destroy(candidateU[0].idcloudinary);
      const result = await cloudinary.uploader.upload(req.file.path);
      const data = {
        name: req.body.name || candidateU.name,
        description: req.body.description || candidateU.description,
        image: result.secure_url  || candidateU.image,
        idcloudinary: result.public_id || candidateU.idcloudinary
      };
      const updatedCandidate = await campaignService.updateOneCandidate(req.params.candidateId,data,{new: true})
      res.status(201).send({status: updatedCandidate});
    } catch (err) 
    {
      console.log(err);
    }
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
  
  const deleteOneCandidate = async (req,res) =>
  {
    const deletedCandidate = await campaignService.deleteOneCandidate(req.params.candidateId)
    res.status(201).send({ status: deletedCandidate });
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
    updateOneCampaign,
    updateOneCandidate,
    deleteOneCampaign,
    deleteOnePosition,
    deleteOneCandidate,
    
  };