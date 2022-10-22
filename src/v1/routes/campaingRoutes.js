const express = require("express");
const campaignController = require("../../controllers/campaignController")
const upload = require("../../utils/multer");


const {createValidationFor,checkValidationResult} = require('../../middlewares/validators/campaingValidator');

const router = express.Router();

/* G/P/U/D de Campaña */

router.get("/", campaignController.getAllCampaigns);
router.get("/:campaignId", campaignController.getOneCampaign);
router.post("/", createValidationFor("createCampaing"), checkValidationResult , campaignController.createNewCampaign);
router.put("/:campaignId", createValidationFor("createCampaing"), checkValidationResult ,campaignController.updateOneCampaign);
router.delete("/:campaignId", campaignController.deleteOneCampaign);

/* G/P/D de Posiciones */
router.get("/positions/:campaignId",campaignController.getPositionsForCampaing)
router.post("/positions",createValidationFor("createPosition"),checkValidationResult,campaignController.createNewPosition)
router.delete("/positions/:positionId",campaignController.deleteOnePosition)

/* G/P/ de Candidatos */

router.get("/candidate/:campaignId/:positionId",campaignController.getCandidateByCampaingANDPosition)
router.post("/candidate", upload.single("image"),campaignController.createNewCandidate)

module.exports = router;