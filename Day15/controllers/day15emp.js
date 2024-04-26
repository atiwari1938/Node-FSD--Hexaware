const express = require('express');
const router = express.Router();
const employeeController = require('../services/employee.service');

// Route to fetch all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await employeeController.getAllEmployees();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to fetch employees by department
router.get('/employees/:departmentId', async (req, res) => {
    const departmentId = req.params.departmentId;
    try {
        const employees = await employeeController.getEmployeesByDept(departmentId);
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
