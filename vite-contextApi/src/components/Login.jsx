import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

export default function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    return (
        <>
           
           <div style={{ height: "280px",width: "350px" , display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                  
                  <h1> User Login </h1>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                  <button onClick={() => setUser(username)} > submit </button>

           </div>

        </>
    )
}