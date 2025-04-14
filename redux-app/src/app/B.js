'use client'
import React, { useState } from 'react'

export function B() {
    const [location,setLocation]=useState('')
    function fnChange(event){
        setLocation(event.target.value)
    }
    function fnClick(){
    alert(location)
    }
  return (
    <div>B
        <p>
            <b>Location:</b>
        <input type='text' placeholder='location' onChange={fnChange}/>
        </p>
        <button onClick={fnClick}>Submit</button>
    </div>
  )
}

export default B