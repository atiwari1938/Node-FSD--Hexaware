const express = require('express');
const router = express.Router();
const Department = require('../services/dept.service');

// Create a new department
router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const department = await Department.create({ name });
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ message: 'Error creating department', error: error.message });
    }
});

// Get all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching departments', error: error.message });
    }
});

// Get department by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const department = await Department.findByPk(id);
        if (!department) {
            res.status(404).json({ message: 'Department not found' });
            return;
        }
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching department', error: error.message });
    }
});

// Update department by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Department.update(req.body, { where: { id } });
        if (!updated) {
            res.status(404).json({ message: 'Department not found' });
            return;
        }
        res.status(200).json({ message: 'Department updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating department', error: error.message });
    }
});

// Delete department by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Department.destroy({ where: { id } });
        if (!deleted) {
            res.status(404).json({ message: 'Department not found' });
            return;
        }
        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting department', error: error.message });
    }
});

module.exports = router;
