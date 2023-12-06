// import React,{useState,useEffect} from 'react';
// // import axios from 'axios';

// const Api_Fetch = () => {
//     const[state,setState]=useState();
//     useEffect(()=>{
//         async function getdate(){
//         const responsing=await fetch('https://fakestoreapi.com/products').then((response)=>response)
//     .then(data=>setState(data));
//     console.log(responsing);

//         }
//         getdate();
//     },[]);

//   return (
//     <div className='display'>
//         {
//             data.map((item)=>{
//                 console.log(item);
//             })
//         }
      
//     </div>
//   )
// }

// export default Api_Fetch;


import React, { useState,useEffect } from 'react';

import axios from'axios';


const Api_Fetch = () => {

    const[state,setState] = useState([]);

    useEffect(()=>{
        async function getdate(){

            const response=await axios.get('https://fakestoreapi.com/products');
            setState([...state,response]);
        }
        getdate();
    },[]);
    console.log(state);
  return (
   <>
   {
    state?.map((value)=>{
       return value.data.map((data)=>
       {
        return (
            <div id='product'>
                <h3>{data.title}</h3>
                <img src={data.image} id='pic'/>
            </div>
        )
       })
        
    })
   }
   </>
    
  )
}

export default Api_Fetch
