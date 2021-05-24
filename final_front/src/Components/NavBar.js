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

            {localStorage.getItem('userId') ?
            <>
            <Link className='navLink' to='/post/create'>Create Post</Link>
            <span  onClick={() => logout()}>
                <Link className="navLink" to="/">Logout</Link>
            </span>
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