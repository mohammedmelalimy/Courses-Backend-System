const { body } = require('express-validator'); 

const courseValidationRules = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 3 characters long'),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
];

module.exports = {
  courseValidationRules
};