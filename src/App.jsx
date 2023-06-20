import Header from './Header';
import Footer from './footer';
import Createnote from './Createnote';
import Note from './Note';
import './App.css';
import { useState } from 'react';

function App() {
const [additem,setitem]=useState([]);

const addevent=(note)=>{
// console.log(note);
setitem((preval)=>{
  // console.log(preval,note);
  console.log(...preval,note);
return [...preval,note]
})
// console.log(note); 
}


const deletecontent=(id)=>{
  setitem((preval)=>{
    preval.filter((value,indx)=>{
      console.log(value);
      return indx!==id;
    })
  })


  // additem.filter((val,ind)=>{
  //   return ind!==id;
  // })

  // setitem((preval)=>{
  //   console.log(preval)
  // })

  console.log(id);
}


  return (
    <>
    <Header/>
    <Createnote addeventnum={addevent}/>
    {
      additem.map((val,index)=>{ 
        return <Note key={index} id={index} title={val.title} content={val.content} 
        deletelist={deletecontent} />
      
      })

    }
    <Footer/>


    </>
    
  );
}

export default App;
