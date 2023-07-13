import React, {useState} from "react";
import Axios from "axios";

function QuoteTableRow(props)
{
    const handleDelete = () => {
        const url = "https://crmbackend-fgt7.onrender.com/crm/delete-quote/" + _id;
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
    const {_id, client,dat,expire,total,price,stat,qty} = props.obj; 
    return(
        
            <tr>
              <td>{client}</td>
              <td>{dat}</td>
              <td>{expire}</td>
              <td>{total}</td>
              <td>{price}</td>
              <td>{stat}</td>
              <td>{qty}</td>
              
              <td>
              <a href={`./edit-quote/${_id}`}><button class="btn btn-sm btn-success m-1">Edit</button></a>
              <button onClick={handleDelete} class="btn btn-sm btn-danger m-1">Delete</button>
                </td>
            </tr>
        
    )
}
export default QuoteTableRow;