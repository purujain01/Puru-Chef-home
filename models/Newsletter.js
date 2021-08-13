const mongoose = require('mongoose')

const newsletterSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim:true,
        unique: [true, 'Already subscribed for newsletter']
    }
},{
    timestamps: true
})

const Newsletter = mongoose.model('Newsletter',newsletterSchema)

module.exports = Newsletter
