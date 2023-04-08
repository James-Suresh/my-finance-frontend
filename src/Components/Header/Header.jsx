import { Link } from "react-router-dom"
import './Header.scss'
const Header = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li>
                    <Link className="nav__list--item" to ="/login">Login</Link>
                </li>
                <li>        
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
             </ul>
        </nav>
    );
}

export default Header;