// import {Link} from 'react-router-dom'
// import axios from 'axios'
// import{useEffect,useState} from 'react'
// const Home = () =>{
//     const[allposts, setAllposts] = useState([])

//     const fetchAllPosts = () => {
//         axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/all`)
//         .then((response)=>{
//             console.log(response.data.posts);
//             setAllposts(response.data.posts)
//         })  
//     }
//     useEffect(() => {fetchAllPosts()},[])
//     return(
//         <>
//         <h1> Jisu's Blog!</h1>
//         {allposts && allposts.map((post)=>{
//             return ( 
//                 <Link>{post.title}</Link>
                
//                 )
//         })}
//         </>
//     )
// }

const Home =()=>{
    return(
        <div className='homecont'>

            <h1>Welcome jisu's Blog</h1>
        </div>
    )
}

export default Home