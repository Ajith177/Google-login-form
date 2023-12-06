import React from 'react';
import './App.css';
import { UserContext } from './Reducing';

const Context = () => {
  return (
    <div>
        <UserContext.Consumer>
            {
                gulam=>{
                    return(
                        <h1>
                        {gulam}
                        </h1>
                    )
                }
            }
        </UserContext.Consumer>
      
    </div>
  )
}

export default Context
