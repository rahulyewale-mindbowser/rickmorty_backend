const mongoose = require('mongoose')

const favouriteSchema = mongoose.Schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    gender:{
        type:String
    },
    species:{
        type:String
    },
    status:{
        type:String
    },
    image:{
        type:String
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports =mongoose.model('favourites',favouriteSchema);