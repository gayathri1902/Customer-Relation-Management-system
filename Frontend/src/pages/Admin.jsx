import React, { useState, useEffect } from 'react';
import AdminTableRow from "./AdminTableRow";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './Payment.css';
import Sidebar from '../components/Sidebar';

const Admin = () => {

    const [name,setName] = useState('');
    const [phone,setPhone] = useState(''); 
    const [email,setEmail] = useState('');

    const arr = [name, phone, email];

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleRefresh = () => {
    window.location.reload(); 
  };
  const handleadmin = () => {
    const url = "https://crmbackend-fgt7.onrender.com/crm/create-admin"
    const obj = { name: arr[0],  phone: arr[1], email: arr[2]}
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
    const url = "https://crmbackend-fgt7.onrender.com/crm/getadmin";
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
        return <AdminTableRow obj={val} key={ind} />
    })
}

  return (
    <div>
      <Sidebar>
    <div className="container-fluid d-flex">
      {showForm && (
        <div className={`form-container ${showForm ? 'slide-in' : ''}`}>
          <br /><p style={{fontSize: '30px', color: 'blue'}}><b>Admin Panel</b></p>
          <br />
          <div className="d-flex"><form>
            <div className="d-flex">
          <div className="form-group mr-3">
            <label htmlFor="name"><font color='red'>*</font>Name</label>
            <br /><br /><input value= {name} onChange={(e)=>setName(e.target.value)} style={{width: '150px', marginRight: '10px'}} placeholder="1" type="text" id="name" name="name" className="form-control" />
          </div>
          
        </div><br />
        <div className="d-flex">
              <div className="form-group  mr-3">
                <label htmlFor="phone"><font color='red'>*</font>Phone</label>
                <br /><br /><input value={phone} onChange={(e)=>setPhone(e.target.value)} style={{width: '320px', marginRight: '10px'}} id="phone" className="form-control" />
              </div>
              </div><br />
              <div className="d-flex">
              <div className="form-group  mr-3">
                <label ><font color='red'>*</font>Email</label>
                <br /><br /><input value={email} onChange={(e)=>setEmail(e.target.value)} style={{width: '320px', marginRight: '10px'}} id="email" className="form-control" />
              </div></div><br />
              <br /><br /><button onClick={handleadmin} type="submit"  className="btn btn-primary" style={{width: '200px', height: '40px'}}>Submit</button>
              
                                </form><br />
                                <div class="vertical-line" style={{border: '0.1px solid lightgray', marginLeft: '50px'}}></div></div>
        </div>
      )}
      <div className={`table-container ${showForm ? 'shift-right' : ''}`}><br />
      {!showForm && <><button type="submit" className="btn btn-primary" style={{ width: '175px', height: '40px', marginLeft: '320px' }} onClick={handleButtonClick}>Add New Admin</button><button onClick={handleRefresh} class="btn btn-primary" style={{ marginLeft: '10px' }}>Refresh</button></>}
      <table>  
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
    

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

export default Admin;
