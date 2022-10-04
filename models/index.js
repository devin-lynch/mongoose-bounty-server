// require the mongoose package
const mongoose = require('mongoose')

// tell mongoose what our database uri is and connect to it
const uri = 'mongodb://127.0.0.1/bountyServer'
mongoose.connect(uri)

// use mongoose's connections method to validate the db collection
const db = mongoose.connection
// connection success
db.once('open', () => console.log(`mongoDB connected @ ${db.host}:${db.port}`))
// connection failure
db.on('error', err => console.warn('🔥 the data center has burned down', err))

// export all of our mongoose models from this file 
module.exports = {
    Bounty: require('./Bounty')
}
