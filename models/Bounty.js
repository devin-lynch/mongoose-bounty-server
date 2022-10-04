// require the mongoose package
const mongoose = require('mongoose')

// define the mongoose schema (key/value pairs of what our models should be)
const BountySchema = new mongoose.Schema({
    name: { 
        type: String
    }, 
    wantedFor: { 
        type: String
    },
    client: { 
        type: String 
    },
    ship: { 
        type: String 
    },
    reward: { 
        type: Number 
    },
    captured: { 
        type: Boolean 
    },
    lastSeen: { 
        type: String 
    },
    
}, {
    timestamps: true
})

// turn the schema into a mongoose model
// export our mongoose model
module.exports = mongoose.model('Bounty', BountySchema)