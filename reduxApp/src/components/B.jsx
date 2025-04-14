import React from 'react'
import { useRef } from 'react';
import { appStore } from '../store';

function B() {
    const inputRef=useRef();
    function fnClick(){
        const location = inputRef.current.value;
        appStore.dispatch({type:"LOCATION_VALUE",payload:location})
         
    }
  return (
    <div>
          <p>
            <b>Location : </b>
            <input type='text' ref={inputRef}/>
            <button onClick={fnClick}>Submit</button>
        </p>
    </div>
  )
}

export default B