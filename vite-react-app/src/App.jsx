import { useState } from "react";


function App({def}) {
    let [count,setCount] = useState(def);

    function increment() {
      if(count < 20) {
        count++;
        setCount(count);
      } else {
        alert("you cannot go above 20");
      }
    }

    function decrement() {
     if(count > 0) {
       setCount(count - 1);
     } else {
       alert("you cannot go below 0"); 
     }
   }
   
    
    return (
     <>
 
        <div style = {{height: '100vh', backgroundColor: '#000',display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          
        <h1 style = {{color: 'beige'}}>count: {count}</h1>
          <div style={{display: 'flex', gap: '10px', flexDirection: 'column', width: '155px'}}>
            <button onClick={increment} style={{background: 'greenyellow', color: 'black', padding: '8px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bolder'}}>add</button>
            <button onClick={decrement} style={{background: 'tomato', color: 'black', padding: '8px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bolder'}}>remove</button>
          </div>
        
         
        </div>       
     
     </>
  )
}

export default App
