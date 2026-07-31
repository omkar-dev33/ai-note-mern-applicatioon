import { body, validationResult } from "express-validator";

export const registerRules = [
  body("first_name")
  .trim()
  .notEmpty()
  .withMessage("First name is required"),

  body("last_name")
  .trim()
  .notEmpty()
  .withMessage("Last name is required"),

  body("email")
  .trim()
  .isEmail()
  .withMessage("Please enter valid email")
  .normalizeEmail(),

  body("password")
  .isLength({min:6})
  .withMessage("Password must be at least 6 characters"),

]

// Login validator

export const loginRules = [

  body("email")
  .trim()
  .isEmail()
  .withMessage("Please enter valid email")
  .normalizeEmail(),

  body("password")
  .isLength({min:6})
  .withMessage("Password must be at least 6 characters"),

  
]

export const Validator = (req,res,next)=> {
  const error = validationResult(req)

  if(!error.isEmpty()){

    return res.status(400).json({error:error.array(),

    })

  }
  next();
}









