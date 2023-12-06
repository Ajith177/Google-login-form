import React,{useState} from 'react'

const Use_state_1 = () => {
    const[name,setName]=useState(true);
    function handleClick(){
        setName(!name)
            }
  return (

    <div>
      <button onClick={handleClick}>{name?"on":"off"}</button>
    </div>
  )
}

export default Use_state_1;
