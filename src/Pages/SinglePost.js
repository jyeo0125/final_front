import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Comment from '../Components/Comment'
import CommentSubmit from '../Components/CommentSubmit'

const SinglePost = (props)=>{
    let {id} = useParams()
    const [singleposts,setsinglePosts] = useState('')
    const [commnet,setCommnet] =useState(null)
    const [title,setTitle] = useState('')
    const [content,setContent] =useState('')
    const[userCheck, setuserCheck] = useState(false)
    


    const fetchPosts = ()=> {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/single/${id}`)
            .then((response)=>{
                setsinglePosts(response.data.post)
                setCommnet(response.data.post.comments)
                console.log(response);
                console.log(id);
            })
            
            
        } catch (error) {
            console.log(error);
        }
        console.log(commnet);
    }
    console.log(singleposts);
    useEffect(()=>{fetchPosts()},[])

    const submitHandler = (e)=>{
        e.preventDefault()

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`,{title,content},{
            id:id
        }).then((response)=>{
            console.log(response);
        })
    }
    
    const authCheck = async (id) =>{
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/usercheck`,{
            headers:{
                authorization: localStorage.getItem('userId')
            }
        })
        console.log(response);
        if(response.data.user === id) {
            console.log('true')
            setuserCheck(true)
            return true
        }else{ return false}

    }

    return(
    <div className='singlecon'>

    <>    
        <div className='pastcon'>
            <h3>Title:{singleposts.title}</h3>
            
            <h3>Content:{singleposts.content}</h3>
        </div>

        
        <form className='editcon' onSubmit={submitHandler}>
            <lable>Title</lable>
            <input value={title} className='singleinput'onChange={(e) => setTitle(e.target.value)}/>
            <lable>Content</lable>
            <input value={content}className='singleinput2'  onChange={(e) => setContent(e.target.value)}/>
            <input className='btn'  type='submit' value='Update'/>
        </form>

        <div>
           
                <div className="commentContainer">
                    <h1>Comments:</h1>
                    {commnet && commnet.map((comment, i) => 
                        <Comment 
                        key ={commnet.id}
                        comment={comment}
                        setsinglePosts={setsinglePosts}
                        />
                    )}
                </div>
                <br></br>
                <CommentSubmit 
                singleposts = {singleposts}
                setsinglePosts= {setsinglePosts}
                />
        </div> 

    </>    
    </div>
    )
}

export default SinglePost