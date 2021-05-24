
import './App.css';
import axios from 'axios'
import { UserContext } from './Context/UserContext'
import { useEffect, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login  from './Pages/Login'
import Home from './Pages/Home'
import Singup from './Pages/Singup'
import CreatePost from './Pages/CreatePost'



function App() {
  const { userState } = useContext(UserContext)
  const [user, setUser] = userState

  const userFetch = async () => {
    const userId = localStorage.getItem('userId')
    try {
      let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/verify`, {
        headers: {
          authorization: userId
        }
      })
      
      if (res.data.user) {
        setUser(res.data.user)
        console.log(res.data.user)
        
      }
    } catch (error) {
      console.log(error)
    
    }
  }

  return (
    <div>
      <NavBar/>
      <Home/>
      <Login/>
      <Singup/>
      <CreatePost/>
     
     
    </div>
  );
}

export default App;
