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

// Controller function to render employee list view
async function renderEmployeeListView(req, res) {
    try {
        // Fetch all employees
        const employees = await getAllEmployees();

        // Render the employee view template and pass the employees data
        res.render('employeeView', { employees });
    } catch (error) {
        console.error('Error rendering employee list view:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getAllEmployees, getEmployeesByDept, renderEmployeeListView };
