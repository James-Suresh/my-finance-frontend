import { Link } from "react-router-dom"
import './Header.scss'
import logo from '../../Assets/Images/myfinance-logo.png'
const Header = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-logo">
                   <Link to="/"><img className="nav__list-img" src={logo} alt="my-finance-logo" /></Link>
                </li>
                <li className="nav__list-item">
                    <Link to ="/login">Login</Link>
                </li>
                {/* <li className="nav__list-item">        
                    <Link to="/register">Register</Link>
                </li> */}
                <li className="nav__list-item">
                    <Link to="/news">News</Link>
                </li>
             </ul>
        </nav>
    );
}

export default Header;