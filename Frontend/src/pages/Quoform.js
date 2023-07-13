import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios"
import './Quote.css';
import Sidebar from "../components/Sidebar";

const Quoform = (props) => {
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
    const handleClick = () => {
      return props.getState(arr);
  }
  const [fields, setFields] = useState([{ item: "", description: "", quantity: "", price: "" }]);
  
  return(
    <div>
            <div className="d-flex">
          <div className="form-group mr-3">
            <label htmlFor="client"><font color='red'>*</font>Client</label>
            <br /><br /><input defaultValue={props.clientValue} onChange={(e)=>setClient(e.target.value)} style={{width: '350px', marginRight: '10px'}} placeholder="Search Here" type="text" id="client" name="client" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="number"><font color='red'>*</font>Number</label>
            <br /><br /><input defaultValue={props.noValue} onChange={(e)=>setNumber(e.target.value)} type="text" style={{width: '300px', marginRight: '10px'}} placeholder="1" id="number" name="number" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="year"><font color='red'>*</font>Year</label>
            <br /><br /><input defaultValue={props.yearValue} onChange={(e)=>setYear(e.target.value)} type="text" style={{width: '200px', marginRight: '10px'}} placeholder="2023" id="year" name="year" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <br /><br /><select defaultValue={props.statValue} onChange={(e)=>setStat(e.target.value)} style={{width: '200px', marginRight: '10px'}} id="status" name="stat" className="form-control" >
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="sent">Sent</option>
        </select>
          </div>
        </div><br />
        <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="note">Note</label>
                <br /><br /><input defaultValue={props.noteValue} onChange={(e)=>setNote(e.target.value)} style={{width: '500px', marginRight: '10px'}} id="note" name="note" className="form-control" />
              </div>
              <div className="form-group  mr-2">
                    <label htmlFor="date"><font color='red'>*</font>Date</label>
                    <br /><br /><input defaultValue={props.datValue} onChange={(e)=>setDat(e.target.value)} style={{width: '300px', marginRight: '10px'}} type="date" id="dateE" name="dateE" className="form-control" />
              </div>
              <div className="form-group  mr-3">
                    <label htmlFor="dateExpire"><font color='red'>*</font>Date Expire</label>
                    <br /><br /><input defaultValue={props.expireValue} onChange={(e)=>setExpire(e.target.value)} style={{width: '300px', marginRight: '10px'}} type="date" id="dateExpire" name="dateExpire" className="form-control" />
              </div>
              </div><br /><hr style={{color: 'lightgray'}}></hr>
      
              {fields.map((field, index) => (
                <div key={index} className="form-group">
                  <div className="form-row">
                  <div className="d-flex">
                    <div className="col">
                    <div className="form-group  mr-3">
                      <label htmlFor={`item-${index}`}>Item</label>
                      <br /><br /><input defaultValue={props.itemValue} onChange={(e)=>setItem(e.target.value)} placeholder="ItemName" type="text" style={{width: '300px', marginRight: '10px'}} id={`item-${index}`} name={`item-${index}`} className="form-control" />
                      </div>
                    </div>
                    <div className="col">
                    <div className="form-group  mr-3">
                      <label htmlFor={`description-${index}`}>Description</label>
                      <br /><br /><input defaultValue={props.descValue} onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="DescriptionName" style={{width: '300px', marginRight: '5px'}} id={`description-${index}`}  name="description" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group  mr-3">
                      <label htmlFor={`quantity-${index}`}>Quantity</label>
                      <br /><br /><input defaultValue={props.qtyValue} onChange={(e)=>setQty(e.target.value)} type="text" style={{width: '100px', marginRight: '5px'}} id={`quantity-${index}`} name="qty" className="form-control"  />
                      </div>
                    <div className="form-group  mr-3">
                      <label htmlFor={`price-${index}`}>Price</label>
                      <br /><br /><input defaultValue={props.priceValue} onChange={(e)=>setPrice(e.target.value)} type="text" style={{width: '200px', marginRight: '10px'}} id={`price-${index}`} name="price" className="form-control" />
                      </div>
                      <div className="form-group  mr-3">
                      <label htmlFor={`total-${index}`}>Total</label>
                      <br /><br /><input defaultValue={props.totalValue} onChange={(e)=>setTotal(e.target.value)} type="text" style={{width: '200px'}} id={`total-${index}`} name="total" className="form-control" />
                      </div>
                      </div>
                  </div><br />
                </div>
              ))}
              <div className="d-flex">
              <button type="submit" onClick={handleClick} className="btn btn-primary" style={{width: '200px', height: '40px'}}>+ Save quote</button>
              </div><br />
              
          </div>
            
  );
              };
            export default Quoform;