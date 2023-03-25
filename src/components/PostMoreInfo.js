import {useNavigate, useParams, Navigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function PostMoreInfo() {
    const [post, setPost] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    },[id])

    const navigate = useNavigate()
    const handleClick = () => navigate(-1)

    return(
        <>
            <h3>{post?.title}</h3>
            <img src={post?.url} alt=""/>
            <button style={{width:"100px", height:"30px"}} onClick={handleClick}>Back</button>
        </>
    )
}