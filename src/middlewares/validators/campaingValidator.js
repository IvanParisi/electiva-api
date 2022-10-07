const { check, validationResult } = require('express-validator');

exports.validateCampaign = 
[ 
    check("name")
    .isLength({min: 10,max: 45})
    .withMessage("The name must have minimum length of 10 and max length of 45")
    .trim(),

    check("description")
    .isLength({max: 250})
    .withMessage("The name must have max length of 250"),

    check("startDate")
    .isISO8601({strict: true})
    .withMessage("Invalid date"),

    check("endDate")
    .isISO8601({strict: true})
    .withMessage("Invalid date"),

    check("numberOfVoters")
    .isInt({ min: 1 })
    .withMessage("Number of Voters invalid")

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