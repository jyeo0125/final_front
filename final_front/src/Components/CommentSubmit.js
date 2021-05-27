import axios from "axios"
import { useState } from "react"

const CommentSubmit = (props) => {
    const [content, setContent] =useState('')

    const commentSubmitHandler = async (e) =>{
        e.preventDefault()

        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/${props.question.id}/comment`, 
        {
            content: content
        },
        {
            headers: {
                authorization: localStorage.getItem('userId')
            }
        })
        console.log(response)
        props.getPost()
        setContent('')
    }
    
    
    
    return(
        <form className='commnetform' onSubmit={commentSubmitHandler}>
            <input type ='text' value={content} onChange={(e)=>setContent(e.target.value)} />
            <input type='submit' value='create'/>

        </form>
    )
}

export default CommentSubmit