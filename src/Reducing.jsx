// import React,{useReducer} from 'react';

// const initialstate=0

// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//             return state+1
//         case 'decrement':
//             return state-1
//         case 'reset':
//             return initialstate
//     }

// }

// const Reducing = () => {

//     const[state,dispatch]=useReducer(reducer,initialstate)

//   return (
//     <div>
//         <p>{state}</p>
//       <button onClick={()=>dispatch('increment')}>INCREMENT</button>
//       <button onClick={()=>dispatch('decrement')}>DECREMENT</button>
//       <button onClick={()=>dispatch('reset')}>RESET</button>
//     </div>
//   )
// }

// export default Reducing;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React,{useReducer} from 'react'

// const initialstate=0;

// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//             return state+1
//         case 'decrement':
//             return state-1
//         case 'reset':
//             return initialstate
//     }
// }
// const Reducing = () => {
//     const[state,dispatch]=useReducer(reducer,initialstate)
//   return (
//     <div>
//         <h4>The counting values:{state}</h4>
//         <button onClick={()=>dispatch('increment')}>INCREMENT</button>
//         <button onClick={()=>dispatch('decrement')}>DECREMENT</button>
//         <button onClick={()=>dispatch('reset')}>RESET</button>
       
//     </div>
//   )
// }

// export default Reducing

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------............................------------------__________________________________________________________________________--------------------------------------



// useContext in react................... 


import React from 'react';
import './App.css';
import Context from './Context';
import Bontext_1 from './Bontext_1';

export const UserContext=React.createContext();

const Reducing = () => {
  return (
    <div style={{textAlign:'-webkit-center',MarginTop:'15%'}}>
        <UserContext.Provider value={'Ajith'}>
        <Context/>
        <Bontext_1/>
        </UserContext.Provider>
      
    </div>
  )
}

export default Reducing;
