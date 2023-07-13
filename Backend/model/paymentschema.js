const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    number: {type: String},
    date: {type: String},
    amount: {type: String},
    mode: {type: String},
    reference: {type: String},
    desc: {type: String},
},
{
    collection: "crmpayment"
});
module.exports = mongoose.model('crmpayment',paymentSchema);