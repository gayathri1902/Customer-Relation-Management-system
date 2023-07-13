import React, {useState} from "react";
import Axios from "axios";

function AdminTableRow(props)
{
    const handleDelete = () => {
        const url = "https://crmbackend-fgt7.onrender.com/crm/delete-admin/" + _id;
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
    const {_id, name, phone, email} = props.obj; 
    return(
        
            <tr>
              <td>{name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              
              <td>
              <button onClick={handleDelete} class="btn btn-sm btn-danger m-1">Delete</button>
                </td>
            </tr>
        
    )
}
export default AdminTableRow;