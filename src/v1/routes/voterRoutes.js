const express = require("express");
const voterController = require("../../controllers/voterController")

const {validateVoter} = require('../../middlewares/validators/voterValidator');

const router = express.Router();

router.get("/", voterController.getAllVoters);

router.get("/:voterId", voterController.getOneVoter);

router.post("/", validateVoter , voterController.createNewVoter);

router.put("/:voterId", validateVoter , voterController.updateOneVoter);

router.delete("/:voterId", voterController.deleteOneVoter);

module.exports = router;
