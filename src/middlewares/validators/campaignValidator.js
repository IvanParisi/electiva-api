const { check, validationResult } = require('express-validator');

function createValidationFor(route) 
{
  switch (route) {
    case 'createDraftCampaing':
      return[
      check("name")
      .isLength({min: 10,max: 45})
      .withMessage("The name must have minimum length of 10 and max length of 45")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('Name must be alphabetic.')
      .trim(),

      check("description")
      .isLength({max: 250})
      .withMessage("The name must have max length of 250"),

      ]
      case 'updateCampaign':[
      check("startDate")
      .isISO8601({strict: true})
      .withMessage("Invalid date"),

      check("endDate")
      .isISO8601({strict: true})
      .withMessage("Invalid date"),

      check("numberOfVoters")
      .isInt({ min: 1 })
      .withMessage("Number of Voters invalid")
      ]
    case 'createPosition':
      return[
        check("name")
        .isLength({min: 5,max:45})
        .withMessage("The name must have minimum length of 5 and max length of 45")
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must be alphabetic.')
      ]

      case 'createCandidate':
        return[
          check("name")
        .isLength({min: 5,max:45})
        .withMessage("The name must have minimum length of 5 and max length of 45")
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must be alphabetic.'),
        check("description")
        .isLength({min: 5,max:45})
        .withMessage("The name must have minimum length of 5 and max length of 45")
        ]
      default:
        return[]
  }
}

function checkValidationResult (req, res, next)
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

module.exports = {createValidationFor,checkValidationResult}