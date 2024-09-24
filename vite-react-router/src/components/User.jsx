import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    
    const {id} = useParams();

    return (
        <>
           
          <div className="bg-indigo-400 text-3xl text-slate-700 text-center">user: {id}</div>
        </>
    );
}