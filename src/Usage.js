import React, { useReducer } from 'react';

const coloring=["red","blue","green","yellow","pink","tristle","violet"]

const Usage = () => {

    const initialValues ={
        count:0,
        color:"white"   
    }

    function handle_sub(){
        dispatch({
            type:"Count",
            t:{count:state.count-1}
        });
    }

    function reducer(state,dispatch){
        switch(dispatch.type){
            case"Count":{
                return {
                    ...state,
                    count:dispatch.t.count,
                }
            }
        }
    }

    const [state,dispatch]=useReducer(reducer,initialValues);

    function handle_add(){
        dispatch({
            type:"Count",
            t:{count:state.count+1}
        });
    }

  return (
    <div>
        <h2>Increment & Decrement</h2>
        <p>{state.count}</p>
        <button onClick={handle_add}>+</button>
        <button onClick={handle_sub}>-</button>
        {/* <select value={}onChange={}> SELECTING_THE_COLORS */}
            {
                coloring.map((value)=>{
                    <option>{value}</option>
                    console.log(value);
                })
            }
        {/* </select> */}
    </div>
  )
}

export default Usage
