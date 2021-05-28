import axios from 'axios'
import {useState, useContext} from 'react'
import {UserContext} from '../Context/UserContext'

const Singup = () => {

    const {userState} = useContext(UserContext)
    const [user,setUser] = userState

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] =useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/create`, {
            name: name,
            email: email,
            password: password,
        })
        console.log(res)
        localStorage.setItem('userId', res.data.encryptedId)
        setUser(res.data.user)
    }

    return(
        <div className="SingupContainer">
            <div className="SignupFormContainer">
                <h1>Create Account</h1>
                <form className="loginForm" onSubmit={submitHandler}>
                    <input className="singupFormInput" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="singupFormInput" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="singupFormInput" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="btn" type="submit" value="submit" />
                </form>

            </div>

        </div>
    
    )
}

export default Singup