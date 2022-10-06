const voterService = require("../services/voterService")



const getAllVoters = async (req, res) => {
  const allVoters = await voterService.getAllVoters();
  console.log(allVoters)
  res.send({ status: "OK", data: allVoters });
  };
  
  const getOneVoter = async (req, res) => {
    const voter = await voterService.getOneVoter(req.params.voterId)
    res.send({ status: "OK", data: voter });
  };
  
  const createNewVoter = async (req, res) => {
    const { body } = req;
 
    const newVoter = {
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
  
  const updateOneVoter = async (req, res) => {
    const updatedVoter = await voterService.updateOneVoter()
    res.send("Update an existing Voter");
  };
  
  const deleteOneVoter = async (req, res) => {
    await voterService.deleteOneVoter()
    res.send("Delete an existing Voter");
  };
  
  module.exports = {
    getAllVoters,
    getOneVoter,
    createNewVoter,
    updateOneVoter,
    deleteOneVoter,
  };