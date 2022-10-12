const express = require("express");
const campaignController = require("../../controllers/campaignController")

const {createValidationFor,checkValidationResult} = require('../../middlewares/validators/campaingValidator');

const router = express.Router();

router.get("/", campaignController.getAllCampaigns);

router.get("/:campaignId", campaignController.getOneCampaign);

router.post("/", createValidationFor("createCampaing"), checkValidationResult , campaignController.createNewCampaign);

router.put("/:campaignId", createValidationFor("createCampaing"), checkValidationResult ,campaignController.updateOneCampaign);

router.delete("/:campaignId", campaignController.deleteOneCampaign);

module.exports = router;