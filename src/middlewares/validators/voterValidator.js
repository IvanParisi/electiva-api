const { check, validationResult } = require('express-validator');

exports.validateVoter = 
[ 
    check("name")
    .isLength({ min: 3 ,max: 80})
    .withMessage("The name must have minimum length of 3 and max length of 80")
    .isString()
    .withMessage("The name only have letters")
    .trim(),

    check("lastName")
    .isLength({ min: 3 ,max: 80})
    .withMessage("The last name must have minimum length of 3 and max length of 80")
    .isString()
    .withMessage("The last name only have letters")
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