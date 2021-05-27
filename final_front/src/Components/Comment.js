import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../Context/UserContext'

const Comment =(props)=>{
    const[userCheck, setuserCheck] = useState(false)
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState

    const authCheck =  async(id)=>{
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/usercheck`,{
            headers:{
                authorization: localStorage.getItem('userId')
            }
        })
        console.log(response);
        if(response.data.user === id){
            console.log("matched");
            setuserCheck(true)
            return true
        }else{
            return false
        }
    }

    useEffect(() => {
        authCheck()
    },[])
    
    const destroyCommnet = async (id) => {
        let res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/post/comment/${id}`)
        console.log(res);
        // props.getPost()
    }

console.log(props);
    return(
        <div className='singlecommnetcon'>
            <div>
                <h2>{props.comment.content}</h2>
            </div>
            {userCheck && <button onClick={() => destroyCommnet(props.comment.id)}>Delete</button>}
        </div>
    )
}


export default Comment