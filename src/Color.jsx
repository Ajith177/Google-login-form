import React,{useState} from 'react';

const Color = () => {

const color=["blue","red","green","yellow","violet","orange","pink","cyan","white"];

const [name,setName]=useState("");

// function colorchange(e){
//     setName(e);
// }

  return (
    <div>
      <select onChange={(e)=>setName(e.target.value)}>
      <option>SELECT-COLOR</option>
      {
        color.map((value)=>{
            return <option>{value}</option>
        })
      }
      </select>

      <div className="prajith" style={{backgroundColor: name}}></div>

    </div>
  )
}

export default Color;
