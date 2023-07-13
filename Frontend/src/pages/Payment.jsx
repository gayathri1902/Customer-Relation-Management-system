import React, { useState, useEffect } from 'react';
import PaymentTableRow from "./PaymentTableRow";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './Payment.css';
import Sidebar from '../components/Sidebar';

const Payment = () => {

    const [number,setNumber] = useState('');
    const [date,setDate] = useState(''); 
    const [amount,setAmount] = useState(''); 
    const [mode,setMode] = useState('');
    const [reference,setReference] = useState('');
    const [desc,setDesc] = useState('');
    const arr = [number, date, amount, mode, reference, desc];

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleRefresh = () => {
    window.location.reload(); 
  };
  const handlepayment = () => {
    const url = "https://crmbackend-fgt7.onrender.com/crm/create-payment"
    const obj = { number: arr[0], date:arr[1], amount: arr[2], mode: arr[3], reference: arr[4], desc: arr[5]}
    Axios.post(url, obj)
        .then((res) => {
            if (res.status === 200) {
                console.log('created');
            }
            else {
                Promise.reject();
            }
        })
        .catch((err) => alert(err));
}
const [resData,setResData] = useState([]);

useEffect(()=>{
    const url = "https://crmbackend-fgt7.onrender.com/crm/getpay";
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
        return <PaymentTableRow obj={val} key={ind} />
    })
}

  return (
    <div>
      <Sidebar>
    <div className="container-fluid d-flex">
      {showForm && (
        <div className={`form-container ${showForm ? 'slide-in' : ''}`}>
          <br /><p style={{fontSize: '30px', color: 'blue'}}><b>Currency Panel</b></p>
          <br />
          <div className="d-flex"><form>
            <div className="d-flex">
          <div className="form-group mr-3">
            <label htmlFor="client"><font color='red'>*</font>Number</label>
            <br /><br /><input value= {number} onChange={(e)=>setNumber(e.target.value)} style={{width: '150px', marginRight: '10px'}} placeholder="1" type="number" id="no" name="client" className="form-control" />
          </div>
          <div className="form-group mr-2">
            <label htmlFor="number"><font color='red'>*</font>Date</label>
            <br /><br /><input type="date" onChange={(e)=>setDate(e.target.value)} value={date} style={{width: '150px', marginRight: '10px'}} id="date" name="number" className="form-control" />
          </div>
          
        </div><br />
        <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="Amount"><font color='red'>*</font>Amount</label>
                <br /><br /><input value={amount} onChange={(e)=>setAmount(e.target.value)} style={{width: '320px', marginRight: '10px'}} id="amount" className="form-control" />
              </div>
              </div><br />
              <div className="d-flex">
              <div className="form-group  mr-3">
                <label ><font color='red'>*</font>Payment Mode</label>
                <br /><br /><input value={mode} onChange={(e)=>setMode(e.target.value)} style={{width: '320px', marginRight: '10px'}} id="mode" className="form-control" />
              </div></div><br />
              <div className="d-flex">
              <div className="form-group  mr-3">
                <label >Reference</label>
                <br /><br /><input value={reference} onChange={(e)=>setReference(e.target.value)} style={{width: '320px', marginRight: '10px'}} id="ref" className="form-control" />
              </div></div><br />
              <label htmlFor="Amount">Description</label><br /><br />
              <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} style={{width: '320px', height: '70px', border: '0.1px solid lightgray'}}></textarea>
              <br /><br /><button onClick={handlepayment} type="submit"  className="btn btn-primary" style={{width: '200px', height: '40px'}}>Submit</button>
              
                                </form><br />
                                <div class="vertical-line" style={{border: '0.1px solid lightgray', marginLeft: '50px'}}></div></div>
        </div>
      )}
      <div className={`table-container ${showForm ? 'shift-right' : ''}`}><br />
      {!showForm && <><button type="submit" className="btn btn-primary" style={{ width: '175px', height: '40px', marginLeft: '320px' }} onClick={handleButtonClick}>Add New Payment</button><button onClick={handleRefresh} class="btn btn-primary" style={{ marginLeft: '10px' }}>Refresh</button></>}
      <table>  
          <thead>
            <tr>
              <th>Reference</th>
              <th>Number</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Mode</th>
              <th>Balance</th>

            </tr>
          </thead>
          <tbody>
          {Datatable()}
          </tbody>
        </table>
        
      </div>
    </div>
    </Sidebar>
    </div>
  );
};

export default Payment;
