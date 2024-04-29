// index.js

const express = require('express');
const vehicleRoutes = require('./routes/vehicleroutes');

const app = express();

// Parse JSON bodies
app.use(express.json());

// Define vehicle routes
app.use('/vehicles', vehicleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
