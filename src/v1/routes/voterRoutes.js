const express = require("express");
const voterController = require("../../controllers/voterController")

const {createValidationFor,checkValidationResult} = require('../../middlewares/validators/voterValidator');

const router = express.Router();

router.get("/", voterController.getAllVoters);

router.get("/:voterId", voterController.getOneVoter);

router.get("/dni/:voterDNI", voterController.getOneVoterByDNI)

router.post("/", createValidationFor("createVoter"),checkValidationResult , voterController.createNewVoter);

/* router.post("/masivo",voterController.createNewVoters) */

router.put("/:voterId", createValidationFor("createVoter"),checkValidationResult , voterController.updateOneVoter);

router.delete("/:voterId", voterController.deleteOneVoter);

module.exports = router;
