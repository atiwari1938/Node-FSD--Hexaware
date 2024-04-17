const mysqlpool = require('../db/db');

// Insert
async function createDepartment(name){
    try {
        const query = 'INSERT INTO departments (name) VALUES (?)';
        const [results, fields] = await mysqlpool.query(query, [name]);
        console.log('Department created successfully.');
    } catch (error) {
        console.error('Error creating department:', error);
    }
}

// Display
async function displayDepartments() {
    try {
        const query = 'SELECT * FROM departments';
        const [results, fields] = await mysqlpool.query(query);
        console.log('Departments:');
        results.forEach(department => {
            console.log(`${department.id} | ${department.name}`);
        });
    } catch (error) {
        console.error('Error fetching departments:', error);
    }
}

// Delete
async function deleteDepartment(id){
    try {
        const query = 'DELETE FROM departments WHERE id = ?';
        const [results, fields] = await mysqlpool.query(query, [id]);
        if (results.affectedRows > 0) {
            console.log('Department deleted successfully.');
        } else {
            console.log('No department found with the specified ID.');
        }
    } catch (error) {
        console.error('Error deleting department:', error);
    }
}

module.exports = { createDepartment, displayDepartments, deleteDepartment };
