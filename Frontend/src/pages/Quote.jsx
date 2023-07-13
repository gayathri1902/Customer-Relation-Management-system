import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QuoteTableRow from "./QuoteTableRow";
import Axios from "axios"
import './Quote.css';
import Sidebar from "../components/Sidebar";

const Quote = () => {
    const [client,setClient] = useState('');
    const [number,setNumber] = useState(''); 
    const [year,setYear] = useState(''); 
    const [stat,setStat] = useState('');
    const [note,setNote] = useState('');
    const [dat,setDat] = useState('');
    const [expire,setExpire] = useState('');
    const [item,setItem] = useState('');
    const [desc,setDesc] = useState('');
    const [qty,setQty] = useState('');
    const [price,setPrice] = useState('');
    const [total,setTotal] = useState('');
    const arr = [client, number, year, stat, note, dat, expire, item, desc, qty, price, total];

  const [showForm, setShowForm] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [fields, setFields] = useState([{ item: "", description: "", quantity: "", price: "" }]);
  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };
  const handleCancel = () => {
    setShowForm(false);
    setButtonClicked(false);
  };
  const addNewField = () => {
    setFields([...fields, { item: "", description: "", quantity: "", price: "" }]);
  };
  const openForm = () => {
    setShowForm(true);
    setButtonClicked(true);
  };
  const handleRefresh = () => {
    window.location.reload(); 
  };
  const handlequote = () => {
    const url = "https://crmbackend-fgt7.onrender.com/crm/create-quote"
    const obj = { client: arr[0], number:arr[1], year: arr[2], stat: arr[3], note: arr[4], dat: arr[5], expire: arr[6], item: arr[7], desc: arr[8], qty: arr[9], price: arr[10], total: arr[11] }
    Axios.post(url,obj)
        .then((res) => {
            if (res.status === 200) {
                console.log('created');
            }
            else {
                Promise.reject();
            }
        })
        .catch((err) => alert(err.message));
};
const [resData,setResData] = useState([]);

useEffect(()=>{
    const url = "https://crmbackend-fgt7.onrender.com/crm/getquote";
    Axios.get(url)
    .then((res)=>{
        if(res.status===200)
        {
            setResData(res.data)
        }
        else{
            Promise.reject();
        }
    })
    .catch((err)=>alert(err));
},[])

const Datatable = () => {
    return resData.map((val,ind)=>{ 
        return <QuoteTableRow obj={val} key={ind} />
    })
}
  return (
    <div>
      <Sidebar>
      {!buttonClicked && (
        <><br /><b><p style={{marginLeft: '40px',  fontSize: '20px'}}>Quotes List</p></b><button onClick={openForm} class="btn btn-primary" style={{marginLeft: '800px'}}>+ Add New Quote</button>
        <button onClick={handleRefresh} class="btn btn-primary" style={{marginLeft: '10px'}}>Refresh</button>
        <table style={{width: '1100px'}}>  
          <thead>
            <tr>
              <th>#N</th>
              <th>Client</th>
              <th>Date</th>
              <th>Due date</th>
              <th>Total</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
          {Datatable()}
          </tbody> 
        </table></>
      )}

      {showForm && (
            <div >
              <br /><button type="submit" onClick={handlequote} className="btn btn-primary" style={{width: '200px', height: '40px', marginLeft: '700px'}}>+ Save Quote</button>
              <button type="submit" className="btn" style={{width: '200px', height: '40px', marginLeft: '10px', border: '0.4px solid lightgray'}} onClick={handleCancel}>Cancel</button> <br /> 
             <hr style={{color: 'lightgray'}}></hr>
            <form>
            <div className="d-flex">
          <div className="form-group mr-3">
            <label htmlFor="client"><font color='red'>*</font>Client</label>
            <br /><br /><input value={client} onChange={(e)=>setClient(e.target.value)} style={{width: '350px', marginRight: '10px'}} placeholder="Search Here" type="text" id="client" name="client" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="number"><font color='red'>*</font>Number</label>
            <br /><br /><input value={number} onChange={(e)=>setNumber(e.target.value)} type="text" style={{width: '300px', marginRight: '10px'}} placeholder="1" id="number" name="number" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="year"><font color='red'>*</font>Year</label>
            <br /><br /><input value={year} onChange={(e)=>setYear(e.target.value)} type="text" style={{width: '200px', marginRight: '10px'}} placeholder="2023" id="year" name="year" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <br /><br /><select value={stat} onChange={(e)=>setStat(e.target.value)} style={{width: '200px', marginRight: '10px'}} id="status" name="status" className="form-control" >
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="sent">Sent</option>
        </select>
          </div>
        </div><br />
        <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="note">Note</label>
                <br /><br /><input value={note} onChange={(e)=>setNote(e.target.value)} style={{width: '500px', marginRight: '10px'}} id="note" name="note" className="form-control" />
              </div>
              <div className="form-group  mr-2">
                    <label htmlFor="date"><font color='red'>*</font>Date</label>
                    <br /><br /><input value={dat} onChange={(e)=>setDat(e.target.value)} style={{width: '300px', marginRight: '10px'}} type="date" id="dateExpire" name="dateExpire" className="form-control" />
              </div>
              <div className="form-group  mr-3">
                    <label htmlFor="dateExpire"><font color='red'>*</font>Date Expire</label>
                    <br /><br /><input value={expire} onChange={(e)=>setExpire(e.target.value)} style={{width: '300px', marginRight: '10px'}} type="date" id="dateExpire" name="dateExpire" className="form-control" />
              </div>
              </div><br /><hr style={{color: 'lightgray'}}></hr>
      
              {fields.map((field, index) => (
                <div key={index} className="form-group">
                  <div className="form-row">
                  <div className="d-flex">
                    <div className="col">
                    <div className="form-group  mr-3">
                      <label htmlFor={`item-${index}`}>Item</label>
                      <br /><br /><input value={item} onChange={(e)=>setItem(e.target.value)} placeholder="ItemName" type="text" style={{width: '300px', marginRight: '10px'}} id={`item-${index}`} name={`item-${index}`} className="form-control" />
                      </div>
                    </div>
                    <div className="col">
                    <div className="form-group  mr-3">
                      <label htmlFor={`description-${index}`}>Description</label>
                      <br /><br /><input value={desc} onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="DescriptionName" style={{width: '300px', marginRight: '5px'}} id={`description-${index}`}  name={`description-${index}`} className="form-control" />
                      </div>
                    </div>
                    <div className="form-group  mr-3">
                      <label htmlFor={`quantity-${index}`}>Quantity</label>
                      <br /><br /><input value={qty} onChange={(e)=>setQty(e.target.value)} type="text" style={{width: '100px', marginRight: '5px'}} id={`quantity-${index}`} name={`quantity-${index}`} className="form-control"  />
                      </div>
                    <div className="form-group  mr-3">
                      <label htmlFor={`price-${index}`}>Price</label>
                      <br /><br /><input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" style={{width: '200px', marginRight: '10px'}} id={`price-${index}`} name={`price-${index}`} className="form-control" />
                      </div>
                      <div className="form-group  mr-3">
                      <label htmlFor={`total-${index}`}>Total</label>
                      <br /><br /><input value={total} onChange={(e)=>setTotal(e.target.value)} type="text" style={{width: '200px'}} id={`total-${index}`} name={`total-${index}`} className="form-control" />
                      </div>
                      </div>
                  </div><br />
                </div>
              ))}
              <div className="form-group"><br />
                <button style={{width: '1125px' ,border: '1px solid lightgray'}} type="button" className="btn"  onClick={addNewField}> + Add New Field</button>
              </div><br />
              <div className="d-flex">
              <button type="submit" onClick={handlequote} className="btn btn-primary" style={{width: '200px', height: '40px'}}>+ Save Quote</button>
            <font color='red' style={{marginLeft: '600px'}}>*</font>Subtotal 
            <input style={{width: '200px', marginLeft: '50px'}} value="0.00" type="text" id="client" name="client" className="form-control" />   
          </div><br />
          <div className="d-flex">
          <font color='red' style={{marginLeft: '800px'}}>*</font>0
          <input style={{width: '200px', marginLeft: '100px'}} value="0.00" type="text" id="client" name="client" className="form-control" />
          </div><br />
          <div className="d-flex">
          <font color='red' style={{marginLeft: '800px'}}>*</font>Total
          <input style={{width: '200px', marginLeft: '75px'}} type="text" value="0.00" id="client" name="client" className="form-control" />
          </div>
            </form>
          </div>
      )}
      </Sidebar>
    </div>
  );};
export default Quote;
