import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const {userState} = useContext(UserContext)
    const[user,setUser] = userState

    const logout = () => {
        localStorage.removeItem("userId")
        setUser({})
    }

    return(
        <div className="navBarContainer">
            
            <Link className="navLink" to='/'>Home</Link>
            <Link className='navLink' to='/post/all'>All post</Link>

            {user ?
            <>
            <Link className='navLink' to='/post/create'>Create Post</Link>
            <Link className='navLink' to='/post/alluser'>User post
            
            </Link>
            <span  onClick={() => logout()}><Link className="navLink" to="/login">Logout</Link></span>
            </>
            
            :
            <>
            <Link className="navLink" to="/singup">Sing Up</Link>
            <Link className="navLink" to="/login">Login</Link> 
            </>
            }
        </div>
    )
}
export default NavBar