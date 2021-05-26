import axios from 'axios'
import {Link} from 'react-router-dom'
import{useEffect,useState} from 'react'

const AllPost = () => {
    
    const[allposts, setAllposts] = useState([])

    const fetchAllPosts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/all`)
        .then((response)=>{
            // console.log(response.data.posts);
            setAllposts(response.data.posts)
        })
     console.log(allposts);   
    }
    useEffect(() => {fetchAllPosts()},[])
    return(
        <>
        {allposts && allposts.map((post)=>{
            return ( 
                <div key ={post.id}>
                    <h1 >Title:{post.title}</h1>
                    <h2 >{post.content}</h2>

                </div>
                
                )
        })}
        </>
    )
}

export default AllPost