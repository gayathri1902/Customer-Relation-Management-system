import React, {useState,useEffect} from "react"
import pic1 from './pic1.png'
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom"

export const Login = () => {
    
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const history = useNavigate();
  const [arr,setArr] = useState([]);
  const [url,setUrl] = useState('');
  
  useEffect(()=>{
    //const url = "http://localhost:4500/crm/login";
    Axios.get("https://crmbackend-fgt7.onrender.com/crm/login")
    .then((res)=>{
        if(res.status===200)
        {
            setArr(res.data);
        }
        else{
            Promise.reject();
        }
    })
    .catch((err)=>alert(err));
},[])

  const submit = () => {
    const len = arr.length;
    let i = 0;
    arr.map((val,ind)=>{
      if(val.email==email) {
        if(val.pass==pass) {
          // history("./Dashboard")
          setUrl('/Dashboard');
          return;
        }
        else alert("Invalid Password");
      }
      i=i+1;
    })
    if(i==len)
      alert("Email not found");
  }

  return (
      <div>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"></link>
              <nav class="navbar bg-dark">
                <div class="container-fluid">
                  <span class="navbar-brand mb-0 h1 text-light p-4">Customer Relationship Management System</span>
                </div>
              </nav>
              <br/><br/>

        <div style={{display:'flex'}}>
          <div style={{marginLeft:'80px'}}>

            <form className="needs-validation" novalidate>  
              <br/>
              <h3 style={{marginLeft:'50px'}}>Sign in</h3>
              <hr style={{marginLeft:'50px',width:'400px'}}/>
                <div className="input-group mb-3" style={{marginLeft:'50px'}}>
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-user"></i></span>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control p-3" placeholder="name@email.com" style={{maxWidth: '500px'}} id="fni"/>
                </div>

                <div className="input-group mb-3" style={{marginLeft:'50px'}}>
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-unlock"></i></span>
                  <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" className="form-control p-3" placeholder="abcd123" style={{maxWidth: '500px'}} id="fni"/>
                </div>

                <a href={url} onClick={submit} className="btn btn-primary my-2 ms-5">Login</a>
                <a href="/Register" className="btn btn-secondary my-2 ms-3">Don't have an account? Register here.</a>
              </form>
          </div>

          <div>
            <img src={pic1} height={600} width={850}/>
          </div>
          
        </div>
      </div>
    )
}