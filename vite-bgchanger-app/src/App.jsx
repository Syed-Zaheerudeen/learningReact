import { useState } from "react";
import "./index.css";

function App() {

  const [bgcolor,setBgcolor] = useState(" bg-blue-500 "); 
  const [orangeBg,setOrangeBg] = useState(" bg-black"); 
  const [roseBg,setRoseBg] = useState(" bg-black "); 
  const [blueBg,setBlueBg] = useState(" bg-blue-500 "); 
  const [purpleBg,setPurpleBg] = useState(" bg-black "); 
  const [greenBg,setGreenBg] = useState(" bg-black "); 

  const [orangeTxt,setOrangeTxt] = useState(" text-orange-500 "); 
  const [roseTxt,setroseTxt] = useState(" text-rose-500 "); 
  const [blueTxt,setBlueTxt] = useState(" "); 
  const [purpleTxt,setPurpleTxt] = useState(" text-purple-500 "); 
  const [greenTxt,setGreenTxt] = useState(" text-green-500 "); 

  const [prev,setPrev] = useState("blue");
  
  function changeCurr(color) {
      
      if(color == prev) return;
      
      if(color == "orange") {
        setBgcolor(" bg-orange-500 ");
        setOrangeBg(" bg-orange-500 ");
        setOrangeTxt(" ");  
        changePrev();
      } else if(color == "blue") {
        setBgcolor(" bg-blue-500 ");
        setBlueBg(" bg-blue-500 ");
        setBlueTxt(" ");  
        changePrev();
      } else if(color == "rose") {
        setBgcolor(" bg-rose-500 ");
        setRoseBg(" bg-rose-500 ");
        setroseTxt(" ");  
        changePrev();
      } else if(color == "green") {
        setBgcolor(" bg-green-500 ");
        setGreenBg(" bg-green-500 ");
        setGreenTxt(" ");  
        changePrev();
      } else if(color == "purple") {
        setBgcolor(" bg-purple-500 ");
        setPurpleBg(" bg-purple-500 ");
        setPurpleTxt(" ");  
        changePrev();
      }

      
     setPrev(color);
      
  }

  function changePrev() {
     if(prev == "blue") {
        setBlueBg(" bg-black ");
        setBlueTxt(" text-blue-500 ");
     }

     if(prev == "orange") {
      setOrangeBg(" bg-black ");
      setOrangeTxt(" text-orange-500 ");
     }

     if(prev == "green") {
      setGreenBg(" bg-black ");
      setGreenTxt(" text-green-500 ");
     }

     if(prev == "rose") {
      setRoseBg(" bg-black ");
      setroseTxt(" text-rose-500 ");
     }

     if(prev == "purple") {
      setPurpleBg(" bg-black ");
      setPurpleTxt(" text-purple-500 ");
     }
  }

  

  return (
    <>
      <div className= {" w-screen h-screen pb-7 flex justify-center items-end " + bgcolor }  >
        <div className=" w-3/4 h-14 rounded-xl bg-lime-300 font-bold  flex justify-center items-center gap-20">
          <button className={" pt-2 pb-2 pl-4 pr-4 rounded-full capitalize " + orangeBg + orangeTxt } onClick={() => changeCurr("orange")} >orange</button>
          <button className={" pt-2 pb-2 pl-4 pr-4 rounded-full capitalize " + roseBg + roseTxt } onClick={() => changeCurr("rose")} >rose</button>
          <button className={" pt-2 pb-2 pl-4 pr-4 rounded-full capitalize " + blueBg + blueTxt } onClick={() => changeCurr("blue")} >blue</button>
          <button className={" pt-2 pb-2 pl-4 pr-4 rounded-full capitalize " + purpleBg + purpleTxt } onClick={() => changeCurr("purple")} >puple</button>
          <button className={" pt-2 pb-2 pl-4 pr-4 rounded-full capitalize " + greenBg + greenTxt } onClick={() => changeCurr("green")} >green</button>
        </div>
      </div>
    </>
  );
}

export default App;
