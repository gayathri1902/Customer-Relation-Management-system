const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: String},
},
{
    collection: "crmadmin"
});
/*
Schema({obj},{collection})
*/
module.exports = mongoose.model('crmadmin',adminSchema);