
const express = require('express');
const router = express.Router();
const { registerVehicle } = require('../controllers/vehiclecontroller');
const validateRegistration = require('../middlewares/vehicleRegistration');

// POST route for vehicle registration
router.post('/register', validateRegistration, registerVehicle);

module.exports = router;
