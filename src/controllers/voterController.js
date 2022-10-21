const voterService = require("../services/voterService")



  const getAllVoters = async (req, res) =>
  {
  const allVoters = await voterService.getAllVoters();
  res.send({ status: "OK", data: allVoters });
  };
  
  const getOneVoter = async (req, res) => 
  {
    const voter = await voterService.getOneVoter(req.params.voterId)
    res.send({ status: "OK", data: voter });
  };

  const getOneVoterByDNI = async (req,res) =>
  {
    const voter = await voterService.getOneVoterByDNI(req.params.voterDNI)
    res.send({ status: "OK", data: voter });
  }
  
  const createNewVoter = async (req, res) => 
  {
    
    const { body } = req;
 
    const newVoter = 
    {
    name: body.name,
    lastName: body.lastName,
    email: body.email,
    dni: body.dni,
    phone: body.phone,
    isActive: body.isActive
    };
    const createdVoter = await voterService.createNewVoter(newVoter)
    res.status(201).send({ status: createdVoter });
  };

/*    const createNewVoters = async (req, res) => 
  {
    
    //const { body } = req;
    //const newVoters = JSON.parse(body.voters)
    const createdVoters = await voterService.createNewVoters(req)
    res.status(201).send({ status: createdVoters });
  };  */
  
  const updateOneVoter = async (req, res) =>
  {
    const { body } = req;
 
    const updateVoter = 
    {
    name: body.name,
    lastName: body.lastName,
    email: body.email,
    dni: body.dni,
    phone: body.phone,
    isActive: body.isActive
    };

    const updatedVoter = await voterService.updateOneVoter(req.params.voterId,updateVoter)
    res.status(201).send({ status: updatedVoter });
  };
  
  const deleteOneVoter = async (req, res) => 
  {
    const deletedVoter = await voterService.deleteOneVoter(req.params.voterId)
    res.status(201).send({ status: deletedVoter });
  };
  
  module.exports = {
    getAllVoters,
    getOneVoter,
    createNewVoter,
    updateOneVoter,
    deleteOneVoter,
    getOneVoterByDNI,
  };