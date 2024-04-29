// vehicleController.js

const { validationResult } = require('express-validator');

const registerVehicle = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log('Entered vehicle registration data:', req.body);

   
    res.status(200).json({ message: 'Vehicle registered successfully', data: req.body });
};

module.exports = { registerVehicle };
