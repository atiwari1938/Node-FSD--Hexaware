
const Department = require('../models/dept.model');

// Get all departments
async function getDepts() {
    try {
        const departments = await Department.getDepts();
        return departments;
    } catch (error) {
        throw error;
    }
}

// Get department by ID
async function getDeptById(id) {
    try {
        const department = await Department.getDeptById(id);
        return department;
    } catch (error) {
        throw error;
    }
}

module.exports = { getDepts, getDeptById };