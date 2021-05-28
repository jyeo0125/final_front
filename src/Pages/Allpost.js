import axios from 'axios'
import{useEffect,useState} from 'react'

const AllPost = () => {
    
    const[allposts, setAllposts] = useState([])

    const fetchAllPosts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/all`)
        .then((response)=>{
            console.log(response);
            setAllposts(response.data.posts);
        })
    }
    console.log(allposts);   
    useEffect(() => {fetchAllPosts()},[])
    return(
    <div className='allpostcon'>
        {allposts && allposts.map((post,i)=>{
            return ( 
                <div className='allpostcon2'key ={post.id}>
                    <h1 >Title:{post.title}</h1>
                    <hr></hr>
                    <h2 >{post.content}</h2>
                </div>
                )
        })}
    </div>
        
    )
}

export default AllPost