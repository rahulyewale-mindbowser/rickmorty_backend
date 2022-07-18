const express =require('express')
// const cors = require('cors')
require('dotenv').config();
const app = express();
const swaggerDocs = require('./swagger')
const port = process.env.PORT || 8080;

const morganMiddleware = require('./middlewares/morgan.middlewares')
app.use(morganMiddleware);

  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  
  const dbConnect = require("./db/dbConnect");

  // execute database connection 
  dbConnect();

require('./routes/index')(app);
app.get('/',(req,res)=>{
    // res.send(200).status({message:"Hello from node"})
    res.send("hello from backend js")
})
app.listen(port,()=>{
    console.log(`Application started at port ${port}`);
    swaggerDocs(app, port)
})