import axios from 'axios'
import {useState} from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const submitHandler = async(e) => {
        e.preventDefault()
        try {
            let userId = localStorage.getItem('userId')
            let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/post/create`, {
                title: title,
                content: content,
                
            },{
                headers:{
                    authorization:userId
                }
            })
            console.log(res)
            console.log(userId);;
        } catch (error) {
            console.log(error);
        }
    }
    
    
    return(
        <>
        <h1> Post create !</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="content" value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
        </>
    )
}

export default CreatePost