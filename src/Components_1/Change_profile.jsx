import React from 'react';
import { useState } from 'react';

const Change_profile = (props) => {
  const [newthing,setNewthing]=useState("")
    return (
    <div>
      <input onChange={(event)=>setNewthing(event.target.value)}/>
      <button onClick={()=>{props.setUsername(newthing)}}>Shift</button>
    </div>
  )
}
export default Change_profile;
