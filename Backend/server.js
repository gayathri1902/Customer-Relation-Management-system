const express =  require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoute = require("./controller/route");

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://nithya:ZF8nOoyeTTd9lJgV@cluster0.l0zh4uf.mongodb.net/?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on('error',()=>{console.log("Error occured")});
db.once('open',()=>console.log("Connected to database"));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/crm',studentRoute);
app.listen(4500,()=>console.log("Server started at 4500"))

