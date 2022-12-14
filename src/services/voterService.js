const Voter = require('../database/models/Voter');

const getAllVoters = () => {
   const data = Voter.getAllVoters()
   return data;
  };
  
  const getOneVoter = (id) => {
    const data = Voter.getVoter(id)
    return data;
  };
  
  const getOneVoterByDNI = (dni) => {
    const data = Voter.getVoterByDNI(dni)
    return data;
  };
  
  const createNewVoter = (newVoter) => {
    const data = Voter.createVoter(newVoter)
    return data;
  };

/*  const createNewVoters = (newVoters) => {
    const data = Voter.createVoters(newVoters)
    return data;
  }; */

  const updateOneVoter = (id,voter) => 
  {
    const data = Voter.updateVoter(id,voter)
    return data;
  };
  
  const deleteOneVoter = (id) => 
  {
    const data = Voter.deleteOneVoter(id)
    return data;
  };
  
  module.exports = {
    getAllVoters,
    getOneVoter,
    createNewVoter,
    updateOneVoter,
    deleteOneVoter,
    getOneVoterByDNI,
  };