import React, {useState} from "react";
import Axios from "axios";

function EmployeeTableRow(props)
{
    const handleDelete = () => {
        const url = "https://crmbackend-fgt7.onrender.com/crm/delete-employee/" + _id;
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
    const {_id, name, role, phone, email} = props.obj; 
    return(
        
            <tr>
              <td>{name}</td>
              <td>{role}</td>
              <td>{phone}</td>
              <td>{email}</td>
              
              <td>

              <button onClick={handleDelete} class="btn btn-sm btn-danger m-1">Delete</button>
                </td>
            </tr>
        
    )
}
export default EmployeeTableRow;