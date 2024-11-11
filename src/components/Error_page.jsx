import { Link } from "react-router-dom";

export default function Error_page(){

    return(
        <div className="error_box">
            <h1>Error !</h1>
            <p>
                Page You trying to Access is not found . <br />
                <Link to={'/'}>Go back</Link>
            </p>
        </div>
    )
}