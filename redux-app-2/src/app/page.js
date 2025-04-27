'use client'
import {userAction} from '../actions/userAction'

export default function Home() {
  function fnGetUsers(){
    userAction();
  }
  return (
    <div>
      <button className='btn btn-primary' onClick={fnGetUsers}>Get Users</button>
      <button className='btn btn-success'>Get Photos</button>
      <button className='btn btn-danger'>Get Posts</button>
    </div>
  );
}
