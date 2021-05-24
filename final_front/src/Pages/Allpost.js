// import axios from 'axios'
// import {Link} from 'react-router-dom'
// import{useEffect,useState} from 'react'

// const AllPost = () => {
    
//     const[allposts, setAllposts] = useState([])

//     const fetchAllPosts = () => {
//         axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/all`)
//         .then((response)=>{
//             // console.log(response.data.posts);
//             setAllposts(response.data.posts)
//         })
//     //  console.log(allposts);   
//     }
//     useEffect(() => {fetchAllPosts()},[])
//     return(
//         <div></div>
//     )
// }

// export default AllPost