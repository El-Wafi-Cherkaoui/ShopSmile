import { useNavigate } from "react-router-dom";
import App from "../routes/App";
import { useEffect } from "react";

export default function Error_page(){
    const navigate = useNavigate()
    // useEffect(()=>{
    //     const timer = setTimeout(() => {
    //         navigate('/')
    //     return(
    //         ()=>{
    //             clearTimeout(timer)
    //         }
    //     )
    //     }, 1000);
    // }, [])

    return(
        <div className="error_box">
            <h1>Error title</h1>
            Page You trying to Access is not found .
        </div>
    )
}