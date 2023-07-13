import React, {useState} from "react"
import Axios from "axios"

export const Register = () => {

    const [fname,setFname] = useState('');
    const [lname,setLname] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [pass,setPass] = useState('');
    const [rpass,setRpass] = useState('');
    const [add1,setAdd1] = useState('');
    const [add2,setAdd2] = useState('');
    const [city,setCity] = useState('');
    const [stat,setStat] = useState('');
    const [zip,setZip] = useState('');
    const [valid,setValid] = useState('');
    const arr = [fname,lname,email,pass,add1,add2,city,stat,zip];

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handlepass = (e) => {
      setRpass(e.target.value);
      if(rpass!="") {
        if(rpass===pass) {
          setValid("Passwords match.");
        }
        else setValid("Passwords do not match.");
      }
      
    }

    const handleregister = () => {
      const url = "https://crmbackend-fgt7.onrender.com/crm/create-record"
      const obj = { fname: arr[0], lname:arr[1], email: arr[2], pass: arr[3], add1: arr[4], add2: arr[5],city: arr[6], stat: arr[7], zip: arr[8] }
      Axios.post(url, obj)
          .then((res) => {
              if (res.status === 200) {
                  alert('created');
              }
              else {
                  Promise.reject();
              }
          })
          .catch((err) => alert(err));
  }


    return (
        <form onSubmit={handlesubmit} className="needs-validation" novalidate>  

              <nav class="navbar bg-dark">
                <div class="container-fluid">
                  <span class="navbar-brand mb-0 mx-auto h1 text-light p-4 fs-2">Register now</span>
                </div>
              </nav>
              <br/>
              <div className="row g-3" style={{marginLeft:'100px',marginRight:'100px'}}>
                  <div className="col">
                    <input value={fname} onChange={(e)=>setFname(e.target.value)} type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                  </div>
                  <div className="col">
                    <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                  </div>
                  <div className="col-12">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" id="inputEmail4"/>
                  </div>
                  <div className="col-md-6">
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" className="form-control" placeholder="Password" id="inputPassword4"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control" placeholder="Re-enter Password" id="inputPassword4"/>
                    {/* <p className="text-danger fs-5">{valid}</p> */}
                  </div>
                  <div className="col-12">
                    <input value={add1} onChange={(e)=>setAdd1(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="Address - Line 1 (1234 Main St)"/>
                  </div>
                  <div className="col-12">
                    <input value={add2} onChange={(e)=>setAdd2(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Address - Line 2 (Apartment, studio, or floor)"/>
                  </div>
                  <div className="col-md-6">
                    <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" className="form-control" placeholder="City" id="inputCity"/>
                  </div>
                  <div className="col-md-4">
                    <select value={stat} onChange={(e)=>setStat(e.target.value)} id="inputState" className="form-select">
                      <option selected>State</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <input value={zip} onChange={(e)=>setZip(e.target.value)} type="text" className="form-control" placeholder="Pin" id="inputZip"/>
                  </div>
                  <div className="col-12">
                    <button onClick={handleregister} className="btn btn-primary my-2">Confirm Registration</button>
                  </div>
                  <a href='/' className="btn btn-secondary my-2">Already have an account? Login here.</a>
              </div>
        </form>
    )
}