import React, { useState,useContext } from "react";
import UserContext from "../context/userContext";


export default function Dashboard() {
 
    const {user} = useContext(UserContext);

    if(!user) return <h3>No User Found</h3>

    return (
      <>
        
        <h3> welcome {user} </h3>

      </>
  )
    
}