
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
import AllPost from './Pages/Allpost'
import SinglePost from './Pages/SinglePost';
import AllpostByUser from './Pages/AllpostByUser'



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
  useEffect(userFetch,[])
  return (
    <div>
      <NavBar/>
      <Route exact path ='/'>
        <Home/>
      </Route>
      <Route  exact path ='/post/all'>
        <AllPost/>
      </Route>
      

      <Route exact path ='/login'>
        {user ? <Redirect to='/'/>: <Login/> }
      </Route>
      
      <Route exact path ='/singup'>
        {user ? <Redirect to='/'/>:<Singup/>}
      </Route>
      
      <Route exact path ='/post/create'>
          <CreatePost/>
      </Route>

      <Route exact path ='/post/:id'>
        <SinglePost/>
      </Route>
      <Route exact path='/post/alluser'>
        <AllpostByUser/>
      </Route>
    </div>
  );
}

export default App;
