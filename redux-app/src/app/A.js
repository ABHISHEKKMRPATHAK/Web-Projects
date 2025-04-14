'use client'
import React, { useRef } from 'react'
import { appStore } from './store';

export function A() {
//uncontrolled component

    const nameRef =useRef();
    function fnSubmit(){
        const name = nameRef.current.value;
        appStore.dispatch({type:"NAME_UPDATE",payload:name})
    }
  return (
    <div>A
        <p>
            <b>Name:</b>
        <input type='text' placeholder='name' ref={nameRef}/>
        </p>
        <button  onClick={fnSubmit}>Submit</button>
    </div>
  )
}

export default A