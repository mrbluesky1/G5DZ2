import {useEffect, useState} from "react";
import {Post} from "../components/Post";

export default function PostPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setPosts(data))

    }, [])

    return(
        <ul>
            {posts.slice(0, 10).map(post => <Post post={post}/>)}
        </ul>
    )
}