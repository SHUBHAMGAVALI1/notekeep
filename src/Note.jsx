import React from 'react';
import Button from '@mui/material/Button';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
function Note(props) {

  const deleteitem=()=>{
    props.deletelist(props.id);
  }
  return (
    <>
    <div className='note'>
    <p>{props.title}</p>
    <p>{props.content}</p>
    <Button variant="outlined" onClick={deleteitem}><DeleteForeverOutlinedIcon /></Button>
    


    </div>
      
    </>
    
  );
}

export default Note;
