import React, { useState } from 'react'

const Input_box = () => {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [title, setTitle] = useState([]);

    function submitting() {

        let obj={
            id:Math.floor(Math.random()*10),
            names:name,
            passwords:pass
        };

        title.push(obj)
        setName("");
        setPass("");
    }

    function deleting(id){
        const array1=title.filter((val)=>val.id!==id);
        setTitle(array1);
    }

    return (
        <div style={{textAlign:'-webkit-center',marginTop:'17%'}}>
            <label>NAME:</label>
            <input type="text" className='text-box' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter the Name" autoFocus /><br/>
            <label>PASSWORD:</label>
            <input type="password" className='text1-box' value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter the Password" autoFocus /><br/>
            <button onClick={() => submitting()}>submit</button>
            {
                title.map((item) => {
                    return (
                        <>
                        <li>{item.names}</li>
                        <li>{item.passwords}</li>
                        <button onClick={()=>deleting(item.id)}>DELETE</button>
                        <button>EDIT</button>
                        
                        </>
                    )
                })
            }
        </div>
    )
}
export default Input_box
