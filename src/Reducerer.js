import React,{useReducer} from 'react'


const arr=["red","green","yellow","blue","violet","pink","orange"]
const Reducerer = () => {

const[state,dispatch]=useReducer(reducer,initialValues)

const initialValues={
    count:0,
    color:white
}

function adding(){
    dispatch({
        type:"STATE",
        e:state.count+1
    });
}

function removing(){
    dispatch({
        type:"STATE",
        e:state.count-1
    });
}

function reducer(state,dispatch){
    switch(dispatch.type){
        case "STATE":{
            return{
                ...state,
                count:dispatch.e.count,
            }
        }
}
  return (
    <div>
      <button onClick={adding}>INCREMENT</button>
      <button onClick={removing}>DECREMENT</button>
      <ul>
        {
            arr.map((value)=>{
                <option>{value}</option>
            })
        }
      </ul>
    </div>
  )
}
}

export default Reducerer
