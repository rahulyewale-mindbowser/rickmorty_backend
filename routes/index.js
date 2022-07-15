module.exports = app => {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
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