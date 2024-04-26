const fs = require('fs');
const path = require('path');

// Middleware function to log request details
const logRequest = (req, res, next) => {
    const logData = `${new Date().toString()} - ${req.method} ${req.url}\n`;

    // Define the full path to the userLogs.txt file
    const logFilePath = path.join(__dirname, 'userLogs.txt');

    // Append logData to userLogs.txt file
    fs.appendFile(logFilePath, logData, (err) => {
        if (err) {
            console.error('Error writing to userLogs.txt:', err);
        }
    });

    next();
};

module.exports = logRequest;
