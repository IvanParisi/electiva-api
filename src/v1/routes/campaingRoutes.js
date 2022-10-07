const express = require("express");
const campaignController = require("../../controllers/campaignController")

const {validateCampaign} = require('../../middlewares/validators/campaingValidator');

const router = express.Router();

router.get("/", campaignController.getAllCampaigns);

router.get("/:campaignId", campaignController.getOneCampaign);

router.post("/", validateCampaign , campaignController.createNewCampaign);

router.put("/:campaignId", validateCampaign , campaignController.updateOneCampaign);

router.delete("/:campaignId", campaignController.deleteOneCampaign);

module.exports = router;