const express =require('express')
const cors = require('cors')
const app = express();
const port =8080;

var corsOptions = {
    origin: "http://localhost:3002"
  };
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  

const db = require("./models/index");
try {
  db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
} catch (error) {
  console.log(error);
}
require('./routes/index')(app);
app.get('/',(req,res)=>{
    res.send(200).status({message:"Hello from node"})
})
app.listen(port,()=>{
    console.log(`Application started at port ${port}`);
})