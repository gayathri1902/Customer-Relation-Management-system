const express = require('express');
const router = express.Router();
const studentSchema = require('../model/schema');
const AdminSchema = require('../model/adminschema');
const customerSchema = require('../model/customerschema');
const employeeSchema = require('../model/employeeschema');

const mongoose = require('mongoose');
router.post('/create-record',(req,res,next)=>{
    studentSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.get('/login',(req,res,next)=>{
    

    studentSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

// router.get('/login',async(req,res)=>{
//     const{email,pass}=req.body

//     try{
//         const check = await studentSchema.findOne({ email: email });

//     if (check) {
//         if (check.password === pass) {
//             res.json("exist");
//         } else {
//             res.json("wrongPassword");
//         }
//     } else {
//         res.json("not exist");
//     }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

const invoiceSchema = require('../model/invoiceschema');
const quoteSchema = require('../model/quoteschema');
const paymentSchema = require('../model/paymentschema');

//http://localhost:4500/student/create-invoice
router.post('/create-invoice',(req,res,next)=>{
    invoiceSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/create-quote',(req,res,next)=>{
    quoteSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/create-payment',(req,res,next)=>{
    paymentSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

//http://localhost:4500/student/
//table display
router.get('/',(req,res,next)=>{
    invoiceSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.get('/getquote',(req,res,next)=>{
    quoteSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.get('/getpay',(req,res,next)=>{
    paymentSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})


router.route('/update-invoice/:id')
.get((req,res,next)=>{
    invoiceSchema.findById(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
.put((req,res,next)=>{
    invoiceSchema.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body
        },
        (error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log(req.body, req.params.id);
        }
    })
})

router.route('/update-quote/:id')
.get((req,res,next)=>{
    quoteSchema.findById(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
.put((req,res,next)=>{
    quoteSchema.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body
        },
        (error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log(req.body, req.params.id);
        }
    })
})

router.route('/update-payment/:id')
.get((req,res,next)=>{
    paymentSchema.findById(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
.put((req,res,next)=>{
    paymentSchema.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body
        },
        (error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log(req.body, req.params.id);
        }
    })
})

//delete
router.delete('/delete-invoice/:id',(req,res,next)=>{
    invoiceSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.delete('/delete-quote/:id',(req,res,next)=>{
    quoteSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})


router.delete('/delete-payment/:id',(req,res,next)=>{
    paymentSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/create-admin',(req,res,next)=>{
    AdminSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/create-customer',(req,res,next)=>{
    customerSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/create-employee',(req,res,next)=>{
    employeeSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

//http://localhost:4500/student/
//table display
router.get('/getadmin',(req,res,next)=>{
    AdminSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.get('/getcust',(req,res,next)=>{
    customerSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.get('/getemployee',(req,res,next)=>{
    employeeSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})



//delete
router.delete('/delete-admin/:id',(req,res,next)=>{
    AdminSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.delete('/delete-customer/:id',(req,res,next)=>{
    customerSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.delete('/delete-employee/:id',(req,res,next)=>{
    employeeSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
//dashboard

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
// mongoose.connect("mongodb+srv://nithya:ZF8nOoyeTTd9lJgV@cluster0.l0zh4uf.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser: true, useUnifiedTopology: true
// })
router.get("/a-b", async(req,res)=>{
    const data = await Load.find({});
    res.send({data})
})
var tot =0;
//for Invoice Preview
router.get("/bar", async(req,res)=>{
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
router.get("/qp", async(req,res)=>{
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
router.get("/a", async(req,res)=>{
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
router.get("/recentI",async(req,res)=>{
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
router.get("/recentQ",async(req,res)=>{
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


module.exports = router;