import React, { useContext, useState } from 'react';
import UserContext from '../contexts/userContext';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        setUser(username)   
       
    }
  return (
    <>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
         />
         <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />
         <button onClick={handleSubmit} >Login</button>
    </>
    
  )
}

export default Login