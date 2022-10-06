const express = require("express");
const voterController = require("../../controllers/voterController")
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get("/", voterController.getAllVoters);

router.get("/:voterId", voterController.getOneVoter);

router.post("/", 
[ 
    check("name")
    .isLength({ min: 3 })
    .withMessage("The name must have minimum length of 3")
    .trim(),

    check("lastName")
    .isLength({ min: 3 })
    .withMessage("The last name must have minimum length of 3")
    .trim(),

    check("email")
    .isEmail()
    .withMessage("Invalid email eddress")
    .normalizeEmail(),

    check("dni")
    .isLength({min: 7,max: 9})
    .withMessage("The dni must have minimum length of 7 and max length 9")
    .isInt()
    .withMessage("The dni must be a int"),

    check("phone")
    .isLength({min: 10,max: 10})
    .withMessage("The phone must have a length of 10")
    .isInt()
    .withMessage("The dni must be a int"),
],
(req, res, next) => 
{
    const error = validationResult(req).formatWith(({ msg }) => msg);
    const hasError = !error.isEmpty();

    if (hasError) 
    {
      res.status(422).json({ error: error.array() });
    } else 
    {
      next();
    }
}
,  voterController.createNewVoter);

router.patch("/:voterId", voterController.updateOneVoter);

router.delete("/:voterId", voterController.deleteOneVoter);

module.exports = router;
