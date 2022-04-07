import { Link } from "react-router-dom";

export default function Initial(){
    return(
        <div>
            <h1>Initial</h1>
            <Link to="/home">Home</Link>
            <Link to="/Details">Details</Link>
        </div>
    );
}