

const { body } = require('express-validator');

const validateRegistration = [
    body('ownerName').notEmpty().withMessage('Owner name is required'),
    body('contactNumber')
        .matches(/^\d{10}$/) 
        .withMessage('Contact number must be a 10-digit number'),
    body('vehicleModel').notEmpty().withMessage('Vehicle model is required'),
    body('registrationNumber')
        .matches(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/)
        .withMessage('Invalid registration number format'),
    body('vehicleColor').notEmpty().withMessage('Vehicle color is required'),
];

module.exports = validateRegistration;
