const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    client: {type: String},
    number: {type: String},
    year: {type: String},
    stat: {type: String},
    note: {type: String},
    dat: {type: String},
    expire: {type: String},
    item:  {type: String},
    desc: {type: String},
    qty: {type: String},
    price: {type: String},
    total: {type: String},
},
{
    collection: "crmquote"
});
/*
Schema({obj},{collection})
*/
module.exports = mongoose.model('crmquote',quoteSchema);