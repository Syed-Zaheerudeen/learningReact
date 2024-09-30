import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App.jsx'
import TodoStore from "./store/TodoStore"
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={TodoStore}>
    <App />
  </Provider>,
)
