import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const AllpostByUser = ()=>{

    const [userpost, setUserpost] = useState([])

    const fetchUserPosts =async() =>{
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/alluser`,{
                headers:{
                    authorization: localStorage.getItem('userId')
                }
            })
            setUserpost(res.data.posts)
            console.log(res);
            
        } catch (error) {
            
        }
    }
    console.log(userpost);

useEffect(()=>{fetchUserPosts()},[])


    return(
    <>
        {userpost && userpost.map((post)=>{
            return ( 
                <div key ={post.id}>
                    <Link to ={`/post/${post.id}`}>Title:{post.title}</Link>
                    <h1>Content:{post.content}</h1>
                    <button id='delBtn'value={post.id} onClick={()=>{
                        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/post/${post.id}`)
                    }} >Destroy</button>
                    

                </div>
                
                )
        })}
    </>
    )
}

export default AllpostByUser