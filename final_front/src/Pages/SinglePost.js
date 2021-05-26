import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const SinglePost = ()=>{
    let {id} = useParams()
    const [singleposts,setsinglePosts] = useState('')
    const [title,setTitle] = useState('')
    const [content,setContent] =useState('')


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

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`,{title,content},{
            id:id
        }).then((response)=>{
            console.log(response);
        })
    }
    
    return(
    <>    
        <div>
            <h3>Title:{singleposts.title}</h3>
            <h3>Content:{singleposts.content}</h3>
        </div>

        
        <form className='editcon' onSubmit={submitHandler}>
            <input value={title} className='singleinput'onChange={(e) => setTitle(e.target.value)}/>
            <input value={content}className='singleinput'  onChange={(e) => setContent(e.target.value)}/>
            <input className='btn'  type='submit' value='Update'/>
        </form>
    </>    
    )
}

export default SinglePost