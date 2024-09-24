import React from "react";
import { useLoaderData } from "react-router-dom";


export default function Github() {

    let data = useLoaderData();

    console.log(data);
    

    return(
        <>
        
          <div className= " h-96 p-4 capitalize bg-black text-3xl text-lime-400 flex flex-col justify-between items-center ">
          <div className="">
              github followers: {data.followers}
          </div>

          <div className="">
             <img src={data.avatar_url} alt="git image" width={"300px"} />
          </div>
          </div>

        </>
    )
}