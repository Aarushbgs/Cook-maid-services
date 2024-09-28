const express = require('express');
const router = express.Router();
const worker = require('../Models/worker');

// GET route to search for workers
router.get('/search', async (req, res) => {
    const { location, type } = req.query;

    try {
        const workers = await worker.find({ location: location, type: type });

        if (!workers.length) {
            return res.status(404).json({ message: 'No workers found in this location.' });
        }

        res.status(200).json(workers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST route to add a new worker
router.post('/add', async (req, res) => {
    console.log("Received POST request to add worker");
    const { name, Mobile, type, location, Fee } = req.body;

    console.log('Request body:', req.body);


    try {
        const newWorker = new worker({
            name,
            Mobile,
            type,
            location,
            Fee,
        });
        console.log("yaha tak koi dikkat 1");
        const savedWorker = await newWorker.save();
        console.log("yaha tak koi dikkat 2");
        res.status(201).json(savedWorker);
    } catch (error) {
        console.error('Error saving worker:', error);
        res.status(500).json({ message: 'Error saving worker', error: error.message });
    }
});

module.exports = router;
