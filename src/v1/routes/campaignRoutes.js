const express = require("express");
const campaignController = require("../../controllers/campaignController")
const upload = require("../../utils/multer");


const {createValidationFor,checkValidationResult} = require('../../middlewares/validators/campaignValidator');

const router = express.Router();

/* G/P/U/D de Campaña */

router.get("/", campaignController.getAllCampaigns);
router.get("/:campaignId", campaignController.getOneCampaign);
router.post("/", createValidationFor("createDraftCampaing"), checkValidationResult , campaignController.createNewCampaign);
router.patch("/:campaignId", createValidationFor("updateCampaign"), checkValidationResult ,campaignController.updateOneCampaign);
router.delete("/:campaignId", campaignController.deleteOneCampaign);

/* G/P/D de Posiciones */
router.get("/positions/one/:positionId",campaignController.getOnePosition)
router.get("/positions/:campaignId",campaignController.getPositionsForCampaing)
router.post("/positions",createValidationFor("createPosition"),checkValidationResult,campaignController.createNewPosition)
router.delete("/positions/:positionId",campaignController.deleteOnePosition)

/* G/P/U/D de Candidatos */

router.get("/candidate/:candidateId", campaignController.getOneCandidate)
router.get("/candidate/:campaignId/:positionId",campaignController.getCandidateByCampaingANDPosition)
router.post("/candidate/:campaignId/:positionId", [upload.single("image"),createValidationFor("createCandidate"),checkValidationResult]
,campaignController.createNewCandidate)
router.put("/candidate/:candidateId",upload.single("image"), campaignController.updateOneCandidate)
router.delete("/candidate/:candidateId",  campaignController.deleteOneCandidate)

module.exports = router;