const Voter = require('../database/Voter');

const getAllVoters = () => {
   const data = Voter.getAllVoters()
   return data;
  };
  
  const getOneVoter = (id) => {
    const data = Voter.getVoter(id)
    return data;
  };
  
  const createNewVoter = (newVoter) => {
    const data = Voter.createVoter(newVoter)
    return data;
  };
  
  const updateOneVoter = () => {
    return;
  };
  
  const deleteOneVoter = () => {
    return;
  };
  
  module.exports = {
    getAllVoters,
    getOneVoter,
    createNewVoter,
    updateOneVoter,
    deleteOneVoter,
  };