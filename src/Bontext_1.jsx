import React,{useContext}from 'react';
import'./App.css';
import { UserContext } from './Reducing';


const Bontext_1 = () => {
  const usage =useContext(UserContext)
  return (
    <div>
      <h3>{usage}</h3>
    </div>
  )
}

export default Bontext_1;
