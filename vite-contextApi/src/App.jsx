import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <UserContextProvider>
         
       <Login />
       <Dashboard />

    </UserContextProvider>
  )
}

export default App
