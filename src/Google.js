import React,{useState} from 'react'


const Google = () => {
    const [tname,setName]=useState("");
    const[pass,setPass] = useState("");
    const[list,setList]=useState([]);

    function naming(e){
        setName(e.target.value);
    }

    function passing(e){
        setPass(e.target.value);
    }

    function login_form(){
        setList([...list,{tname,pass}]);
        setName("");
        setPass("");
    }
    console.log(list);
    

  return (
    <div className='complete'>
        <label for="name" className='page'><u>LOGINPAGE</u></label><br/>
        <input type="text" className='text-box' id='textbox'value={tname}  onChange ={naming} placeholder="Username" autoComplete='off'autoFocus/><br/>
        <input type="password" className='password-box' id='password' value={pass} onChange={passing} placeholder="Password"  autoComplete='off'autoFocus/><br/>
        <input type="password" className='password-boxing' id='confirm-password' placeholder='Confirm Password'/><br/>
        <label for="condition" className='condition-1'><u>Already a user</u></label><br/>
        <button className='login' onClick={login_form}>LOGIN</button><br/>
        <label for="condition" className='condition-2'><u>New user</u></label><br/>
        <button className='Account'>CREATE ACCOUNT</button>
    </div>
  )
}

export default Google;
