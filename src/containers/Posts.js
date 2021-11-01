 import React, {useState, useEffect} from 'react'

 export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(resp => resp.json())
        .then(setPosts)
    })
     return(
         <div>
             Posts page
             {posts[0] ? <img src={posts[0].photo_url}></img> : <h3>Loading...</h3>}
         </div>
     )
 }