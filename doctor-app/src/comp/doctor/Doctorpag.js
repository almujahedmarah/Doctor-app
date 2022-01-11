import React from "react";
import Table from 'react-bootstrap/Table'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

export default function Doctorpag() {
    const addapoint=()=>{
        
    }
  return (
    <div className="DOCTORTABL">
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>@mdo</td>
            <td><AddCircleOutlineIcon onClick={()=>addapoint()} /><RemoveCircleOutlineIcon/><EditIcon /></td>
          </tr>
    
        </tbody>
      </Table>
    </div>
  );
}
