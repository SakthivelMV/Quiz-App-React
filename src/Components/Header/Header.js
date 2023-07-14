import "./Header.css";
import {Link} from "react-router-dom"
function header(){
    return(
        <div className="header">
            <Link to="/" className="title">React Quiz</Link>
        </div>
    )
}
export default header