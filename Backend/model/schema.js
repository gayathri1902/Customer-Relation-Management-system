const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fname: {type: String},
    lname: {type: String},
    email: {type: String},
    pass: {type: String},
    add1: {type: String},
    add2: {type: String},
    city: {type: String},
    stat:  {type: String},
    zip: {type: String},
},
{
    collection: "login"
});
/*
Schema({obj},{collection})
*/
module.exports = mongoose.model('login',studentSchema);