import { Link, useLocation } from "react-router-dom"
import './Header.scss'
import logo from '../../Assets/Images/myfinance-logo.png'
const Header = () => {
    const location = useLocation();
    
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-logo">
                   <Link to="/"><img className="nav__list-img"  src={logo} alt="my-finance-logo" /></Link>
                </li>
                <li className={(location.pathname==="/login")?"nav__list-item nav__list-item--selected":"nav__list-item"}>
                    <Link to ="/login">Login</Link>
                </li>
                {/* <li className="nav__list-item">        
                    <Link to="/register">Register</Link>
                </li> */}
                <li className={(location.pathname==="/news")?"nav__list-item nav__list-item--selected":"nav__list-item"}>
                    <Link to="/news">News</Link>
                 
                </li>
                <li className={(location.pathname==="/stocks")?"nav__list-item nav__list-item--selected":"nav__list-item"} >
                    
                    <Link to="/stocks">Stocks</Link>
                </li>
             </ul>
        </nav>
    );
}

export default Header;