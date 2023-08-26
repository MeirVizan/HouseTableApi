const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new house
router.post('/', async (req, res) => {
    try {
        console.log("inside")
        const { address, currentValue, loanAmount } = req.body;
        const newHouse = await db.House.create({
            address,
            currentValue,
            loanAmount
        });
        newHouse.calculateRisk();
        await newHouse.save();
        res.json(newHouse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the house.' });
    }
});

// Get a house by ID
router.get('/:id', async (req, res) => {
    console.log("teee")
    try {
        console.log("get req")
        const house = await db.House.findByPk(req.params.id);
        if (house) {
            res.json(house);
        } else {
            res.status(404).json({ error: 'House not found.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the house.' });
    }
});

// Update a house by ID
router.put('/:id', async (req, res) => {
    try {
        const { currentValue, loanAmount } = req.body;
        const house = await db.House.findByPk(req.params.id);
        if (house) {
            house.currentValue = currentValue;
            house.loanAmount = loanAmount;
            house.calculateRisk();
            await house.save();
            res.json(house);
        } else {
            res.status(404).json({ error: 'House not found.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the house.' });
    }
});

module.exports = router;