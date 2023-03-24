import {Link} from "react-router-dom";

export function Post({post}) {
    return(
        <li>
            <Link to={`${post.id}`}>{post.title}</Link>
            <p>-----------------------------------------</p>
        </li>
    )
}