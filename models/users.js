const mongoose =require('mongoose')

const userSchema =mongoose.Schema({
    firstname:{
        type:String,
        minlength:[2,"Minimum length should be 2 characters"],
        maxlength:[10,"Maximum length should be 10 characters"]

      },
      lastname:{
        type:String,
        minlength:[2,"Minimum length should be 2 characters"],
        maxlength:[10,"Maximum length should be 10 characters"]

      },
      email: {
        type:String,
        unique:(true,"Email cannot duplicate"),
        match:[/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"Enter valid Email"]
      },
      password:{
        type:String,
      },
      favorites:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'favourites'
      }]
})

module.exports =mongoose.model('user',userSchema);