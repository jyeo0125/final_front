import axios from "axios"
import { useState } from "react"
import {useParams} from 'react-router-dom'

const CommentSubmit = (props) => {
    const [content, setContent] =useState('')
    let {id} = useParams()

    const commentSubmitHandler = async (e) =>{
        e.preventDefault()

        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/post/${id}/comment`, 
        {
            content: content
        },
        {
            headers: {
                authorization: localStorage.getItem('userId')
            }
        })
        console.log(response)
        // getPost()
        setContent('')
    }
    
    
    
    return(
        <form className='commnetform' onSubmit={commentSubmitHandler}>
            <input type ='text' value={content} onChange={(e)=>setContent(e.target.value)} />
            <input  className='btn'type='submit' value='create'/>

        </form>
    )
}

export default CommentSubmit