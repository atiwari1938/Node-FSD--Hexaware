const mysqlpool = require('../db/db');

// Add Employee
async function createEmp(name, departmentId) {
    try {
        const query = 'INSERT INTO employees (name, department_id) VALUES (?, ?)';
        const [results, fields] = await mysqlpool.query(query, [name, departmentId]);
        console.log('Employee created successfully.');
    } catch (error) {
        console.error('Error creating employee:', error);
    }
}

// Display Employees
async function displayEmp() {
    try {
        const query = 'SELECT * FROM employees';
        const [results, fields] = await mysqlpool.query(query);
        console.log('Employees:');
        results.forEach(employee => {
            console.log(`${employee.id} | ${employee.name} | Department: ${employee.department_id}`);
        });
    } catch (error) {
        console.error('Error fetching employees:', error);
    }
}

// Delete Employee
async function deleteEmployee(id) {
    try {
        const query = 'DELETE FROM employees WHERE id = ?';
        const [results, fields] = await mysqlpool.query(query, [id]);
        console.log('Employee deleted successfully.');
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
}

module.exports = { createEmp, displayEmp, deleteEmployee };
