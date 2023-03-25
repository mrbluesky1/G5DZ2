import {Link} from "react-router-dom";

export function NavBar() {
    return(
        <ul className='navBar'>
            <li><Link to="/">Main Page</Link></li>
            <li><Link to="/posts">Posts Page</Link></li>
        </ul>
    )
}