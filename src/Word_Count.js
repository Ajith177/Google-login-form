import React, { useState,useEffect } from 'react'

const Word_Count = () => {

    const[use,SetUse]=useState(0);


    const[usage,setUsage]=useState("ajith");
    useEffect(()=>{
      console.log("google");

    },[]);

    function usage_purpose(event) {
        SetUse(event.target.value.length);
    }


  return (
    <div>
        <p>{use}</p>
      <input type="text" className="texbox-inside" onChange={usage_purpose} placeholder="Enter the input"/>
    </div>
  )
}

export default Word_Count
