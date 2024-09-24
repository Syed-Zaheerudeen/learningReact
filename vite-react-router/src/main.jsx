import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

const router = createBrowserRouter(
   
    createRoutesFromElements(
         
        <Route path='/' element={<App />} >
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user/:id' element={<User />} />
            <Route 
                loader={() => (
                    fetch("https://api.github.com/users/Syed-Zaheerudeen").then((res) => res.json())
                   )
                }

                path='github'
                element={<Github />}
            />
        </Route>    
    )

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider  router={router} />
  </StrictMode>,
)
