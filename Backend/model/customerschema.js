const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {type: String},
    company: {type: String},
    email: {type: String},
    phone: {type: String},
},
{
    collection: "crmcustomer"
});
/*
Schema({obj},{collection})
*/
module.exports = mongoose.model('crmcustomer',customerSchema);