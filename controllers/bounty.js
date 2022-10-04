const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /bounty -- return array of all bounties
router.get('/', async (req, res) => {
    try {
        // find all bounties
        const bounties = await db.Bounty.find({})
        // send them back as json (with default status code 200)
        res.json(bounties)
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error' })        
    }
})
// GET /bounty/:id -- return a single bounty
router.get('/:id', async (req, res) => {
    try {
        // get a specific id from the req.params.id
        // look up that id in the database
        const bounty = await db.Bounty.findById(req.params.id)
        // send the found bounty back as json
        res.json(bounty)
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error' })        
    }
})

// POST /bounty -- create a new bounty in the db
router.post('/', async (req, res) => {
    try {
        const newBounty = await db.Bounty.create(req.body)
        res.status(201).json(newBounty)
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// PUT /bounty/:id -- update a single bounty

// DELETE /bounty/:id -- destroy a bounty

module.exports = router