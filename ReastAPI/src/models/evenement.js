const mongoose = require('mongoose')

const evenementSchema = new mongoose.Schema({
    description:{
        type:String,
        require: true
    },
    date:{
        type:String,
        require: true
    }
})

const evenement = new mongoose.model('evenement',evenementSchema);

module.exports = evenement;