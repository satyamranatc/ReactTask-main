import { useState } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)
  let [LoginStatus, setLoginStatus] = useState(false)

  return (
    <>

       {
         LoginStatus?<Home/> : <Login setLoginStatus= {setLoginStatus} /> 
       }
     
    </>
  )
}

export default App