import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const SinglePost = ()=>{
    let {id} = useParams()
    const [singleposts,setsinglePosts] = useState('')
    const [editTitle,setEditTitle] = useState('')
    const [editContent,setEditContent] =useState('')


    const fetchPosts = ()=> {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/single/${id}`)
            .then((response)=>{
                setsinglePosts(response.data.post)
                console.log(response.data);
                console.log(id);
            })
            
            
        } catch (error) {
            console.log(error);
        }
    }
    console.log(singleposts);
    useEffect(()=>{fetchPosts()},[])
// submithandler function finish
    const submitHandler = (e)=>{
        e.preventDefault()
    }
    
    return(
        // form change
        <div className='editcon'>
            <input value={editTitle} className='singleinput'onChange={(e) => setEditTitle(e.target.value)}/>
            <input value={editContent}className='singleinput' onChange={(e) => setEditContent(e.target.value)}/>
            <input className='btn' type='submit' value='Update'/>
        </div>
        
    )
}

export default SinglePost