import {useRef, useState} from 'react'

const App=() => {
  const [item,setItem]=useState([])
  const inputRef=useRef();
  
  function handleClick(){
   const val =inputRef.current.value;
  setItem([...item,val]);
}
  
  return (
    <>
     <input type='text' ref={inputRef}/>
     <button onClick={handleClick}>Add</button>
     <ol>
     {item.map((it,ind)=><li key={ind}>{it}</li>)}
     </ol>
    </>
  )
}

export default App
