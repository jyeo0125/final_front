import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const SinglePost = (props)=>{
    const [posts,setPosts] = useState('')
    const {id} = useParams()


    const fetchPosts = ()=> {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`)
            .then((res)=>{
                setPosts(res.data.post)
                console.log(res);
               
            })
            
            
        } catch (error) {
            console.log(error);
        }
    }
    console.log(posts);
    useEffect(()=>{fetchPosts()},[])
    
    return(
       
           <h1>h1</h1>
        
       
    )
}

export default SinglePost