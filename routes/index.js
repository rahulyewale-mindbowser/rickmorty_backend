module.exports = app => {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
const router = require("express").Router();
const favourites = require('../controllers/favourites.controller');
const user = require("../controllers/user.controller")

router
  .get("/favourites",favourites.findall)
  .post("/favourites",favourites.create )
  .delete("/favourites", favourites.remove)
  .post("/signup",user.create)
  .post("/signin",user.signin)

app.use('/rick-morty',router);

}