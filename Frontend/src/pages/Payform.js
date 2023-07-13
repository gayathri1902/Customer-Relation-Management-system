import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios"
import './Payment.css';
import Sidebar from "../components/Sidebar";

const Payform = (props) => {

    const [number,setNumber] = useState('');
    const [date,setDate] = useState(''); 
    const [amount,setAmount] = useState(''); 
    const [mode,setMode] = useState('');
    const [reference,setReference] = useState('');
    const [desc,setDesc] = useState('');
    const arr = [number, date, amount, mode, reference, desc];

    const handleClick = () => {
        return props.getState(arr);
    }
    return(
        <div><h1 style={{fontSize: '30px', color: 'blue', marginLeft: '100px'}}><b>Currency Panel</b></h1><div className="container-fluid d-flex" style={{marginLeft: '100px'}}>
            <br /><br />
            <div className="d-flex">
                <div className="d-flex">
                    <div className="form-group mr-3">
                        <label htmlFor="client"><font color='red'>*</font>Number</label>
                        <br /><br /><input defaultValue={props.noValue} onChange={(e) => setNumber(e.target.value)} style={{ width: '300px', marginRight: '10px' }} placeholder="1" type="number" id="no" name="client" className="form-control" />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="number"><font color='red'>*</font>Date</label>
                        <br /><br /><input type="date" onChange={(e) => setDate(e.target.value)} defaultValue={props.datValue} style={{ width: '300px', marginRight: '10px' }} id="date" name="number" className="form-control" />
                    </div>

                </div><br />
                <div className="d-flex">
                    <div className="form-group  mr-3">
                        <label htmlFor="Amount"><font color='red'>*</font>Amount</label>
                        <br /><br /><input defaultValue={props.amtValue} onChange={(e) => setAmount(e.target.value)} style={{ width: '620px', marginRight: '10px' }} id="amount" className="form-control" />
                    </div>
                </div><br />
                <div className="d-flex">
                    <div className="form-group  mr-3">
                        <label><font color='red'>*</font>Payment Mode</label>
                        <br /><br /><input defaultValue={props.modeValue} onChange={(e) => setMode(e.target.value)} style={{ width: '620px', marginRight: '10px' }} id="mode" className="form-control" />
                    </div></div><br />
                <div className="d-flex">
                    <div className="form-group  mr-3">
                        <label>Reference</label>
                        <br /><br /><input defaultValue={props.refValue} onChange={(e) => setReference(e.target.value)} style={{ width: '620px', marginRight: '10px' }} id="ref" className="form-control" />
                    </div></div><br />
                <label htmlFor="Amount">Description</label><br /><br />
                <textarea  defaultValue={props.descValue} onChange={(e) => setDesc(e.target.value)} style={{ width: '620px', height: '70px', border: '0.1px solid lightgray' }}></textarea>
                <br /><br /><button onClick={handleClick} type="submit" className="btn btn-primary" style={{ width: '200px', height: '40px' }}>Submit</button><br />

            <br />
            </div>
        </div></div>
    );
    };

    export default Payform;
    