const Employee = require('../models/employee.model');

// Function to fetch all employees
async function getAllEmployees() {
    try {
        const employees = await Employee.findAll();
        return employees;
    } catch (error) {
        throw new Error('Error fetching all employees: ' + error.message);
    }
}

// Function to fetch employees by department
async function getEmployeesByDept(departmentId) {
    try {
        const employees = await Employee.findAll({ where: { department_id: departmentId } });
        return employees;
    } catch (error) {
        throw new Error('Error fetching employees by department: ' + error.message);
    }
}

module.exports = { getAllEmployees, getEmployeesByDept };
