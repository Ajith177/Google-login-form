import React,{useState} from "react";
import "./style.css";

export default function Inlustroquestion() {
  const[add,setAdd]=useState()
  const [sub,setSub]=useState()
  const [complete,setComplete]=useState([])
  return (
    <div>
      <h2>WELCOME</h2>
      <p>{complete}</p>
      <input type="text"  value={add} onChange={(e)=>setAdd(e.target.value)}placeholder="add"/><br/>
      <input type="text"  value={sub}onChange={(e)=>setSub(e.target.value)} placeholder="sub"/><br/>
      <button onClick={()=>setComplete(parseInt(add)+parseInt(sub))}>ADD</button>
      <button onClick={()=>setComplete(parseInt(add)-parseInt(sub))}>SUB</button>
      <button onClick={()=>setComplete(0)}>RESET</button>
    </div>
  );
}