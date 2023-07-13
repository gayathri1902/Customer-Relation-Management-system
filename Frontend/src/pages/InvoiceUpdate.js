import { useParams } from "react-router-dom";
import Invform from "./Invform";
import {useEffect, useState} from 'react';
import Axios from 'axios';

function InvoiceUpdate() {
    const [obj,setObj] = useState({});
    //obj = {_id:"" , name:"paras", email:"paras@gmail.com", rollno:"45"}
    const [updatedData, setUpdatedData] = useState([]);

    const {id} = useParams();

    const getState = (childData) => {
        setUpdatedData(childData);
    }

    const handleSubmit = () => {
        const url = "https://crmbackend-fgt7.onrender.com/crm/update-invoice/" + id;
        const updatedObj = {client:updatedData[0],number:updatedData[1],year:updatedData[2],stat:updatedData[3], note:updatedData[4],dat:updatedData[5],expire:updatedData[6],item:updatedData[7], desc:updatedData[8], qty:updatedData[9], price:updatedData[10], total:updatedData[11]};
        Axios.put(url,updatedObj)
        .then((res)=>{
            if(res.status ===200){
                alert("Successfully updated")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }


    useEffect(()=>{
        const url = "https://crmbackend-fgt7.onrender.com/crm/update-invoice/" + id;
        Axios.get(url)
        .then((res)=>{
            if(res.status === 200)
            {
                setObj(res.data); //{_id,name,email,rollno}
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Invform getState={getState} btnName="Update Student" clientValue={obj.client} noValue={obj.number} yearValue={obj.year} statValue={obj.stat} noteValue={obj.note} datValue={obj.dat}  expireValue={obj.expire} itemValue={obj.item} descValue={obj.desc}  qtyValue={obj.qty} priceValue={obj.price} totalValue={obj.total}/>
            </form>
        </div>
    )
}
export default InvoiceUpdate;
