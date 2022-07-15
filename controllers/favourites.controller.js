// const favourites = require('../models/favourites');
const db = require('../models/index');
const Favourites = db.favourites

exports.create = (req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
      // Create a Favorite
      const favourite = new Favourites({
        name: req.body.name,
        type:req.body.type,
        gender:req.body.gender,
        species:req.body.species,
        status: req.body.status,
        image:req.body.image,
        uid:req.body.uid
      });
      // Save favourite in the database
      favourite
        .save(favourite)
        .then(data => {
          res.send(data);
          // res.status(201).send({ message: "favourite added successfully" })
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while adding the favourite."
          });
        });
}

exports.findall=(req,res)=>{
  const uid =req.query.uid
  Favourites.find({uid:uid})
    .then(data =>{
      if(!data){
        res.status(404).send({
          message:"Favourites Not Found"
        });
      }else{
          res.status(200).send({data,message:"data fetched successfully"})
        }
     
    }).catch(err=>{
      res.send(err)
    })
}

exports.remove=(req, res) => {
    const cname = req.query.name;
    console.log(cname);
    Favourites.findOneAndDelete({name:cname})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete favourite with. Maybe favourite was not found!`
          });
        } else {
          res.send({
            message: "favourite was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete favourite with id=" + id
        });
      });
  };