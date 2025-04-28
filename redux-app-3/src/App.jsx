import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Div from './Div'

function App() {
  const [son,setson] =useState(" ")
  const ctx = createContext();

function getUsers(){
  fetch("https://jsonplaceholder.typicode.com/users").then(
    (res)=>res.json()
  ).then(
    (j)=>setson(j)
  )
}
  return (
    <>
    <ctx.Provider value={son}>
      <h1>Hello Redux !</h1>
      <button id="photos" onClick={getUsers}>Get Photos</button>
      <button id="users">Get Users</button>
      <div>
      {console.log(ctx)
      }
      </div>
      <Div/>
      </ctx.Provider>
    </>
  )
}

export default App
