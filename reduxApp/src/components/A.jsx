import React, { useState } from 'react'
import { appStore } from '../store';

const A=()=> {
    const [name,setName]=useState();
   function fnChange(event){
       setName(event.target.value);
   }
   function fnClick(){
    appStore.dispatch({type:"NAME_VALUE",payload:name})
   }
  return (
    <div>
        <p>
            <b>Name : </b>
            <input type='text' onChange={fnChange}/>
            <button onClick={fnClick}>Submit</button>
        </p>
    </div>
  )
}

export default A