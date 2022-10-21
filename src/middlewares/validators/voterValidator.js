const { check, validationResult } = require('express-validator');

function createValidationFor(route) {

  switch (route) {
    case 'createVoter':
      return[
      check("name")
      .isLength({ min: 3 ,max: 80})
      .withMessage("The name must have minimum length of 3 and max length of 80")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('Name must be alphabetic.')
      .trim(),

      check("lastName")
      .isLength({ min: 3 ,max: 80})
      .withMessage("The last name must have minimum length of 3 and max length of 80")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('Name must be alphabetic.')
      .trim(),

      check("email")
      .isEmail()
      .withMessage("Invalid email eddress")
      .normalizeEmail(),

      check("dni")
      .isLength({min: 7,max: 9})
      .withMessage("The dni must have minimum length of 7 and max length of 9")
      .isInt()
      .withMessage("The dni must be a int"),

      check("phone")
      .isLength({min: 10,max: 12})
      .withMessage("The phone must have a length of 10")
      .isInt()
      .withMessage("The phone must be a int"),

      check("isActive")
      .isInt({ min: 0, max: 0 })
      .withMessage("isActive must be 1 or 0")]

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
      console.log("entro aca sin ningun tipo de sentido master ahre")
      next(); 
    }
}

module.exports = {createValidationFor,checkValidationResult}