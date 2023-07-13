import { useParams } from "react-router-dom";
import  Payform from "./Payform";
import {useEffect, useState} from 'react';
import Axios from 'axios';

function PaymentUpdate() {
    const [obj,setObj] = useState({});
    //obj = {_id:"" , name:"paras", email:"paras@gmail.com", rollno:"45"}
    const [updatedData, setUpdatedData] = useState([]);

    const {id} = useParams();

    const getState = (childData) => {
        setUpdatedData(childData);
    }

    const handleSubmit = () => {
        const url = "https://crmbackend-fgt7.onrender.com/crm/update-payment/" + id;
        const updatedObj = {number:updatedData[0],date:updatedData[1],amount:updatedData[2],mode:updatedData[3], reference:updatedData[4],desc:updatedData[5]};
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
        const url = "https://crmbackend-fgt7.onrender.com/crm/update-payment/" + id;
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
                <Payform getState={getState} btnName="Update Student" noValue={obj.number} datValue={obj.date} amtValue={obj.amount} modeValue={obj.mode} refValue={obj.reference}  descValue={obj.desc} />
            </form>
        </div>
    )
}
export default PaymentUpdate;