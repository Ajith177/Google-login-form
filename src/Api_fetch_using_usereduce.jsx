import React,{useState,useEffect,useReducer} from 'react';

const initialstate={
    Positive:"",
    values:"false",
    error_message:"",

}

const reducer=(state,action)=>{
    switch(action.type){
     case 'Positive-response':

        //  return{
        //     ...state,
        //     Positive : action['payload']
        //  }
        
        console.log("true")

     case 'Negative-response':
        console.log("false")

        // return { 
        //     error_message: action['payload']
        // }
    }
 }

const Api_fetch_using_usereduce = () => {

    const [state,setState]=useState([]);

    const [stating,dispatch]=useReducer(reducer,initialstate)


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((response)=>{
        try{
            console.log(response)
            dispatch({type:"Positive-response"})
        }
        catch(response){
            dispatch({type:"Negative-response"})
        }
    })
    },[]);

  return (

    <div style={{textAlign:'-webkit-center',Margintop:'50%'}}>
        <h2>GOOGGLE</h2>
        {
            state?.map((item)=>{
                return (
                <h2>{item.title}</h2>
                )
            })

        }
      
    </div>
  )
}

export default Api_fetch_using_usereduce;




// import { createStore } from 'redux';

 

// const reducer = (state = 0, action) => {

//   console.log('reducer called');

//   return state;

// };

 

// const store = createStore(reducer);

 

// store.subscribe(() => {

//   console.log('current state', store.getState());

// });