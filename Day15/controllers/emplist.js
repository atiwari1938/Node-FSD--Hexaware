const express = require('express');
const router = express.Router();
const employeeService = require('../services/employee.service');

// Route for EmpList
router.get('/EmpList', async (req, res) => {
    try {
        // Parse the query string to extract the "deptno" parameter
        const deptno = req.query.deptno;

        // Fetch employee details based on the given deptno or all employee details if deptno is missing
        const employees = deptno ? await employeeService.getEmployeesByDept(deptno) : await employeeService.getAllEmployees();

        // Send the employee details as a response
        res.json(employees);
    } catch (error) {
        console.error('Error fetching employee details:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
