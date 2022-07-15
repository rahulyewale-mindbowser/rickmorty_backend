const dbConfig = require('../config/db.config')
const mongoose = require('mongoose');
const db ={};
db.mongoose =mongoose;
db.url = dbConfig.url
db.users= require('./users')
db.favourites =require('./favourites')
module.exports =db;