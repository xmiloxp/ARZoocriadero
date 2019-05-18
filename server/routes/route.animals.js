const express = require('express')
const router = express.Router()

const Animal = require('../models/animal');
router.get("/", async (req,res) =>{
    const animals = await Animal.find();
    res.json(animals)
});

module.exports = router;