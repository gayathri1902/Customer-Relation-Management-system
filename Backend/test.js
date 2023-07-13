const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())

// const sch = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     number: Number,
//     total: Number
// })

const sch_in = new mongoose.Schema({
    client: {type: String},
    number: {type: Number},
    year: {type: String},
    stat: {type: String},
    note: {type: String},
    dat: {type: String},
    expire: {type: String},
    item:  {type: String},
    desc: {type: String},
    qty: {type: String},
    price: {type: String},
    total: {type:Number},
    status: {type:Number}
})
const sch_qu = new mongoose.Schema({
    client: {type: String},
    number: {type: Number},
    year: {type: String},
    note: {type: String},
    dat: {type: String},
    expire: {type: String},
    item:  {type: String},
    desc: {type: String},
    qty: {type: Number},
    price: {type: Number},
    total: {type:Number},
    status: {type:Number}
})
const Load = mongoose.model("invoicedats1",sch_in)
const Load_Q = mongoose.model("quotedatas",sch_qu)
mongoose.connect("mongodb+srv://nithya:ZF8nOoyeTTd9lJgV@cluster0.l0zh4uf.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true
})
app.get("/ab", async(req,res)=>{
    const data = await Load.find({});
    res.send({data})
})
var tot =0;
//for Invoice Preview
app.get("/bar", async(req,res)=>{
    const data = await Load.find({});
    var tot =await  Load.find().countDocuments({});
    console.log(tot)
    var tot_p = await Load.find({"status":0}).countDocuments({}); //paid
    var tot_np = await Load.find({"status":1}).countDocuments({}); //partially paid
    var tot_pp = await Load.find({"status":2}).countDocuments({}); //not paid
    var tot_d = await Load.find({"status":3}).countDocuments({}); //draft
    const arr ={}
    //calculating the percentage
    tot_p = parseFloat((tot_p*100/tot).toFixed(2))
    tot_np = parseFloat((tot_np*100/tot).toFixed(2))
    tot_pp = parseFloat((tot_pp*100/tot).toFixed(2))
    tot_d = parseFloat((tot_d*100/tot).toFixed(2))
    const m1 = new Map()
    m1.set("Paid",tot_p)
    m1.set("Not Paid",tot_np)
    m1.set("Partially Paid",tot_pp)
    m1.set("Draft",tot_d)
    console.log(m1)
    // arr.push(tot_p)
    // arr.push(tot_np)
    // arr.push(tot_pp)    
    // arr.push(tot_d)
    array = Array.from(m1, ([name, value]) => ({ name, value }));
    console.log(array)
    res.send(array)
})

//FOR QUOTE PREVIEW
app.get("/qp", async(req,res)=>{
    const data = await Load_Q.find({});
    var tot =await  Load_Q.find().countDocuments({});
    console.log(tot)
    var tot_p = await Load_Q.find({"status":0}).countDocuments({}); //paid
    var tot_np = await Load_Q.find({"status":1}).countDocuments({}); //partially paid
    var tot_pp = await Load_Q.find({"status":2}).countDocuments({}); //not paid
    var tot_d = await Load_Q.find({"status":3}).countDocuments({}); //draft
    const arr ={}
    //calculating the percentage
    tot_p = parseFloat((tot_p*100/tot).toFixed(2))
    tot_np = parseFloat((tot_np*100/tot).toFixed(2))
    tot_pp = parseFloat((tot_pp*100/tot).toFixed(2))
    tot_d = parseFloat((tot_d*100/tot).toFixed(2))
    const m1 = new Map()
    m1.set("Paid",tot_p)
    m1.set("Not Paid",tot_np)
    m1.set("Partially Paid",tot_pp)
    m1.set("Draft",tot_d)
    console.log(m1)
    // arr.push(tot_p)
    // arr.push(tot_np)
    // arr.push(tot_pp)    
    // arr.push(tot_d)
    array = Array.from(m1, ([name, value]) => ({ name, value }));
    console.log(array)
    res.send(array)
})
//For calculating total money in payment
app.get("/a", async(req,res)=>{
    ite = await Load.find({});
    let newAr = ite.map(x)
    var sb = abv(newAr)
    console.log(sb)
    var due = finddue(ite)
    var arr =[]
    arr.push(sb,due)
    res.status(200).json(arr)
})
finddue = (ite) =>{
    var due=0;
    for (let i = 0; i < ite.length; i++) {
        if(ite[i].status!=0)
            due = due + ite[i].total
    }
    console.log(due)
    return due
}
abv = (newAr) =>{
    var sum = 0;
    for (let index = 0; index < newAr.length; index++) {
        sum += newAr[index];
    }
    return sum
}
const x = (obj) => {
    newOb = {};
    newOb = obj.total;
    return newOb
};

//FOR FETCHING RECENT INVOICES
app.get("/recentI",async(req,res)=>{
    var data = await Load.find({});
    var tot = await Load.find({}).countDocuments();
    if(tot>5)
        tot = 5;
    var m2 = new Map();
    var i=0;
    var newAr = data.map(x1)
    console.log("hello")
    res.send(newAr)
});

//FETCHING RECENT QUOTES
app.get("/recentQ",async(req,res)=>{
    var data = await Load_Q.find({});
    var tot = await Load_Q.find({}).countDocuments();
    if(tot>5)
        tot = 5;
    var m2 = new Map();
    var i=0;
    var newAr = data.map(x1)
    console.log("hello quote")
    res.send(newAr)
});

const x1 = (obj) => {
    newOb = {};
    newOb.name = obj.client
    //newOb.status = obj.status
    newOb.total = obj.total;
    if(obj.status ==0)
        newOb.status = "Paid"
    if(obj.status ==1)
        newOb.status ="Partially Paid"
    if(obj.status ==2)
        newOb.status ="Not Paid"
    if(obj.status ==3)
        newOb.status ="Draft"
    return newOb
};



app.listen(3020,()=> console.log("Server is running "))

