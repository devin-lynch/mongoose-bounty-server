const db = require('./models')

const createBounty = async () => {
    try {
        // CREATE
        // const newBounty = await db.Bounty.create({
        //     name: 'Skrelby',
        //     wantedFor: 'Guilty by association',
        //     client: 'Skrylan',
        //     ship: 'Zaku',
        //     redward: 69000,
        //     captured: false,
        //     lastSeen: 'Sklookin around'
        // })
        // console.log(newBounty)

        // READ
        // const allBounties = await db.Bounty.find({})
        // // console.log(allBounties)
        // allBounties.forEach(bounty => console.log(`bounty ${bounty.name} is wanted for ${bounty.wantedFor}`))

        // UPDATE
        // const updatedBounty = await db.Bounty.findOneAndUpdate({
        //     name: 'Skrelby'
        // }, {
        //     name: 'Skrelbonius'
        // }, {
        //      new: true
        // })
        // console.log(updatedBounty)

        // DELETE 
        // const removedBounty = await db.Bounty.findOneAndRemove({ name: 'Skrelbonius'})
        // console.log(`removed this db entry: ${removedBounty.name}`)


    } catch(err) {
        console.warn(err)
    }
}

createBounty()