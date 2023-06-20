import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function Createnote(props) {

  const[note,setnote]=useState({
    title:"",
    content:""

  })

  const onchange=(event)=>{

console.log(event.target.value);
console.log(event.target.name);
const{name,value}=event.target;

setnote((preval)=>{
return{
  ...preval,
  [name]:value,
}
})
  }


  const addeventclick=()=>{
    props.addeventnum(note);
    setnote({
      title:"",
      content:""
  
    });
  }


  return (
    <>
    <div className='createnote'>
    <input type='text' onChange={onchange} value={note.title} name="title" placeholder='Title' autoComplete='off'/>
    <textarea rows=""   onChange={onchange} name='content' value={note.content} column="" placeholder='your note'></textarea>
    <Button onClick={addeventclick} variant="outlined"><AddIcon/></Button>


    </div>
 

      
    </>
    
  );
}

export default Createnote;
