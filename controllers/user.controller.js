const bcrypt = require('bcrypt');

const db =require('../models/index');
const User= db.users
// const User = require('../models/users')

// create a new user
exports.create =async(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'content can not be empty'});
        return;
    }

    // encrypt the password using bcrypt
    var hashedPassword = await bcrypt.hash(req.body.password,10);

    // create a user 
    const user =new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hashedPassword
    });

    user.save(user)
    .then(data => {
        
        res.status(201).send({ message: "user registered successfully" })
      })
      .catch(err => {
        res.status(500).send({
          message:
          err.message || "Some error occurred while creating the user."
        });
      });
}

exports.signin = (req,res)=>{
    try {
        User.findOne({
            email:req.body.email,
        }).exec((err,user) => {
               if (err) {
            res.status(500).send({ message: err });
            return;
          }
          if (!user) {
            return res.status(404).send({ message: "user Not found." });
          }
          var passwordIsValid = bcrypt.compareSync(
            req.body.password,
           user.password
          );
          if (!passwordIsValid) {
            return res.status(401).send({ message: "Invalid Password!" });
          }
          res.status(200).send({
            message: "login successfull",id:user._id,firstname:user.firstname
          });
        });
    } catch (error) {
        res.send(error);
        return;
    }
}