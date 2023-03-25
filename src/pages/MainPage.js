import {useLocation} from "react-router-dom";

export default function MainPage() {
    const {state} = useLocation()


    return(
        <>
            <h1>Main Page</h1>
            <h2>Hello, {state}</h2>
        </>
    )
}