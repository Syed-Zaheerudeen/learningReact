import './App.css'
import Conf from './envConfig/conf';
import Header from './components/header';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import authServices from "./appwrite/auth"
import {useDispatch} from "react-redux";
import { login,logOut } from './store/authSlice';

function App() {

   const [loading,setLoading] = useState(true);
   

   useEffect(() => {

      authServices.getCurrentUser()
      .then((userData) => {                    
          if(userData) {
            useDispatch(login(userData));
          } else {
            useDispatch(logOut());  
          }
      })
      .finally(() => {
         setLoading(false);  
      });

   }, []);
  

  return (
    <>
       <Header />
       <h1 className='text-3xl text-indigo-700 font-extrabold'>MEGA PROJECT</h1>
       <Footer />

    </>
  )
}

export default App
