import React, {useState} from "react";
import Axios from "axios";

function PaymentTableRow(props)
{
    const handleDelete = () => {
        const url = "https://crmbackend-fgt7.onrender.com/crm/delete-payment/" + _id;
        Axios.delete(url)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record deleted successfully..");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })

        .catch((err)=>alert(err));
    }
    const {_id, number, date, amount, mode, reference} = props.obj; 
    return(
        
            <tr>
              <td>{reference}</td>
              <td>{number}</td>
              <td>{date}</td>
              <td>{amount}</td>
              <td>{mode}</td>
              
              <td>
              <a href={`./edit-payment/${_id}`}><button class="btn btn-sm btn-success m-1">Edit</button></a>
              <button onClick={handleDelete} class="btn btn-sm btn-danger m-1">Delete</button>
                </td>
            </tr>
        
    )
}
export default PaymentTableRow;